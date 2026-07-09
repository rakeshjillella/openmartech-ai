import ArchitectureNode from "./ArchitectureNode";
import FadeIn from "@/components/animation/FadeIn";

type Props = {
  title: string;
  technologies: string[];
};

export default function ArchitectureLayer({
  title,
  technologies,
}: Props) {
  return (
    <FadeIn>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">

        <h3 className="mb-8 text-center text-2xl font-bold">{title}</h3>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <ArchitectureNode key={tech} title={tech} />
          ))}
        </div>

      </div>

    </FadeIn>
  );
}