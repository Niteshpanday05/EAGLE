import axios from "axios";

import {
  RefreshTokenRequest,
  RefreshTokenResponse,
} from "../types/auth.types";

import { authStorage } from "../utils/auth.storage";

const refreshClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function refreshAccessToken(): Promise<string> {
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