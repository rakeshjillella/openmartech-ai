export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-6">

      <div className="h-10 w-1/3 rounded bg-slate-200" />

      <div className="h-5 w-2/3 rounded bg-slate-200" />

      <div className="grid gap-6 md:grid-cols-3">

        {Array.from({ length: 3 }).map((_, index) => (

          <div
            key={index}
            className="h-48 rounded-3xl bg-slate-200"
          />

        ))}

      </div>

    </div>
  );
}