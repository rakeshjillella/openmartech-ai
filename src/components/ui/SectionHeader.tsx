type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
}: Props) {
  return (
    <div className={center ? "text-center mb-12" : "mb-12"}>
      {eyebrow && (
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}