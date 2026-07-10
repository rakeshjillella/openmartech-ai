import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function EnterpriseCard({ children }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
      {children}
    </div>
  );
}