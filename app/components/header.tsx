"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";
import { useEffect, useState } from "react";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full backdrop-blur-sm transition-colors border-b border-gray-400/20">
        <div className="container flex h-16 items-center justify-between px-4 mx-auto">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/asif.png"
              alt="Asif Zulfiqar"
              width={40}
              height={40}
              className="rounded-full border border-gray-300"
            />
            <span className="text-xl font-bold text-textColor">Asif.</span>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#hero"
                className="text-sm font-medium text-textColor transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium text-textColor transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-textColor transition-colors hover:text-primary"
              >
                About
              </Link>
            </nav>
            <div className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 bg-bgColor">
              <span className="sr-only">Toggle theme</span>
              <Sun className="h-4 w-4 text-textColor" />
            </div>
            <Link
              href="#lets-talk"
              className="group relative inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 animate-button-glow"
            >
              <span className="relative">Let's Talk</span>
            </Link>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm transition-colors border-b border-gray-400/20">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/images/asif.png"
            alt="Asif Zulfiqar"
            width={40}
            height={40}
            className="rounded-full border border-gray-300"
          />
          <span className="text-xl font-bold text-textColor">Asif.</span>
        </Link>
        <div className="flex items-center space-x-2 sm:space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#hero"
              className="text-sm font-medium text-textColor transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium text-textColor transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-textColor transition-colors hover:text-primary"
            >
              About
            </Link>
          </nav>
          <button
            onClick={() =>
              setTheme(
                theme === "dark"
                  ? "light"
                  : theme === "light"
                  ? "system"
                  : "dark"
              )
            }
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-400 bg-bgColor transition-transform hover:scale-105"
          >
            <span className="sr-only">Toggle theme</span>
            {theme === "dark" ? (
              <Moon className="h-4 w-4 text-textColor" />
            ) : theme === "light" ? (
              <Sun className="h-4 w-4 text-textColor" />
            ) : (
              <Laptop className="h-4 w-4 text-textColor" />
            )}
          </button>
          <Link
            href="#lets-talk"
            className="group relative inline-flex h-9 items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 animate-button-glow"
          >
            <span className="relative">Let's Talk</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
