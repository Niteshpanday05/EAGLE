import { InputHTMLAttributes } from "react";

interface Props
  extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className = "",
  ...props
}: Props) {
  return (
    <input
      className={`w-full rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-black ${className}`}
      {...props}
    />
  );
}