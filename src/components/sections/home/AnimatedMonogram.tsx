"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Phase = "full" | "collapse";

const BAR_LETTERS = ["G", "D", "S"];
const BAR_WORDS = ["account", "event", "manager"];

export let hasAnimated = false;

export default function AnimatedMonogram() {
  const [phase, setPhase] = useState<Phase>(hasAnimated ? "collapse" : "full");
  const [shouldAnimate] = useState(() => !hasAnimated);
  const [isIOS] = useState(() =>
    typeof navigator !== "undefined" && /iPhone|iPad|iPod/.test(navigator.userAgent)
  );

  useEffect(() => {
    if (!shouldAnimate) return;
    const timer = setTimeout(() => {
      setPhase("collapse");
      hasAnimated = true;
    }, 1400);
    return () => clearTimeout(timer);
  }, [shouldAnimate]);

  const barBg = "#fdfdfc";

  return (
    <section className="relative flex h-full w-full overflow-hidden">

      {/* Phase collapse — tre barre */}
      <AnimatePresence>
        {phase === "collapse" && (
          <motion.div
            key="bars"
            className="absolute inset-0 flex gap-[3px] justify-evenly"
            initial={{ opacity: shouldAnimate ? 0 : 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.75 }}
          >
            {BAR_LETTERS.map((letter, i) => (
              <motion.div
                key={letter}
                className="relative w-1/6 overflow-hidden"
                initial={isIOS
                  ? { clipPath: shouldAnimate ? "inset(100% 0% 0% 0%)" : "inset(0% 0% 0% 0%)" }
                  : { scaleY: shouldAnimate ? 0 : 1 }
                }
                animate={isIOS ? { clipPath: "inset(0% 0% 0% 0%)" } : { scaleY: 1 }}
                transition={{
                  duration: 1.75,
                  delay: i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <mask id={`gds-${letter}`}>
                      <rect width="100%" height="100%" fill="white" />
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="central"
                        style={{
                          fontFamily: "var(--font-mono), sans-serif",
                          fontSize: "clamp(4rem, 20vw, 11rem)",
                          fontWeight: "500",
                        }}
                        fill="black"
                      >
                        {letter}
                      </text>
                    </mask>
                  </defs>
                  <rect width="100%" height="100%" fill={barBg} mask={`url(#gds-${letter})`} />
                </svg>
                <motion.span
                  initial={{ opacity: shouldAnimate ? 0 : 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-8 left-0 right-0 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-[#141414]"
                >
                  {BAR_WORDS[i]}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
