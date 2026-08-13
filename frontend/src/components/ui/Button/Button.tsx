"use client";

import { Loader2 } from "lucide-react";
import { ButtonProps } from "./button.types";
import { buttonVariants } from "./button.styles";
import { cn } from "@/lib/cn";

export default function Button({
  children,
  variant,
  size,
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        fullWidth && "w-full",
        className
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}

      {!loading && leftIcon}

      <span>{children}</span>

      {!loading && rightIcon}
    </button>
  );
}