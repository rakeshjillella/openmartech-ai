import { Technology } from "@/types/technology";
import Badge from "@/components/ui/Badge";
import Image from "next/image";

type Props = {
  technology: Technology;
  onClick?: () => void;
};

export default function TechnologyCard({
  technology,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="
        group
        w-full
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        text-left
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
      "
    >
      {/* Header */}

      <div className="flex items-center gap-5">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 p-3">

  <Image
    src={technology.logo}
    alt={technology.name}
    width={48}
    height={48}
    className="object-contain"
  />

</div>

        <div>
          <h3 className="text-xl font-bold text-slate-900">
            {technology.name}
          </h3>

          <p className="text-sm text-slate-500">
            {technology.category}
          </p>
        </div>

      </div>

      {/* Description */}

      <p className="mt-6 leading-7 text-slate-600">
        {technology.description}
      </p>

      {/* Badges */}

      <div className="mt-6 flex flex-wrap gap-3">

        <Badge variant="primary">
          {technology.maturity}
        </Badge>

        <Badge variant="secondary">
          {technology.category}
        </Badge>

      </div>

      {/* CTA */}

      <div className="mt-8 font-semibold text-blue-600 transition group-hover:translate-x-1">
        Learn More →
      </div>
    </button>
  );
}