"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-8
        right-8
        z-50

        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-full

        bg-blue-600

        text-white

        shadow-xl

        transition-all
        duration-300

        hover:-translate-y-1
        hover:bg-blue-700

        dark:bg-blue-500
      "
    >
      <ChevronUp size={22} />
    </button>
  );
}