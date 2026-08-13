"use client";

import { ReactNode } from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <DashboardSidebar />

      <div className="flex flex-1 flex-col">

        <DashboardHeader />

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}