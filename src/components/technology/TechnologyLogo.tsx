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
      className="
        group
        flex
        items-center
        gap-5
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:shadow-xl
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800">

        <Image
          src={logo}
          alt={name}
          width={42}
          height={42}
          className="transition duration-300 group-hover:scale-110"
        />

      </div>

      <div>

        <h3 className="font-bold text-slate-900 dark:text-white">
          {name}
        </h3>

        <p className="text-sm text-slate-500">
          Enterprise Technology
        </p>

      </div>

    </div>
  );
}