type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function TechnologySearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      value={value}
      onChange={(e)=>onChange(e.target.value)}
      placeholder="Search technologies..."
      className="w-full rounded-2xl border border-slate-300 p-4 text-lg outline-none focus:border-blue-500"
    />
  );
}