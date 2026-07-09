type Props = {
  title: string;
  subtitle?: string;
};

export default function ArchitectureNode({
  title,
  subtitle,
}: Props) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        text-center
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-xl
      "
    >
      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      {subtitle && (
        <p className="mt-3 text-sm leading-6 text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}