type Props = {
  eyebrow?: string;
  badge?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  badge,
  title,
  description,
}: Props) {
  const label = eyebrow ?? badge;

  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">

      {label && (
        <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          {label}
        </span>
      )}

      <h2 className="mt-6 text-5xl font-black text-slate-900 dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          {description}
        </p>
      )}

    </div>
  );
}