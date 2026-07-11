import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  columns?: number;
};

export default function FeatureGrid({
  children,
  columns = 3,
}: Props) {
  const grid =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
      ? "xl:grid-cols-4 md:grid-cols-2"
      : "lg:grid-cols-3 md:grid-cols-2";

  return (
    <div className={`grid gap-8 ${grid}`}>
      {children}
    </div>
  );
}