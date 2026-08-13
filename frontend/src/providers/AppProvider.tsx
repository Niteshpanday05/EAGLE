"use client";

import { ReactNode } from "react";
import ReduxProvider from "./ReduxProvider";
import QueryProvider from "./QueryProvider";

interface Props {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  return (
    <ReduxProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </ReduxProvider>
  );
}