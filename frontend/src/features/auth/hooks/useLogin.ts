"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { authApi } from "../api/auth.api";
import { LoginRequest } from "../types/auth.types";

export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),

    onSuccess: () => {
      toast.success("Login successful");
      window.location.href = "/";
    },

    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        "Invalid email or password.";

      toast.error(message);
    },
  });
}