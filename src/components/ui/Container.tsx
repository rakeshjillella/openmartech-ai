type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-screen-2xl
        px-5
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
        2xl:px-16
        ${className}
      `}
    >
      {children}
    </div>
  );
}