"use client";

import { useMutation } from "@tanstack/react-query";

import { registerUser } from "../api/auth-register";
import { RegisterRequest } from "../types/auth.types";

export function useRegister() {
  return useMutation({
    mutationFn: (data: RegisterRequest) =>
      registerUser(data),
  });
}