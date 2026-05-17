"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/src/data/projects";

const MIN_MS = 900;

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(0);
  const [visible, setVisible] = useState(true);
  const total = projects.length;

  useEffect(() => {
    const start = Date.now();
    let count = 0;

    projects.forEach((p) => {
      const img = new Image();
      const done = () => {
        count++;
        setLoaded(count);
        if (count === total) {
          const wait = Math.max(0, MIN_MS - (Date.now() - start));
          setTimeout(() => setVisible(false), wait);
        }
      };
      img.onload = done;
      img.onerror = done;
      img.src = p.images[0];
    });
  }, []);

  return (
    <>
      {children}
      <AnimatePresence>
        {visible && (
          <motion.div
            key="loader"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f7f4ee]"
          >
            <motion.div
              className="flex items-baseline leading-none tracking-[-0.08em]"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {["G", "D", "S"].map((l) => (
                <motion.span
                  key={l}
                  variants={{
                    hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-sans text-[5rem] font-medium text-black sm:text-[3rem]"
                >
                  {l}
                </motion.span>
              ))}
            </motion.div>

            <div className="mt-8 h-px w-32 overflow-hidden bg-black/10">
              <motion.div
                animate={{ scaleX: loaded / total }}
                initial={{ scaleX: 0 }}
                style={{ transformOrigin: "left" }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                className="h-full w-full bg-black"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
