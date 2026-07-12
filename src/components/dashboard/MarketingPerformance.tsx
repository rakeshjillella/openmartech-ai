import EnterpriseCard from "@/components/ui/EnterpriseCard";

const metrics = [
  {
    label: "Campaign ROI",
    value: "312%",
  },
  {
    label: "Customer Growth",
    value: "+28%",
  },
  {
    label: "Conversion Rate",
    value: "14.2%",
  },
  {
    label: "Revenue Impact",
    value: "$4.8M",
  },
];

export default function MarketingPerformance() {
  return (
    <EnterpriseCard>

      <h2 className="text-3xl font-black dark:text-white">
        Marketing Performance
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        {metrics.map((item) => (

          <div
            key={item.label}
            className="
              rounded-2xl
              border
              border-slate-200
              p-6
              transition
              hover:border-blue-500
              hover:shadow-lg
              dark:border-slate-700
            "
          >

            <p className="text-sm uppercase tracking-wide text-slate-500">
              {item.label}
            </p>

            <h3 className="mt-4 text-4xl font-black text-blue-600">
              {item.value}
            </h3>

          </div>

        ))}

      </div>

    </EnterpriseCard>
  );
}