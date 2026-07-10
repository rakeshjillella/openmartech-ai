type Props = {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  description,
  center = true,
}: Props) {
  return (
    <div className={`${center ? "mx-auto max-w-4xl text-center" : ""} mb-16`}>
      {badge && (
        <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}