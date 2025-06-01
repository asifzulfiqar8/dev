"use client";

import { Github, Linkedin, MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[90svh] w-full flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full max-w-7xl mx-auto">
          <div className="absolute top-1/4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse delay-100" />
          <div className="absolute bottom-1/4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 sm:px-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-12 md:gap-16"
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Available for Work
            </span>
          </motion.div>

          {/* Main content */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              Hey, I'm <span className="text-primary">Asif.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="max-w-2xl mx-auto text-base sm:text-xl text-textColor/80"
            >
              Modern Web Engineer | React, Next.js, Node.js & LLM Integrations
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="max-w-2xl mx-auto text-sm sm:text-base text-textColor/80"
            >
              Turning ideas into sleek, scalable web apps — with code that’s
              built to last.
            </motion.p>
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            {/* Primary Button */}
            <Link
              href="/images/asifzulfqar-resume.pdf"
              className="group relative inline-flex items-center justify-center gap-2 h-12 px-6 bg-primary text-white rounded-lg transition-all hover:bg-primary/90 active:scale-[0.98]"
            >
              <span className="font-medium">See Resume</span>
              <MoveRight className="w-4 h-4" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="#contact"
              className="group relative inline-flex items-center justify-center h-12 px-6 text-textColor/80 rounded-lg transition-all hover:text-textColor hover:bg-primary/10"
            >
              <span className="font-medium">Let's Talk</span>
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-4 sm:ml-2">
              <Link
                href="https://github.com/asifzulfiqar8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-textColor/60 hover:text-textColor transition-colors hover:bg-primary/10 rounded-full"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/asifzulfiqar8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-textColor/60 hover:text-textColor transition-colors hover:bg-primary/10 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
