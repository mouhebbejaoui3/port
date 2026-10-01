"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";

const ThemeContext = createContext<{
  theme: "light";
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: "light", toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}
