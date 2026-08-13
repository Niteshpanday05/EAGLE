import type { ReactNode } from "react";

export interface NavbarUser {
  id: number;
  first_name?: string;
  last_name?: string;
  email: string;
  avatar?: string | null;
}

export interface NavbarCategory {
  id: number;
  name: string;
  slug: string;
  image?: string | null;
  children?: NavbarCategory[];
}

export interface NavbarProps {
  user?: NavbarUser | null;

  categories?: NavbarCategory[];
  categoriesLoading?: boolean;

  cartCount?: number;
  wishlistCount?: number;

  isAuthenticated?: boolean;

  children?: ReactNode;
}