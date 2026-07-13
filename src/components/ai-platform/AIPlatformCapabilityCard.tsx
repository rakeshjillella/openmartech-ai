import {
  ArrowRight,
} from "@/lib/icons";

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function AIPlatformCapabilityCard({
  title,
  description,
  icon,
}: Props) {
  return (

    <div
      className="
        group
        relative
        overflow-hidden

        rounded-[30px]

        border
        border-slate-200

        bg-white

        p-8

        shadow-lg

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl

        dark:border-slate-800
        dark:bg-slate-900
      "
    >

      {/* Gradient */}

      <div
        className="
          absolute
          right-0
          top-0

          h-40
          w-40

          rounded-full

          bg-blue-500/5

          blur-3xl

          transition-all
          duration-300

          group-hover:bg-blue-500/10
        "
      />

      <div
        className="
          relative

          flex

          h-16
          w-16

          items-center
          justify-center

          rounded-2xl

          bg-blue-100

          text-blue-600

          dark:bg-blue-900/30
          dark:text-blue-300
        "
      >
        {icon}
      </div>

      <h3
        className="
          mt-8

          text-2xl
          font-black

          text-slate-900
          dark:text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-5

          leading-8

          text-slate-600
          dark:text-slate-400
        "
      >
        {description}
      </p>

      <div
        className="
          mt-8

          inline-flex
          items-center

          gap-2

          font-semibold

          text-blue-600

          transition

          group-hover:gap-3
        "
      >
        Learn More

        <ArrowRight size={18} />

      </div>

    </div>

  );
}