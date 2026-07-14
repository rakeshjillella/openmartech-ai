"use client";

import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

export default function MobileMenuPortal({
  children,
}: Props) {
  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    children,
    document.body
  );
}