import TechnologyCard from "./TechnologyCard";
import { Technology } from "@/types/technology";

type Props = {
  technologies: Technology[];
  onSelect: (technology: Technology) => void;
};

export default function TechnologyGrid({
  technologies,
  onSelect,
}: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          onClick={() => onSelect(technology)}
        />
      ))}
    </div>
  );
}