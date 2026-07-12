"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  children: React.ReactNode;
};

export default function SlideDrawer({
  open,
  children,
}: Props) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 0.35,
          }}
          className="
            fixed
            right-0
            top-0
            z-50
            h-full
            w-full
            max-w-lg
            bg-white
            shadow-2xl
            dark:bg-slate-900
          "
        >
          {children}
        </motion.div>

      )}

    </AnimatePresence>
  );
}