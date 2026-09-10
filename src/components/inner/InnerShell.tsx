"use client";

import { motion } from "framer-motion";

import CustomCursor from "@/components/inner/CustomCursor";

export default function InnerShell({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      id="main"
      className="bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <CustomCursor />
      {children}
    </motion.main>
  );
}
