"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const controls = useAnimationControls();

  useEffect(() => {
    const steps = [
      { target: 30, duration: 400 },
      { target: 60, duration: 600 },
      { target: 85, duration: 500 },
      { target: 100, duration: 500 },
    ];

    let currentStep = 0;
    let startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const step = steps[currentStep];

      if (!step) return;

      const stepProgress = Math.min(elapsed / step.duration, 1);
      const previousTarget =
        currentStep > 0 ? steps[currentStep - 1].target : 0;
      const currentProgress =
        previousTarget + (step.target - previousTarget) * stepProgress;

      setProgress(Math.round(currentProgress));

      if (stepProgress >= 1 && currentStep < steps.length - 1) {
        currentStep++;
        startTime = Date.now();
        requestAnimationFrame(updateProgress);
      } else if (stepProgress < 1) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Top-right gradient */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          {/* Bottom-left gradient */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-300" />
          {/* Center subtle gradient */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
        </motion.div>
      </div>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-10"
      >
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 1,
          }}
          className="relative"
        >
          {/* Rotating circles around logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, var(--primary), transparent)",
              opacity: 0.2,
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full"
            style={{
              background:
                "conic-gradient(from 180deg, transparent, var(--primary), transparent)",
              opacity: 0.1,
            }}
          />

          {/* Logo */}
          <div className="relative size-20 rounded-full overflow-hidden backdrop-blur-sm">
            <Image
              src="/images/asif.png"
              alt="Asif Zulfiqar"
              fill
              className="object-cover"
              priority
            />
            {/* Shimmering overlay */}
            <motion.div
              animate={{
                backgroundPosition: ["200% 50%", "-200% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(var(--primary-rgb), 0.1), transparent)",
                backgroundSize: "200% 100%",
              }}
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-6 text-center">
          {/* Progress Bar */}
          <div className="flex flex-col items-center gap-3">
            {/* Percentage Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-bold !font-geist text-textColor my-2"
            >
              {progress}%
            </motion.div>
            {/* Percentage Bar Container */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "240px", opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-full"
            >
              <div className="h-[3px] w-full bg-textColor/10 overflow-hidden">
                <motion.div
                  className="h-full bg-textColor"
                  style={{
                    width: `${progress}%`,
                    transition: "width 0.3s ease-out",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
