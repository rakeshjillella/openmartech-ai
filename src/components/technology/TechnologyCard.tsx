import Link from "next/link";
import { ArrowRight, ExternalLink } from "@/lib/icons";

type Props = {
  technology: {
    name: string;
    category: string;
    description: string;
    docs: string;
    github: string;
  };
};

export default function TechnologyCard({
  technology,
}: Props) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        p-8
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/5 blur-3xl transition group-hover:bg-blue-500/10" />

      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
        {technology.category}
      </span>

      <h2 className="mt-6 text-3xl font-black text-slate-900 dark:text-white">
        {technology.name}
      </h2>

      <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
        {technology.description}
      </p>

      <div className="mt-8 flex gap-3">

        <Link
          href={technology.docs}
          target="_blank"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-5
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-700
          "
        >
          Documentation
          <ArrowRight size={16} />
        </Link>

        <Link
          href={technology.github}
          target="_blank"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-300
            px-5
            py-3
            font-semibold
            transition
            hover:bg-slate-50
            dark:border-slate-700
            dark:hover:bg-slate-800
          "
        >
          GitHub
          <ExternalLink size={16} />
        </Link>

      </div>

    </div>
  );
}