"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Phase = "full" | "collapse";

const letters = [
  { char: "G", keep: true },
  { char: "I", keep: false },
  { char: "U", keep: false },
  { char: "S", keep: false },
  { char: "Y", keep: false },
  { char: " ", keep: false, space: true },
  { char: "D", keep: true },
  { char: "I", keep: false },
  { char: " ", keep: false, space: true },
  { char: "S", keep: true },
  { char: "T", keep: false },
  { char: "A", keep: false },
  { char: "S", keep: false },
  { char: "I", keep: false },
  { char: "O", keep: false },
];

export default function AnimatedMonogram() {
  const [phase, setPhase] = useState<Phase>("full");

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("collapse");
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden">
      <div className="relative flex w-full justify-center">
        <div
          className={`flex items-center justify-center transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${
            phase === "full" ? "gap-[0.02em]" : "gap-0"
          }`}
        >
          {letters.map((item, index) => {
            if (item.space) {
              return (
                <motion.span
                  key={`space-${index}`}
                  initial={false}
                  animate={{
                    width: phase === "full" ? "0.78em" : "2.5em",
                    opacity: phase === "full" ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block shrink-0 "
                />
              );
            }

            return (
              <motion.span
                key={`${item.char}-${index}`}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{
                  opacity:
                    phase === "full"
                      ? 1
                      : item.keep
                      ? 1
                      : 0,
                  y: 0,
                  filter:
                    phase === "full"
                      ? "blur(0px)"
                      : item.keep
                      ? "blur(0px)"
                      : "blur(8px)",
                  width:
                    phase === "full"
                      ? "auto"
                      : item.keep
                      ? "0.62em"
                      : "0em",
                  marginRight:
                    phase === "full"
                      ? "0em"
                      : item.keep
                      ? "0em"
                      : "0em",
                  scale:
                    phase === "full"
                      ? 1
                      : item.keep
                      ? 1.5
                      : 10,
                      display: item.keep || phase === "full" ? "block" : "none",
                }}
                transition={{
                  duration: phase === "full" ? 0.8 : 0.8,
                  delay: phase === "full" ? index * 0.04 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  "block overflow-hidden whitespace-nowrap font-sans",
                  "text-[14vw] font-medium uppercase leading-[0.9] tracking-[-0.08em] text-black",
                  "sm:text-[12vw] md:text-[10vw] lg:text-[8rem]", "overflow-visible"
                ].join(" ")}
              >
                {item.char}
              </motion.span>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{
          opacity: phase === "collapse" ? 1 : 0,
          y: phase === "collapse" ? 0 : 18,
        }}
        transition={{
          duration: 0.7,
          delay: phase === "collapse" ? 0.45 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
      >
       
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.24em] text-black/45 md:text-xs">
          Accounting & Organization
        </p>
      </motion.div>
    </section>
  );
}