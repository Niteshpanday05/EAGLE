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
      queryClient.clear();

      router.replace("/login");
      router.refresh();
    }
  };

  return {
    logout,
  };
}