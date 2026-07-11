type Props = {
  title: string;
  description: string;
};

export default function FeatureCard({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

      <h2 className="text-2xl font-black">

        {title}

      </h2>

      <p className="mt-5 leading-8 text-slate-600">

        {description}

      </p>

    </div>
  );
}