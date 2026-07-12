type Props = {
  title: string;
  subtitle: string;
  color?: string;
};

export default function PipelineCard({
  title,
  subtitle,
  color = "from-blue-600 to-indigo-600",
}: Props) {
  return (
    <div
      className="
        w-64
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        text-center
        shadow-lg
        transition
        hover:-translate-y-2
        hover:shadow-2xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div
        className={`mx-auto mb-6 h-4 w-20 rounded-full bg-gradient-to-r ${color}`}
      />

      <h3 className="text-2xl font-bold dark:text-white">
        {title}
      </h3>

      <p className="mt-4 text-slate-600 dark:text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}