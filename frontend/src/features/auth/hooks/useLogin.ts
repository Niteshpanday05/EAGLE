"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authApi } from "../api/auth.api";
import { LoginRequest } from "../types/auth.types";

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),

    onSuccess: () => {
      toast.success("Login successful");

      router.push("/");
    },

    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        "Invalid email or password.";

      toast.error(message);
    },
  });
}