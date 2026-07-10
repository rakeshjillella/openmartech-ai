"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  open: boolean;
  children: ReactNode;
};

export default function SlideDrawer({
  open,
  children,
}: Props) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          exit={{ x: 500 }}
          transition={{ duration: 0.35 }}
          className="fixed right-0 top-0 h-screen w-[420px] bg-white shadow-2xl z-50"
        >
          {children}
        </motion.div>

      )}

    </AnimatePresence>
  );
}