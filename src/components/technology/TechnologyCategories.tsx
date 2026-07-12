"use client";

const categories = [
  "All",
  "Data",
  "Streaming",
  "Lakehouse",
  "AI",
  "Cloud",
  "Monitoring",
];

type Props = {
  category: string;
  setCategory: (value: string) => void;
};

export default function TechnologyCategories({
  category,
  setCategory,
}: Props) {
  return (

    <div className="flex flex-wrap gap-4">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`
            rounded-full
            px-6
            py-3
            font-semibold
            transition-all
            duration-300
            ${
              category === item
                ? "bg-blue-600 text-white shadow-lg"
                : "border border-slate-300 bg-white hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-400"
            }
          `}
        >
          {item}
        </button>

      ))}

    </div>

  );
}