import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section className="py-20">
      {eyebrow && (
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          {eyebrow}
        </span>
      )}

      <h1 className="mt-6 max-w-5xl text-6xl font-black tracking-tight">
        {title}
      </h1>

      <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-600">
        {description}
      </p>

      <div className="mt-10 flex flex-wrap gap-5">
        {primaryHref && (
          <Link
            href={primaryHref}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            {primaryLabel}
          </Link>
        )}

        {secondaryHref && (
          <Link
            href={secondaryHref}
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-50"
          >
            {secondaryLabel}
          </Link>
        )}
      </div>
    </section>
  );
}