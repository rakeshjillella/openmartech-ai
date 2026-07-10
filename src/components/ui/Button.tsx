import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  target?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  target,
}: Props) {
  const base =
    "inline-flex items-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-xl",
  };

  return (
    <Link
      href={href}
      target={target}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}