"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: number;
  href?: boolean;
  priority?: boolean;
}

export default function Logo({
  size = 48,
  href = false,
  priority = false,
}: LogoProps) {
  const logo = (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="relative overflow-hidden rounded-2xl"
    >
      <Image
        src="/logos/logo.png"
        alt="OpenMarTech AI"
        fill
        priority={priority}
        className="object-contain"
      />
    </div>
  );

  if (href) {
    return <Link href="/">{logo}</Link>;
  }

  return logo;
}