"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { InputProps } from "./input.types";
import { inputVariants } from "./input.styles";
import { cn } from "@/lib/cn";

export default function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className,
  type = "text",
  fullWidth = true,
  required,
  disabled,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className={cn(fullWidth && "w-full")}>
      {label && (
        <label className="mb-2 block text-sm font-medium">
          {label}

          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            {leftIcon}
          </div>
        )}

        <input
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          disabled={disabled}
          className={cn(
            inputVariants({
              state: error
                ? "error"
                : disabled
                ? "disabled"
                : "default",
            }),
            leftIcon && "pl-10",
            (rightIcon || isPassword) && "pr-10",
            className
          )}
          {...props}
        />

        {isPassword ? (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        ) : (
          rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {rightIcon}
            </div>
          )
        )}
      </div>

      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}