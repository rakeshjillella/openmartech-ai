import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  logo: string;
};

export default function PipelineCard({
  title,
  subtitle,
  logo,
}: Props) {
  return (
    <div
      className="
        group
        min-w-[210px]
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-600
        hover:shadow-2xl
      "
    >
      <div className="flex justify-center">

        <Image
          src={logo}
          alt={title}
          width={56}
          height={56}
          className="transition duration-300 group-hover:scale-110"
        />

      </div>

      <h3 className="mt-6 text-center text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-center text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}