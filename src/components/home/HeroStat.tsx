"use client";

type Props = {
  number: string;
  label: string;
};

export default function HeroStat({
  number,
  label,
}: Props) {
  return (
    <div className="text-center">

      <h3
        className="
          text-5xl
          font-black
          text-blue-600
          dark:text-blue-400
        "
      >
        {number}
      </h3>

      <p
        className="
          mt-5
          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-slate-500
          dark:text-slate-400
        "
      >
        {label}
      </p>

    </div>
  );
}