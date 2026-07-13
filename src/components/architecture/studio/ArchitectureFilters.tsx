"use client";

const filters = [
  "All",
  "Streaming",
  "Lakehouse",
  "Processing",
  "AI",
  "Monitoring",
];

type Props = {
  filter: string;
  setFilter: (value: string) => void;
};

export default function ArchitectureFilters({
  filter,
  setFilter,
}: Props) {
  return (
    <section>

      <div
        className="
          flex
          flex-wrap
          items-center
          gap-3
        "
      >

        {filters.map((item) => {

          const active = filter === item;

          return (
            <button
              key={item}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(item)}
              className={`
                rounded-full
                border
                px-5
                py-2.5

                text-sm
                font-semibold

                transition-all
                duration-300

                ${
                  active
                    ? `
                      border-blue-600
                      bg-blue-600
                      text-white
                      shadow-lg
                      shadow-blue-500/20
                    `
                    : `
                      border-slate-300
                      bg-white
                      text-slate-700

                      hover:border-blue-400
                      hover:bg-blue-50
                      hover:text-blue-700

                      dark:border-slate-700
                      dark:bg-slate-900
                      dark:text-slate-300
                      dark:hover:border-blue-500
                      dark:hover:bg-slate-800
                      dark:hover:text-blue-400
                    `
                }
              `}
            >
              {item}
            </button>
          );

        })}

      </div>

    </section>
  );
}