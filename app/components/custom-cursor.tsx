"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -10, y: -10 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
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

      // Check if hovering over project card
      const isProjectCard = Boolean(target.closest(".project-card"));

      setIsHovering(isInteractive);
      setIsHoveringProject(isProjectCard);
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
    <>
      {/* Main cursor arrow */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none"
        animate={{
          opacity: isVisible && !isHoveringProject ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="relative"
          style={{
            transform: `translate3d(${position.x - 10}px, ${
              position.y - 10
            }px, 0)`,
          }}
        >
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
              className="fill-textColor"
              style={{
                transformOrigin: "center",
                transform: "rotate(240deg)",
              }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>

      {/* Project hover cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none"
        animate={{
          opacity: isVisible && isHoveringProject ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="relative"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        >
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-textColor flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: isHoveringProject ? 1 : 0.8,
              opacity: isHoveringProject ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className="relative w-full h-8 overflow-hidden flex items-center">
              <motion.div
                className="flex items-center absolute whitespace-nowrap"
                animate={{
                  x: [0, "-50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="flex items-center text-bgColor">
                  <span className="text-lg font-bold ml-1">Open</span>
                  <ArrowUpRight className="size-5 ml-1" />
                </div>
                <div className="flex items-center text-bgColor">
                  <span className="text-lg font-bold ml-1">Open</span>
                  <ArrowUpRight className="size-5 ml-1" />
                </div>
                <div className="flex items-center text-bgColor">
                  <span className="text-lg font-bold ml-1">Open</span>
                  <ArrowUpRight className="size-5 ml-1" />
                </div>
                <div className="flex items-center text-bgColor">
                  <span className="text-lg font-bold ml-1">Open</span>
                  <ArrowUpRight className="size-5 ml-1" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Regular hover indicator */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none mix-blend-difference"
        animate={{
          opacity: isVisible && isHovering && !isHoveringProject ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="relative"
          style={{
            transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 size-8 bg-white rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isHovering && !isHoveringProject ? 1 : 0,
              opacity: isHovering && !isHoveringProject ? 1 : 0,
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
    </>
  );
}
