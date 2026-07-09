type Props = {
  number: string;
  label: string;
};

export default function HeroStat({
  number,
  label,
}: Props) {
  return (
    <div className="text-center">
      <h3 className="text-3xl font-bold text-blue-600">
        {number}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        {label}
      </p>
    </div>
  );
}