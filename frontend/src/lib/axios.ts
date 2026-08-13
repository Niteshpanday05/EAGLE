import axios from "axios";
import { authStorage } from "@/features/auth/utils/auth.storage";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const PUBLIC_ENDPOINTS = [
  "/auth/login/",
  "/auth/register/",
  "/auth/refresh/",
  "/auth/verify-email/",
  "/auth/resend-verification/",
  "/auth/forgot-password/",
  "/auth/reset-password/",
];

apiClient.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = authStorage.getAccessToken();

    const isPublicEndpoint = PUBLIC_ENDPOINTS.some((endpoint) =>
      config.url?.includes(endpoint)
    );

    if (token && !isPublicEndpoint) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default apiClient;