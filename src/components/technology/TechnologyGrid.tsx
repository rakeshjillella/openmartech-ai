import { architecture } from "@/data/architecture";
import TechnologyCard from "./TechnologyCard";

type Props = {
  search: string;
  category: string;
};

export default function TechnologyGrid({
  search,
  category,
}: Props) {
  const filtered = architecture.filter((item) => {
    const matchesSearch =
      search === "" ||
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const layer = item.layer.toLowerCase();

    const matchesCategory =
      category === "All" ||
      layer.includes(category.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    return (
      <section>
        <div
          className="
            flex
            h-72
            items-center
            justify-center

            rounded-[30px]

            border
            border-dashed
            border-slate-300

            bg-slate-50

            text-center

            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              No technologies found
            </h3>

            <p className="mt-3 text-slate-500 dark:text-slate-400">
              Try another search or choose a different category.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div
        className="
          grid
          gap-8

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {filtered.map((item) => (
          <TechnologyCard
            key={item.id}
            technology={{
              name: item.title,
              category: item.layer,
              description: item.description,
              docs: item.docs,
              github: item.github,
            }}
          />
        ))}
      </div>
    </section>
  );
}