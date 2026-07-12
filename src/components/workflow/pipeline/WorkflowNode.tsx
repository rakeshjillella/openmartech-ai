type Props = {
  title: string;
  subtitle: string;
  color?: string;
};

export default function WorkflowNode({
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
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div
        className={`mb-6 h-3 w-20 rounded-full bg-gradient-to-r ${color}`}
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