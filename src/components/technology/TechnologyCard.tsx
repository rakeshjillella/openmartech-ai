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

    <article
      className="
        group
        relative
        overflow-hidden

        rounded-[30px]

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

      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-300 group-hover:bg-blue-500/20" />

      <span
        className="
          inline-flex

          rounded-full

          bg-blue-100

          px-4
          py-2

          text-xs
          font-semibold

          uppercase
          tracking-wider

          text-blue-700

          dark:bg-blue-900/30
          dark:text-blue-300
        "
      >
        {technology.category}
      </span>

      <h2
        className="
          mt-6

          text-3xl
          font-black

          text-slate-900

          transition-colors

          group-hover:text-blue-600

          dark:text-white
          dark:group-hover:text-blue-400
        "
      >
        {technology.name}
      </h2>

      <p
        className="
          mt-5

          leading-8

          text-slate-600

          dark:text-slate-400
        "
      >
        {technology.description}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

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

            transition-all
            duration-300

            hover:-translate-y-1
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

            bg-white

            px-5
            py-3

            font-semibold

            text-slate-700

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-blue-500
            hover:bg-slate-50

            dark:border-slate-700
            dark:bg-slate-950
            dark:text-slate-300
            dark:hover:bg-slate-800
          "
        >
          GitHub
          <ExternalLink size={16} />
        </Link>

      </div>

    </article>

  );
}