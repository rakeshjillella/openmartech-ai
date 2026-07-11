"use client";

const categories = [
  "All",
  "Data",
  "Streaming",
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
    <div className="flex flex-wrap gap-3">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`rounded-full px-5 py-2 transition ${
            category === item
              ? "bg-blue-600 text-white"
              : "border bg-white"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}