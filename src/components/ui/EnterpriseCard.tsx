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
      className={`rounded-[30px] border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      {children}
    </div>
  );
}