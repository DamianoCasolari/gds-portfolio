"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/src/data/projects";

export default function ProjectGrid() {
  return (
    <section
      id="projects"
      className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/[0.07] scroll-mt-[116px] sm:scroll-mt-20"
    >
      {projects.map((project, i) => {
        return (
          <motion.div
            key={project.id}
            id={`project-${project.id}`}
            className="scroll-mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
              duration: 1.1,
              ease: "easeOut",
              delay: (i % 2) * 0.08,
            }}
          >
            <Link
              href={`/projects/${project.id}`}
              className="group relative block overflow-hidden bg-[#f7f4ee]"
            >
              <div className="h-[calc(100svh-179.99px)] sm:aspect-[4/3] sm:h-auto overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
                />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </section>
  );
}
