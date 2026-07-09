type Props = {
  number: string;
  label: string;
};

export default function StatisticCard({
  number,
  label,
}: Props) {
  return (
    <div className="rounded-2xl bg-blue-600 p-8 text-center text-white shadow-lg">
      <h3 className="text-5xl font-bold">
        {number}
      </h3>

      <p className="mt-3 text-lg text-blue-100">
        {label}
      </p>
    </div>
  );
}