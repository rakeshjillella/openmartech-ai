type Props = {
  label: string;
  color?: "green" | "blue" | "yellow";
};

export default function StatusBadge({
  label,
  color = "green",
}: Props) {
  const colors = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    yellow: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[color]}`}
    >
      {label}
    </span>
  );
}