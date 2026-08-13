import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "w-full rounded-lg border bg-white px-3 py-2 text-sm transition-all outline-none",
  {
    variants: {
      state: {
        default:
          "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500",

        error:
          "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500",

        disabled:
          "cursor-not-allowed bg-gray-100 opacity-60",
      },
    },

    defaultVariants: {
      state: "default",
    },
  }
);