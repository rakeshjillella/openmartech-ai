type Props = {
  eyebrow?: string;
  badge?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  badge,
  title,
  description,
}: Props) {
  const label = eyebrow ?? badge;

  return (
    <div className="mx-auto mb-16 max-w-4xl text-center">

      {label && (
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-blue-200
            bg-blue-50
            px-5
            py-2
            text-xs
            font-bold
            uppercase
            tracking-[0.25em]
            text-blue-700
            shadow-sm
            transition-colors
            duration-300

            dark:border-blue-800
            dark:bg-blue-900/30
            dark:text-blue-300
          "
        >
          {label}
        </span>
      )}

      <h2
        className="
          mt-8
          text-4xl
          font-black
          tracking-tight
          text-slate-900
          transition-colors
          duration-300

          sm:text-5xl
          lg:text-6xl

          dark:text-white
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
            transition-colors
            duration-300

            lg:text-xl
            lg:leading-9

            dark:text-slate-400
          "
        >
          {description}
        </p>
      )}

    </div>
  );
}