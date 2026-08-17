"use client";

import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import { authApi } from "../api/auth.api";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const logout = async () => {
    try {
      await authApi.logout();
    } finally {
      // Remove the authenticated user immediately
      queryClient.setQueryData(["current-user"], null);

      // Go to login
      router.replace("/login");
    }
  };

  return {
    logout,
  };
}