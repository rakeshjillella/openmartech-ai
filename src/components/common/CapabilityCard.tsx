type CapabilityCardProps = {
  title: string;
  description: string;
};

export default function CapabilityCard({
  title,
  description,
}: CapabilityCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}