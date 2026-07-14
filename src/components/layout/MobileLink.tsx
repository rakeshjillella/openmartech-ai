"use client";

import Link from "next/link";

interface Props {
  href: string;
  title: string;
  description?: string;
  onClick: () => void;
}

export default function MobileLink({
  href,
  title,
  description,
  onClick,
}: Props) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      onClick={onClick}
      target={
        external
          ? "_blank"
          : undefined
      }
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      className="
        block
        rounded-xl
        px-4
        py-3
        transition-all
        duration-300
        hover:bg-blue-50
        dark:hover:bg-slate-800
      "
    >
      <h4
        className="
          font-semibold
          text-slate-900
          dark:text-white
        "
      >
        {title}
      </h4>

      {description && (
        <p
          className="
            mt-1
            text-sm
            leading-6
            text-slate-500
            dark:text-slate-400
          "
        >
          {description}
        </p>
      )}
    </Link>
  );
}