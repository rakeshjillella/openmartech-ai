import React from "react";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "purple"
  | "cyan";

type Props = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

const variants: Record<BadgeVariant, string> = {
  primary:
    "bg-blue-100 text-blue-700 border border-blue-200",

  secondary:
    "bg-slate-100 text-slate-700 border border-slate-200",

  success:
    "bg-emerald-100 text-emerald-700 border border-emerald-200",

  warning:
    "bg-amber-100 text-amber-700 border border-amber-200",

  danger:
    "bg-red-100 text-red-700 border border-red-200",

  purple:
    "bg-violet-100 text-violet-700 border border-violet-200",

  cyan:
    "bg-cyan-100 text-cyan-700 border border-cyan-200",
};

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: Props) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        uppercase
        tracking-wider
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}