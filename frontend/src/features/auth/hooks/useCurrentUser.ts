"use client";

import { useQuery } from "@tanstack/react-query";

import { authApi } from "../api/auth.api";
import { authStorage } from "../utils/auth.storage";

export function useCurrentUser() {
  const accessToken = authStorage.getAccessToken();

  return useQuery({
    queryKey: ["current-user"],
    queryFn: () => authApi.getCurrentUser(),
    enabled: !!accessToken,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
}