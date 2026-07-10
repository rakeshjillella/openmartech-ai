import { Technology } from "@/types/technology";
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
      className="group rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
    >
      <div className="flex items-center gap-4">

        <Image
          src={technology.logo}
          alt={technology.name}
          width={54}
          height={54}
        />

        <div>

          <h3 className="text-xl font-bold">
            {technology.name}
          </h3>

          <p className="text-sm text-blue-600">
            {technology.category}
          </p>

        </div>

      </div>

      <p className="mt-6 font-medium text-slate-700">
        {technology.role}
      </p>

      <p className="mt-4 text-sm leading-7 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {technology.usedIn.slice(0,3).map(item=>(
          <span
            key={item}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
          >
            {item}
          </span>
        ))}

      </div>

      <div className="mt-8 font-semibold text-blue-600 group-hover:translate-x-1 transition">
        Learn More →
      </div>

    </button>
  );
}