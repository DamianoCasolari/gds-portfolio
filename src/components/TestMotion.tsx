"use client";

import { motion } from "framer-motion";

export default function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-10 bg-black text-white text-2xl"
    >
      Animazione OK 🚀
    </motion.div>
  );
}