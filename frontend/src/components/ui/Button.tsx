import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-lg px-4 py-2 font-medium transition",
        {
          "bg-black text-white hover:bg-gray-800":
            variant === "primary",

          "border bg-white hover:bg-gray-50":
            variant === "secondary",

          "bg-red-600 text-white hover:bg-red-700":
            variant === "danger",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}