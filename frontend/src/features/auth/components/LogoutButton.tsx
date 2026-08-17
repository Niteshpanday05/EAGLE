"use client";

import { LogOut } from "lucide-react";
import { useLogout } from "../hooks/useLogout";

interface LogoutButtonProps {
  onLogout?: () => void;
}

export default function LogoutButton({
  onLogout,
}: LogoutButtonProps) {
  const { logout } = useLogout();

  const handleLogout = async () => {
    onLogout?.();
    await logout();
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="
        flex
        w-full
        items-center
        gap-3
        rounded-xl
        px-3
        py-2.5
        text-left
        text-sm
        font-medium
        text-red-600
        transition
        hover:bg-red-50
        hover:text-red-700
      "
    >
      <LogOut className="h-4 w-4 shrink-0" />

      <span>Logout</span>
    </button>
  );
}