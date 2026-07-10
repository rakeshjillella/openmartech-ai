type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
}: Props) {

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "bg-slate-900 text-white",

    outline:
      "border border-slate-300",
  };

  return (
    <button
      className={`rounded-xl px-6 py-3 font-semibold transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}