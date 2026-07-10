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
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-6
        py-4
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:shadow-xl
      "
    >
      <Image
        src={logo}
        alt={name}
        width={38}
        height={38}
        className="transition duration-300 group-hover:scale-110"
      />

      <span className="font-semibold text-slate-700">
        {name}
      </span>
    </div>
  );
}