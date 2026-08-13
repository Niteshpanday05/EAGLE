const ACCESS_TOKEN_KEY = "access";
const REFRESH_TOKEN_KEY = "refresh";

class AuthStorage {
  getAccessToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(ACCESS_TOKEN_KEY);
  }

  getRefreshToken(): string | null {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

  setAccessToken(token: string): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
  }

  setRefreshToken(token: string): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(REFRESH_TOKEN_KEY, token);
  }

  setTokens(access: string, refresh: string): void {
    this.setAccessToken(access);
    this.setRefreshToken(refresh);
  }

  clearTokens(): void {
    if (typeof window === "undefined") return;

    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
}

export const authStorage = new AuthStorage();