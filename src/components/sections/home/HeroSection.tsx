"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/src/data/projects";
import AnimatedMonogram, { hasAnimated } from "./AnimatedMonogram";

const INITIAL_DELAY_MS = 4000;
const INTERVAL_MS = 4000;

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;
    const timeoutId = setTimeout(() => {
      setIndex((i) => (i + 1) % projects.length);
      intervalId = setInterval(() => {
        setIndex((i) => (i + 1) % projects.length);
      }, INTERVAL_MS);
    }, hasAnimated ? 0 : INITIAL_DELAY_MS);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  const project = projects[index];

  return (
    <section className="relative w-full h-[calc(100dvh-179.99px)] sm:h-[calc(100dvh-143.99px)] overflow-hidden">
      {/* Background carousel images */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Scrim overlay for text legibility */}
      <div className="absolute inset-0 z-[1] bg-black/25 pointer-events-none" />

      {/* Monogram on top */}
      <div className="absolute inset-0 z-10">
        <AnimatedMonogram />
      </div>
    </section>
  );
}
