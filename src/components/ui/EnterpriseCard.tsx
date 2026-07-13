type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function EnterpriseCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:shadow-2xl

        dark:border-slate-700
        dark:bg-slate-900
        dark:hover:border-blue-400

        sm:p-8
        lg:p-10

        ${className}
      `}
    >
      {children}
    </div>
  );
}