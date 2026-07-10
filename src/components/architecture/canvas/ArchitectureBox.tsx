"use client";

type Props = {
  id: string;
  title: string;
  subtitle: string;
  selected?: boolean;
  onClick: () => void;
};

export default function ArchitectureBox({
  id,
  title,
  subtitle,
  selected = false,
  onClick,
}: Props) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`
        group
        w-full
        rounded-3xl
        border
        bg-white
        px-8
        py-6
        text-center
        shadow-lg
        transition-all
        duration-300

        ${
          selected
            ? "border-blue-600 shadow-2xl scale-105 ring-4 ring-blue-100"
            : "border-slate-200 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
        }
      `}
    >
      {/* Title */}

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      {/* Subtitle */}

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {subtitle}
      </p>

      {/* Divider */}

      <div className="my-5 border-t border-slate-200" />

      {/* Explore */}

      <div
        className={`
          text-sm
          font-semibold
          text-blue-600
          transition-all
          duration-300

          ${
            selected
              ? "translate-x-1"
              : "group-hover:translate-x-1"
          }
        `}
      >
        Explore →
      </div>
    </button>
  );
}