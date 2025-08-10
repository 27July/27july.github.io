"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    //Hydration mismatch
    if (!mounted) {
    return (
        <button className="inline-flex ... dark:hover:bg-neutral-900" aria-label="Toggle theme" disabled>
        <Sun className="h-4 w-4" />
        </button>
    );
    }
    const isDark = resolvedTheme === "dark";


  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm
                 hover:bg-neutral-100 :hover:bg-neutral-900"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
