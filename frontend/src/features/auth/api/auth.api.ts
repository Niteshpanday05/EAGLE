import apiClient from "@/lib/axios";

import {
  AuthResponse,
  LoginRequest,
} from "../types/auth.types";

import { authStorage } from "../utils/auth.storage";

class AuthApi {
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>(
      "/auth/login/",
      data
    );

    authStorage.setTokens(
      response.data.tokens.access,
      response.data.tokens.refresh
    );

    return response.data;
  }

 async logout(): Promise<void> {
  const refresh = authStorage.getRefreshToken();

  try {
    if (refresh) {
      await apiClient.post("/auth/logout/", {
        refresh,
      });
    }
  } finally {
    authStorage.clearTokens();
  }
}
}

export const authApi = new AuthApi();