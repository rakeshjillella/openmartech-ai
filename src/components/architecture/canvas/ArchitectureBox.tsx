type Props = {
  title: string;
  subtitle: string;
};

export default function ArchitectureBox({
  title,
  subtitle,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        px-8
        py-6
        text-center
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-600
        hover:shadow-2xl
      "
    >
      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}