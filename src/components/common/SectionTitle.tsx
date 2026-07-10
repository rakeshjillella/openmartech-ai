type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">

      <h2 className="text-4xl font-black tracking-tight text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {subtitle}
        </p>
      )}

    </div>
  );
}