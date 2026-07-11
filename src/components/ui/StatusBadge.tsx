type Props = {
  status:
    | "Healthy"
    | "Warning"
    | "Critical"
    | "Production"
    | "Experimental";
};

const styles = {
  Healthy: "bg-emerald-100 text-emerald-700",
  Warning: "bg-yellow-100 text-yellow-700",
  Critical: "bg-red-100 text-red-700",
  Production: "bg-blue-100 text-blue-700",
  Experimental: "bg-purple-100 text-purple-700",
};

export default function StatusBadge({ status }: Props) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-bold ${styles[status]}`}
    >
      {status}
    </span>
  );
}