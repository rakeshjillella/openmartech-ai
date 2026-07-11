import EnterpriseCard from "./EnterpriseCard";

type Props = {
  title: string;
  value: string;
  trend?: string;
  color?: string;
};

export default function MetricCard({
  title,
  value,
  trend,
  color = "text-blue-600",
}: Props) {
  return (
    <EnterpriseCard>
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <h3 className={`mt-5 text-4xl font-black ${color}`}>
        {value}
      </h3>

      {trend && (
        <p className="mt-4 text-sm font-semibold text-emerald-600">
          {trend}
        </p>
      )}
    </EnterpriseCard>
  );
}