export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-20">

      <div
        className="h-full w-full"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px, transparent 1px),linear-gradient(to right,#94a3b8 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

    </div>
  );
}