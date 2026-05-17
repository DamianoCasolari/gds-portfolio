"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/src/data/projects";

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

// ── Desktop carousel ──────────────────────────────────────────────────────────

function Carousel() {
  const [[index, dir], setPage] = useState([0, 0]);

  const paginate = (newDir: number) =>
    setPage([(index + newDir + projects.length) % projects.length, newDir]);

  const goTo = (i: number) => setPage([i, i > index ? 1 : -1]);

  const project = projects[index];

  return (
    <section className="hidden md:flex flex-col items-center gap-6 px-10 pb-20">
      <div className="relative w-full max-w-xl aspect-square overflow-hidden bg-black/5">
        <AnimatePresence custom={dir} initial={false} mode="popLayout">
          <motion.div
            key={index}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) paginate(1);
              else if (info.offset.x > 60) paginate(-1);
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <Link
              href={`/projects/${project.id}`}
              className="block w-full h-full"
              draggable={false}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                draggable={false}
                className="w-full h-full object-cover select-none"
              />
            </Link>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => paginate(-1)}
          aria-label="Precedente"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/20 backdrop-blur-sm text-white/80 hover:bg-white/40 hover:text-white transition"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          onClick={() => paginate(1)}
          aria-label="Successivo"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/20 backdrop-blur-sm text-white/80 hover:bg-white/40 hover:text-white transition"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="noneblack">
            <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="absolute bottom-3 right-3 z-10 bg-white/80 backdrop-blur-sm px-2 py-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/50">
            {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="flex w-full max-w-xl flex-col gap-3">
        <motion.div
          key={`title-${index}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={`/projects/${project.id}`}
            className="group flex items-baseline justify-between border-b border-black/10 pb-3"
          >
            <h3 className="font-sans text-base font-medium text-black group-hover:underline underline-offset-4">
              {project.title}
            </h3>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 ml-3 text-black/40 group-hover:text-black transition">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>

        <div className="flex gap-1.5">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Vai al progetto ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-black" : "w-1.5 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Mobile editorial list ─────────────────────────────────────────────────────

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div>
      <Link href={`/projects/${project.id}`} className="block aspect-[4/3] overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="py-5 border-b border-black/10">
        <Link
          href={`/projects/${project.id}`}
          className="group flex items-baseline justify-between mb-2"
        >
          <h3 className="font-sans text-sm font-medium text-black group-hover:underline underline-offset-4">
            {project.title}
          </h3>
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0 ml-3 text-black/40 group-hover:text-black transition">
            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <p className="font-sans text-xs text-black/55 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}

function PairProjects({ pair }: { pair: [Project, Project] }) {
  return (
    <div className="grid grid-cols-2 gap-3 py-6 border-b border-black/10">
      {pair.map((p) => (
        <div key={p.id}>
          <Link href={`/projects/${p.id}`} className="block aspect-square overflow-hidden mb-2">
            <img src={p.images[0]} alt={p.title} className="w-full h-full object-cover" />
          </Link>
          <p className="font-sans text-xs font-medium text-black leading-snug mb-1">{p.title}</p>
          <p className="font-sans text-[11px] text-black/50 leading-relaxed line-clamp-3">
            {p.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function MobileList() {
  // Pattern per gruppo di 4: featured(testo) → coppia(desc sotto) → featured(testo)
  const groups: Array<{ featured: Project; pair: [Project, Project]; last: Project }> = [
    { featured: projects[0], pair: [projects[1], projects[2]], last: projects[3] },
    { featured: projects[4], pair: [projects[5], projects[6]], last: projects[7] },
  ];

  return (
    <section className="flex md:hidden flex-col px-6 pb-20 gap-0">
      {groups.map((group, i) => (
        <div key={i} className={i > 0 ? "pt-8" : ""}>
          <FeaturedProject project={group.featured} />
          <PairProjects pair={group.pair} />
          {i < groups.length - 1 ? (
            <FeaturedProject project={group.last} />
          ) : (
            // Ultima immagine: solo foto full-width senza testo sotto
            <Link
              href={`/projects/${group.last.id}`}
              className="block aspect-[4/3] overflow-hidden mt-6"
            >
              <img
                src={group.last.images[0]}
                alt={group.last.title}
                className="w-full h-full object-cover"
              />
            </Link>
          )}
        </div>
      ))}
    </section>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────

export default function ProjectCarousel() {
  return (
    <>
      <Carousel />
      <MobileList />
    </>
  );
}
