type Props = {
  step: string;
  number: number;
};

export default function WorkflowStep({
  step,
  number,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        gap-5
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition
        hover:shadow-xl
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-blue-600
          font-bold
          text-white
        "
      >
        {number}
      </div>

      <div className="text-lg font-semibold dark:text-white">
        {step}
      </div>

    </div>
  );
}