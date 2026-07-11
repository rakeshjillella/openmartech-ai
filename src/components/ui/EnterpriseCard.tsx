import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function EnterpriseCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}