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
      try {
        await queryClient.fetchQuery({
          queryKey: ["current-user"],
          queryFn: () => authApi.getCurrentUser(),
          staleTime: 5 * 60 * 1000,
        });

        toast.success("Login successful");

        router.replace("/");
      } catch (error) {
        console.error(
          "Failed to fetch current user:",
          error
        );

        toast.error(
          "Login successful, but failed to load your profile."
        );
      }
    },

    onError: (error: any) => {
      const message =
        error?.response?.data?.detail ||
        "Invalid email or password.";

      toast.error(message);
    },
  });
}