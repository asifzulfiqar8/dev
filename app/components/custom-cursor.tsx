"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -10, y: -10 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX - 10,
        y: e.clientY - 10,
      });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = Boolean(
        target.tagName.toLowerCase() === "a" ||
          target.tagName.toLowerCase() === "button" ||
          target.closest("a") ||
          target.closest("button") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("cursor-pointer")
      );

      setIsHovering(isInteractive);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[999] pointer-events-none mix-blend-difference"
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {/* Main cursor arrow */}
        <motion.svg
          width="30"
          height="30"
          viewBox="0 0 20 20"
          className="absolute"
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <path
            d="M2 2L18 10L2 18L6 10L2 2Z"
            className="fill-white"
            style={{
              transformOrigin: "center",
              transform: "rotate(240deg)",
            }}
          />
        </motion.svg>

        {/* Hover indicator */}
        <motion.div
          className="absolute left-1/2 top-1/2 size-8 bg-white rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovering ? 1 : 0,
            opacity: isHovering ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
