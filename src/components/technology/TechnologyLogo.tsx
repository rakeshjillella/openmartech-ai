import Image from "next/image";

type Props = {
  name: string;
  logo: string;
};

export default function TechnologyLogo({
  name,
  logo,
}: Props) {
  return (
    <div
      className={
        `
        group
        relative
        overflow-hidden

        flex
        h-full
        flex-col
        items-center
        justify-center

        rounded-[30px]

        border
        border-slate-200

        bg-white

        p-8

        text-center

        shadow-lg

        transition-all
        duration-300

        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl

        dark:border-slate-800
        dark:bg-slate-900
      `
      }
    >
      {/* Decorative Glow */}

      <div
        className={
          `
          absolute
          -right-10
          -top-10

          h-32
          w-32

          rounded-full

          bg-blue-500/5

          blur-3xl

          transition-all
          duration-500

          group-hover:bg-blue-500/10
        `
        }
      />

      {/* Logo */}

      <div
        className={
          `
          relative

          flex
          h-24
          w-24
          items-center
          justify-center

          rounded-3xl

          border
          border-slate-200

          bg-slate-50

          shadow-sm

          transition-all
          duration-300

          group-hover:scale-105
          group-hover:border-blue-300
          group-hover:bg-blue-50
          group-hover:shadow-lg

          dark:border-slate-700
          dark:bg-slate-800
          dark:group-hover:border-blue-500
          dark:group-hover:bg-slate-700
        `
        }
      >
        <Image
          src={logo}
          alt={name}
          width={58}
          height={58}
          className={
            `
            object-contain

            transition-transform
            duration-300

            group-hover:scale-110
          `
          }
        />
      </div>

      {/* Name */}

      <h3
        className={
          `
          mt-7

          text-lg
          font-bold

          text-slate-900

          transition-colors
          duration-300

          group-hover:text-blue-600

          dark:text-white
          dark:group-hover:text-blue-400
        `
        }
      >
        {name}
      </h3>

      {/* Subtitle */}

      <p
        className={
          `
          mt-3

          text-sm
          leading-6

          text-slate-500

          dark:text-slate-400
        `
        }
      >
        Enterprise Technology
      </p>
    </div>
  );
}