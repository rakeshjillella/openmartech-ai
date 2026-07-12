type Props = {
  title: string;
  description: string;
  color: string;
};

export default function FeatureCard({
  title,
  description,
  color,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
        transition
        hover:-translate-y-2
        hover:shadow-xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div
        className={`mb-6 h-3 w-20 rounded-full ${color}`}
      />

      <h3 className="text-2xl font-bold dark:text-white">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}