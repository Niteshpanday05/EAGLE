import apiClient from "@/lib/axios";

import {
  RegisterRequest,
  RegisterResponse,
} from "../types/auth.types";

export async function registerUser(
  data: RegisterRequest
): Promise<RegisterResponse> {
  const response = await apiClient.post<RegisterResponse>(
    "/auth/register/",
    data
  );

  return response.data;
}