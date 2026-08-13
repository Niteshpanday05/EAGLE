import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function DashboardGrid({
  children,
}: Props) {
  return (
    <div
      className="
        grid
        gap-6

        grid-cols-1

        lg:grid-cols-2

        2xl:grid-cols-2
      "
    >
      {children}
    </div>
  );
}