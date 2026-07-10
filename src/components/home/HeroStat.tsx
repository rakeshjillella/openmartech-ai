type Props = {
  number: string;
  label: string;
};

export default function HeroStat({
  number,
  label,
}: Props) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        text-center
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
      "
    >
      <h3
        className="
          text-4xl
          font-black
          text-blue-600
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {number}
      </h3>

      <p
        className="
          mt-4
          text-sm
          font-semibold
          uppercase
          tracking-[0.2em]
          text-slate-500
        "
      >
        {label}
      </p>
    </div>
  );
}