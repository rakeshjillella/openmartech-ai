"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function ArchitectureSearch({
  value,
  onChange,
}: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search architecture..."
      className="
        w-full
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        py-3
        text-sm
        shadow-sm
        focus:border-blue-500
        focus:outline-none
      "
    />
  );
}