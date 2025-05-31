"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo Section */}
          <Link href="/" className="group relative flex items-center gap-2">
            <div className="relative">
              <Image
                src="/images/asif.png"
                alt="Asif Zulfiqar"
                width={32}
                height={32}
                className="rounded-full border border-gray-300"
              />
              <div className="absolute -inset-1 rounded-full bg-primary/10 blur-sm group-hover:bg-primary/20 transition-colors" />
            </div>
            <span className="text-lg font-semibold text-textColor">Asif.</span>
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-3 opacity-80">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="h-1 w-1 rounded-full bg-primary/50" />
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-textColor/60">
            <span>© Copyright 2023 | All Rights Reserved </span>
            <Link
              href="https://asifzulfiqar.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex text-primary/80 hover:text-primary transition-colors"
            >
              asifzulfiqar.pro
              <div className="absolute -bottom-px left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
