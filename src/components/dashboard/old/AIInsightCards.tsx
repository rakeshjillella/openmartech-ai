import EnterpriseCard from "@/components/ui/EnterpriseCard";

const insights = [
  {
    title: "Responsible AI",
    value: "99.8%",
    subtitle: "Compliance Score",
    color: "text-green-600",
  },
  {
    title: "Explainability",
    value: "100%",
    subtitle: "SHAP Coverage",
    color: "text-blue-600",
  },
  {
    title: "Model Drift",
    value: "0.8%",
    subtitle: "Current Drift",
    color: "text-orange-500",
  },
];

export default function AIInsightCards() {
  return (
    <section className="py-10">

      <div className="grid gap-8 lg:grid-cols-3">

        {insights.map((item) => (

          <EnterpriseCard
            key={item.title}
            className="group hover:-translate-y-2 transition-all duration-300"
          >

            <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {item.title}
            </p>

            <h2 className={`mt-6 text-6xl font-black ${item.color}`}>
              {item.value}
            </h2>

            <p className="mt-5 text-slate-500 dark:text-slate-400">
              {item.subtitle}
            </p>

          </EnterpriseCard>

        ))}

      </div>

    </section>
  );
}