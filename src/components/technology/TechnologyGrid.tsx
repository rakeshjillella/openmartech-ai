import { architecture } from "@/data/architecture";
import TechnologyCard from "./TechnologyCard";

type Props = {
  search: string;
};

export default function TechnologyGrid({
  search,
}: Props) {
  const filtered = architecture.filter((item) =>
    item.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="grid gap-8 lg:grid-cols-2">

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
  );
}