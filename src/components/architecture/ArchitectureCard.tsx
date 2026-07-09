type Props = {
  title: string;
  description: string;
};

export default function ArchitectureCard({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">
      {/* Explicit dark text color added here */}
      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      {/* Explicit gray color forced here */}
      <p className="mt-3 text-slate-600">
        {description}
      </p>
    </div>
  );
}