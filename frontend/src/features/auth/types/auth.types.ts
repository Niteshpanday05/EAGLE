export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  confirm_password: string;
}

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone?: string | null;
  avatar?: string | null;
}

export interface Tokens {
  access: string;
  refresh: string;
}

export interface AuthResponse {
  user: User;
  tokens: Tokens;
}