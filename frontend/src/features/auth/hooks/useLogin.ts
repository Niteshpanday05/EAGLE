"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { authApi } from "../api/auth.api";
import { LoginRequest } from "../types/auth.types";

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: LoginRequest) => authApi.login(data),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["current-user"],
      });

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