"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Group skills by category for better organization
const skillsData = {
  row1: [
    { name: "React", icon: "/images/skills/react.svg" },
    { name: "Next.js", icon: "/images/skills/next.svg" },
    { name: "TypeScript", icon: "/images/skills/typescript.svg" },
    { name: "Tailwind", icon: "/images/skills/tailwind.svg" },
    { name: "Material UI", icon: "/images/skills/mui.svg" },
    { name: "SASS", icon: "/images/skills/sass.svg" },
  ],
  row2: [
    { name: "Node.js", icon: "/images/skills/nodejs.svg" },
    { name: "Express", icon: "/images/skills/express.svg" },
    { name: "MongoDB", icon: "/images/skills/mongodb.svg" },
    { name: "HTML", icon: "/images/skills/html.svg" },
    { name: "CSS", icon: "/images/skills/css.svg" },
    { name: "JavaScript", icon: "/images/skills/js.svg" },
  ],
  row3: [
    { name: "Git", icon: "/images/skills/git.svg" },
    { name: "GitHub", icon: "/images/skills/github.svg" },
    { name: "Postman", icon: "/images/skills/postman.svg" },
    { name: "WordPress", icon: "/images/skills/wordpress.svg" },
    { name: "Redux", icon: "/images/skills/redux.svg" },
    { name: "Figma", icon: "/images/skills/figma.svg" },
  ],
};

function MovingCards({
  items,
  direction = "left",
  baseVelocity = 100,
}: {
  items: { name: string; icon: string }[];
  direction?: "left" | "right";
  baseVelocity?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { damping: 50, stiffness: 400, mass: 1 };
  const translateX = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      direction === "left" ? [0, -baseVelocity * 2] : [-baseVelocity * 2, 0]
    ),
    springConfig
  );

  return (
    <div
      ref={containerRef}
      className="relative flex overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
    >
      <motion.div style={{ x: translateX }} className="flex gap-4 min-w-max">
        {/* Original set */}
        {items.map((item) => (
          <SkillIcon key={item.name} {...item} />
        ))}
        {/* Duplicate set for seamless loop */}
        {items.map((item) => (
          <SkillIcon key={`${item.name}-dup-1`} {...item} />
        ))}
        {items.map((item) => (
          <SkillIcon key={`${item.name}-dup-2`} {...item} />
        ))}
      </motion.div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section className="w-full py-20 overflow-hidden bg-gradient-to-b from-transparent to-primary/5">
      <div className="px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-textColor/60 max-w-2xl mx-auto"
          >
            Here are the technologies I work with to bring ideas to life.
          </motion.p>
        </div>

        {/* Skills Rows with Scroll-based Movement */}
        <div className="space-y-4 grid place-items-center">
          <MovingCards
            items={skillsData.row1}
            direction="left"
            baseVelocity={150}
          />
          <MovingCards
            items={skillsData.row2}
            direction="right"
            baseVelocity={120}
          />
          <MovingCards
            items={skillsData.row3}
            direction="left"
            baseVelocity={180}
          />
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center group px-3"
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl bg-bgColor p-3 border border-primary/10 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/25">
        <Image src={icon} alt={name} fill className="object-contain p-2" />
      </div>
      <span className="mt-2 text-sm text-textColor/60 group-hover:text-primary transition-colors duration-300">
        {name}
      </span>
    </motion.div>
  );
}
