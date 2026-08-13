import { ButtonHTMLAttributes, ReactNode } from "react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button.styles";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}