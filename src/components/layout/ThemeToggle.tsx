"use client";

import dynamic from "next/dynamic";

const ThemeToggleClient = dynamic(
  () => import("./ThemeToggleClient"),
  {
    ssr: false,
  }
);

export default ThemeToggleClient;