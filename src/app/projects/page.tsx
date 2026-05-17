"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/src/data/projects";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -64 : 64 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.08 }}
    >
      <Link href={`/projects/${project.id}`} className="group block">
        <div className="aspect-[4/3] overflow-hidden mb-4 bg-black/5">
          <img
            src={project.images[0]}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex items-baseline justify-between border-b border-black/10 pb-3 mb-3">
          <h2 className="font-sans text-base font-medium text-black group-hover:underline underline-offset-4">
            {project.title}
          </h2>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 ml-3 text-black/30 group-hover:text-black transition">
            <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-sans text-sm leading-relaxed text-black/55 line-clamp-2">
          {project.description}
        </p>
      </Link>
    </motion.div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 md:mb-16"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-black/35 mb-3">
          {String(projects.length).padStart(2, "0")} progetti
        </p>
        <h1 className="font-sans text-3xl md:text-4xl font-medium leading-tight tracking-tight text-black">
          Lavori
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 md:gap-y-20">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </main>
  );
}
