"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "../loading";
import { ThemeProvider } from "@/app/providers/theme-provider";
import { CustomCursor } from "../custom-cursor";

export function RootProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <CustomCursor />
      {isLoading ? <LoadingScreen /> : children}
    </ThemeProvider>
  );
}
