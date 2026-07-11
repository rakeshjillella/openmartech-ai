"use client";

const filters = [
  "All",
  "Streaming",
  "Processing",
  "Storage",
  "AI",
  "Visualization",
];

type Props = {
  active: string;
  setActive: (filter: string) => void;
};

export default function ArchitectureFilters({
  active,
  setActive,
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">

      {filters.map((filter) => (

        <button
          key={filter}
          onClick={() => setActive(filter)}
          className={`rounded-full px-5 py-2 transition

          ${
            active === filter
              ? "bg-blue-600 text-white"
              : "border hover:bg-slate-50"
          }`}
        >
          {filter}
        </button>

      ))}

    </div>
  );
}