import axios from "axios";

import apiClient from "@/lib/axios";

import {
  AuthResponse,
  LoginRequest,
  RefreshTokenRequest,
  RefreshTokenResponse,
} from "../types/auth.types";
import { authStorage } from "../utils/auth.storage";

const refreshClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

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

  async refreshToken(): Promise<string> {
    const refresh = authStorage.getRefreshToken();

    if (!refresh) {
      throw new Error("Refresh token not found.");
    }

    const response = await refreshClient.post<RefreshTokenResponse>(
      "/auth/token/refresh/",
      {
        refresh,
      } satisfies RefreshTokenRequest
    );

    authStorage.setAccessToken(response.data.access);

    if (response.data.refresh) {
      authStorage.setRefreshToken(response.data.refresh);
    }

    return response.data.access;
  }

  logout() {
    authStorage.clearTokens();
  }
}

export const authApi = new AuthApi();