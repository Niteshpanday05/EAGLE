import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

import { authStorage } from "@/features/auth/utils/auth.storage";
import { refreshAccessToken } from "@/features/auth/api/auth-refresh";
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

type RetryableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
};

let isRefreshing = false;

let refreshSubscribers: Array<
  (token: string) => void
> = [];

const subscribeToRefresh = (
  callback: (token: string) => void
) => {
  refreshSubscribers.push(callback);
};

const notifyRefreshSubscribers = (token: string) => {
  refreshSubscribers.forEach((callback) => {
    callback(token);
  });

  refreshSubscribers = [];
};

const clearRefreshSubscribers = () => {
  refreshSubscribers = [];
};

/*
|--------------------------------------------------------------------------
| REQUEST INTERCEPTOR
|--------------------------------------------------------------------------
*/

apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const accessToken = authStorage.getAccessToken();

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/*
|--------------------------------------------------------------------------
| RESPONSE INTERCEPTOR
|--------------------------------------------------------------------------
*/

apiClient.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest =
      error.config as RetryableRequestConfig | undefined;

    if (!originalRequest) {
      return Promise.reject(error);
    }

    /*
     * Only handle 401 responses.
     */
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    /*
     * Prevent infinite retry loops.
     */
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    /*
     * We need a refresh token.
     */
    const refreshToken = authStorage.getRefreshToken();

    if (!refreshToken) {
      authStorage.clearTokens();

      return Promise.reject(error);
    }

    originalRequest._retry = true;

    /*
     * Another request is already refreshing.
     * Wait for it.
     */
    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        subscribeToRefresh((newAccessToken) => {
          originalRequest.headers.Authorization =
            `Bearer ${newAccessToken}`;

          apiClient(originalRequest)
            .then(resolve)
            .catch(reject);
        });
      });
    }

    /*
     * Start token refresh.
     */
    isRefreshing = true;

    try {
      const newAccessToken = await authApi.refreshToken();

      isRefreshing = false;

      /*
       * Notify requests waiting for the refresh.
       */
      notifyRefreshSubscribers(newAccessToken);

      /*
       * Retry original request.
       */
      originalRequest.headers.Authorization =
        `Bearer ${newAccessToken}`;

      return apiClient(originalRequest);
    } catch (refreshError) {
      isRefreshing = false;

      clearRefreshSubscribers();

      /*
       * Refresh token is no longer valid.
       */
      authStorage.clearTokens();

      return Promise.reject(refreshError);
    }
  }
);

export default apiClient;