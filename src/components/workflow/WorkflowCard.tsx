type Props = {
  title: string;
  description: string;
};

export default function WorkflowCard({
  title,
  description,
}: Props) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
        →
      </div>

      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}