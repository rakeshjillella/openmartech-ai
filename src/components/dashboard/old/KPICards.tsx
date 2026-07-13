import EnterpriseCard from "@/components/ui/EnterpriseCard";

const kpis = [
  {
    title: "Pipeline Success",
    value: "99.7%",
    color: "text-green-600",
  },
  {
    title: "Streaming Latency",
    value: "180 ms",
    color: "text-blue-600",
  },
  {
    title: "Data Freshness",
    value: "< 2 min",
    color: "text-indigo-600",
  },
  {
    title: "Model Accuracy",
    value: "94.8%",
    color: "text-purple-600",
  },
  {
    title: "Responsible AI Score",
    value: "98%",
    color: "text-emerald-600",
  },
  {
    title: "Executive Health",
    value: "Excellent",
    color: "text-cyan-600",
  },
];

export default function KPICards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {kpis.map((item) => (

        <EnterpriseCard key={item.title}>

          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {item.title}
          </p>

          <h2 className={`mt-5 text-5xl font-black ${item.color}`}>
            {item.value}
          </h2>

        </EnterpriseCard>

      ))}

    </section>
  );
}