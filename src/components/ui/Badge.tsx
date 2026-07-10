type Variant =
  | "primary"
  | "secondary"
  | "success";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
};

const styles = {
  primary:
    "bg-blue-100 text-blue-700",

  secondary:
    "bg-slate-100 text-slate-700",

  success:
    "bg-emerald-100 text-emerald-700",
};

export default function Badge({
  children,
  variant = "primary",
}: Props) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-4
        py-2
        text-xs
        font-semibold
        ${styles[variant]}
      `}
    >
      {children}
    </span>
  );
}