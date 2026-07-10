type Props = {
  title: string;
  value: string;
  description: string;
};

export default function ResponsibleAICard({
  title,
  value,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <div className="mt-5 text-4xl font-black text-emerald-600">
        {value}
      </div>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}