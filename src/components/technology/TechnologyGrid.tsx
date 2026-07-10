import { Technology } from "@/types/technology";
import TechnologyCard from "./TechnologyCard";

type Props = {
  technologies: Technology[];
};

export default function TechnologyGrid({
  technologies,
}: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {technologies.map((technology) => (

        <TechnologyCard
          key={technology.id}
          technology={technology}
        />

      ))}

    </div>
  );
}