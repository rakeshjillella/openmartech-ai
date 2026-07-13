type Props = {
  title: string;
  subtitle: string;
  color?: string;
};

export default function PlatformNode({
  title,
  subtitle,
  color = "bg-blue-500",
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        text-center
        shadow-sm
        transition
        hover:-translate-y-2
        hover:shadow-xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div
        className={`mx-auto mb-6 h-5 w-20 rounded-full ${color}`}
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