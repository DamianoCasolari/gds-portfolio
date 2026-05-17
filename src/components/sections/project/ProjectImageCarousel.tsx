"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import type { ProjectSection } from "@/src/data/projects";

type SlideKind = "split-left" | "full" | "split-right" | "full";
const SLIDE_KINDS: SlideKind[] = ["split-left", "full", "split-right", "full"];

type Props = {
  images: string[];
  title: string;
  description: string;
  sections: [ProjectSection, ProjectSection];
  url?: string;
  projectIndex: number;
  projectTotal: number;
};

const variants = {
  enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%" }),
  center: { x: 0 },
  exit: (d: number) => ({ x: d < 0 ? "100%" : "-100%" }),
};

// ── Parallax image ────────────────────────────────────────────────────────────

function ParallaxImg({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <div ref={ref} className="aspect-square overflow-hidden -mx-6 md:-mx-10 relative">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 w-full h-[140%] object-cover top-1/2 -translate-y-1/2"
      />
    </div>
  );
}

// ── Mobile editorial stack ────────────────────────────────────────────────────

function MobileStack({ images, title, sections, url }: Props) {
  const imgBlock = (src: string) => (
    <div className="aspect-square overflow-hidden -mx-6 md:-mx-10">
      <img src={src} alt={title} className="w-full h-full object-cover" />
    </div>
  );

  const textBlock = (section: typeof sections[0], withLink?: boolean) => (
    <div className="py-8 px-1">
      <h2 className="font-sans text-lg font-medium leading-tight tracking-tight text-black mb-3">
        {section.title}
      </h2>
      <p className="font-sans text-sm leading-relaxed text-black/60 mb-4">
        {section.body}
      </p>
      {withLink && url && (
        <Link
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-black/45 hover:text-black transition-colors"
        >
          Vedi progetto
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
    </div>
  );

  // Schema fisso: img → text → img → img → text → img
  return (
    <div className="lg:hidden flex flex-col">
      {imgBlock(images[0])}
      {textBlock(sections[0])}
      <ParallaxImg src={images[1]} alt={title} />
      {imgBlock(images[2])}
      {textBlock(sections[1], true)}
      {imgBlock(images[3])}
    </div>
  );
}

// ── Desktop carousel ──────────────────────────────────────────────────────────

function DesktopCarousel({ images, title, description, url, projectIndex, projectTotal }: Props) {
  const [state, setState] = useState({ active: 0, dir: 1 });
  const { active, dir } = state;
  const total = SLIDE_KINDS.length;

  function paginate(step: number) {
    setState(prev => ({
      active: (prev.active + step + total) % total,
      dir: step > 0 ? 1 : -1,
    }));
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setState(prev => ({ active: (prev.active - 1 + total) % total, dir: -1 }));
      if (e.key === "ArrowRight") setState(prev => ({ active: (prev.active + 1) % total, dir: 1 }));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  const kind = SLIDE_KINDS[active];

  return (
    <div className="hidden lg:block relative w-full lg:aspect-auto lg:h-full overflow-hidden">
      <AnimatePresence custom={dir} initial={false}>
        <motion.div
          key={active}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.07}
          onDragEnd={(_, info) => {
            if (info.offset.x < -80) paginate(1);
            else if (info.offset.x > 80) paginate(-1);
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          {kind === "split-left" && (
            <SplitSlide image={images[active]} title={title} description={description} url={url}
              projectIndex={projectIndex} projectTotal={projectTotal} imageLeft />
          )}
          {kind === "split-right" && (
            <SplitSlide image={images[active]} title={title} description={description} url={url}
              projectIndex={projectIndex} projectTotal={projectTotal} imageLeft={false} />
          )}
          {kind === "full" && (
            <div className="absolute inset-0">
              <img src={images[active]} alt={title} draggable={false} className="w-full h-full object-cover select-none" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <button onClick={() => paginate(-1)} aria-label="Slide precedente"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white/80 backdrop-blur-sm text-black hover:bg-white transition"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button onClick={() => paginate(1)} aria-label="Slide successivo"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white/80 backdrop-blur-sm text-black hover:bg-white transition"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 items-center">
        {Array.from({ length: total }).map((_, i) => (
          <button key={i} onClick={() => setState({ active: i, dir: i > active ? 1 : -1 })} aria-label={`Slide ${i + 1}`}
            className={`block h-px transition-all duration-300 ${i === active ? "w-6 bg-black" : "w-3 bg-black/25 hover:bg-black/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

// ── Export ────────────────────────────────────────────────────────────────────

export default function ProjectImageCarousel(props: Props) {
  return (
    <>
      <MobileStack {...props} />
      <DesktopCarousel {...props} />
    </>
  );
}

function SplitSlide({ image, title, description, url, projectIndex, projectTotal, imageLeft }: {
  image: string; title: string; description: string; url?: string;
  projectIndex: number; projectTotal: number; imageLeft: boolean;
}) {
  return (
    <div className="absolute inset-0">
      <div className={`absolute inset-0 ${imageLeft ? "lg:right-1/2" : "lg:left-1/2"}`}>
        <img src={image} alt={title} draggable={false} className="w-full h-full object-cover select-none" />
      </div>
      <div className={`hidden lg:flex absolute inset-y-0 ${imageLeft ? "left-1/2 right-0" : "left-0 right-1/2"} flex-col justify-center px-12 xl:px-16 bg-[#f7f4ee]`}>
        <div className="flex flex-col gap-5 max-w-sm">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-black/35">
            {String(projectIndex + 1).padStart(2, "0")} / {String(projectTotal).padStart(2, "0")}
          </p>
          <h2 className="font-sans text-2xl xl:text-[1.75rem] font-medium leading-tight tracking-tight text-black">
            {title}
          </h2>
          <p className="font-sans text-sm leading-relaxed text-black/60">{description}</p>
          {url && (
            <Link href={url} target="_blank" rel="noreferrer" onPointerDown={e => e.stopPropagation()}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-black/45 hover:text-black transition-colors w-fit"
            >
              Vedi progetto
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
