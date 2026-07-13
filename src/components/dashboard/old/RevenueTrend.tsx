import EnterpriseCard from "@/components/ui/EnterpriseCard";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
];

const revenue = [38, 52, 48, 70, 82, 100];

export default function RevenueTrend() {
  const max = Math.max(...revenue);

  return (
    <EnterpriseCard>

      <h2 className="text-3xl font-black dark:text-white">
        Revenue Trend
      </h2>

      <p className="mt-3 text-slate-500">
        Executive business growth over six months
      </p>

      <div className="mt-12 flex h-72 items-end justify-between gap-5">

        {revenue.map((value, index) => (

          <div
            key={months[index]}
            className="flex flex-1 flex-col items-center"
          >

            <div
              className="
                w-full
                rounded-t-2xl
                bg-gradient-to-t
                from-blue-600
                to-cyan-400
                transition-all
                duration-500
                hover:scale-105
              "
              style={{
                height: `${(value / max) * 220}px`,
              }}
            />

            <span className="mt-4 text-sm font-semibold text-slate-500">
              {months[index]}
            </span>

          </div>

        ))}

      </div>

    </EnterpriseCard>
  );
}