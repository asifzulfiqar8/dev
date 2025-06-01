"use client";

import { motion } from "framer-motion";
import { Project, projects } from "@/app/lib/projects";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          >
            Recent Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-textColor/60 max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and
            experience.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <Link
        href={project.liveUrl || project.githubUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full project-card"
      >
        <div className="relative bg-bgColor rounded-2xl overflow-hidden border border-primary/10 h-full flex flex-col transition-all duration-500 group-hover:blur-[3px]">
          {/* Project Image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/5 text-primary/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-textColor">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-textColor/60 flex-1">
              {project.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
