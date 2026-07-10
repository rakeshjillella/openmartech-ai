type Props = {
  title: string;
  icon: string;
  description: string;
};

export default function PlatformNode({
  title,
  icon,
  description,
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
      shadow-sm
      transition
      duration-300
      hover:-translate-y-2
      hover:border-blue-500
      hover:shadow-2xl
    "
    >
      <div className="text-5xl transition group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}