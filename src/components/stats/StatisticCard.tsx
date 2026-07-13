type Props = {
  number: string;
  label: string;
};

export default function StatisticCard({
  number,
  label,
}: Props) {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-700
        bg-white/5
        p-10
        text-center
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-400
        hover:bg-white/10
        hover:shadow-2xl
      "
    >
      <h3
        className="
          text-5xl
          font-black
          text-white
          transition-colors
          duration-300
          group-hover:text-blue-300
        "
      >
        {number}
      </h3>

      <div
        className="
          mx-auto
          my-6
          h-1
          w-16
          rounded-full
          bg-blue-500
          transition-all
          duration-300
          group-hover:w-24
        "
      />

      <p
        className="
          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-slate-300
        "
      >
        {label}
      </p>
    </div>
  );
}