import Link from "next/link";

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
    <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
        {technology.category}
      </span>

      <h2 className="mt-5 text-3xl font-black">
        {technology.name}
      </h2>

      <p className="mt-4 leading-7 text-slate-600">
        {technology.description}
      </p>

      <div className="mt-8 flex gap-3">

        <Link
          href={technology.docs}
          target="_blank"
          className="rounded-xl bg-blue-600 px-5 py-3 text-white"
        >
          Docs
        </Link>

        <Link
          href={technology.github}
          target="_blank"
          className="rounded-xl border px-5 py-3"
        >
          GitHub
        </Link>

      </div>

    </div>
  );
}