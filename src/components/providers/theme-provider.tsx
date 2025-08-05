"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "dark",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "asante-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get theme from localStorage
    const storedTheme = localStorage.getItem(storageKey) as Theme;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!mounted) return;

    const root = window.document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove("light", "dark");
    
    // Determine the actual theme to apply
    let actualTheme: "light" | "dark";
    
    if (theme === "system") {
      actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      actualTheme = theme;
    }
    
    // Apply the theme class
    root.classList.add(actualTheme);
    setResolvedTheme(actualTheme);
    
    // Update CSS custom properties for theme colors
    if (actualTheme === "light") {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#0f172a");
      root.style.setProperty("--card", "#ffffff");
      root.style.setProperty("--card-foreground", "#0f172a");
      root.style.setProperty("--popover", "#ffffff");
      root.style.setProperty("--popover-foreground", "#0f172a");
      root.style.setProperty("--primary", "#d4af37");
      root.style.setProperty("--primary-foreground", "#ffffff");
      root.style.setProperty("--secondary", "#f1f5f9");
      root.style.setProperty("--secondary-foreground", "#0f172a");
      root.style.setProperty("--muted", "#f8fafc");
      root.style.setProperty("--muted-foreground", "#64748b");
      root.style.setProperty("--accent", "#f1f5f9");
      root.style.setProperty("--accent-foreground", "#0f172a");
      root.style.setProperty("--destructive", "#ef4444");
      root.style.setProperty("--destructive-foreground", "#ffffff");
      root.style.setProperty("--border", "#e2e8f0");
      root.style.setProperty("--input", "#e2e8f0");
      root.style.setProperty("--ring", "#d4af37");
      root.style.setProperty("--radius", "0.5rem");
    } else {
      root.style.setProperty("--background", "#0f172a");
      root.style.setProperty("--foreground", "#f8fafc");
      root.style.setProperty("--card", "#1e293b");
      root.style.setProperty("--card-foreground", "#f8fafc");
      root.style.setProperty("--popover", "#1e293b");
      root.style.setProperty("--popover-foreground", "#f8fafc");
      root.style.setProperty("--primary", "#d4af37");
      root.style.setProperty("--primary-foreground", "#0f172a");
      root.style.setProperty("--secondary", "#334155");
      root.style.setProperty("--secondary-foreground", "#f8fafc");
      root.style.setProperty("--muted", "#334155");
      root.style.setProperty("--muted-foreground", "#94a3b8");
      root.style.setProperty("--accent", "#334155");
      root.style.setProperty("--accent-foreground", "#f8fafc");
      root.style.setProperty("--destructive", "#ef4444");
      root.style.setProperty("--destructive-foreground", "#ffffff");
      root.style.setProperty("--border", "#334155");
      root.style.setProperty("--input", "#334155");
      root.style.setProperty("--ring", "#d4af37");
      root.style.setProperty("--radius", "0.5rem");
    }
  }, [theme, mounted]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    resolvedTheme,
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
}; 