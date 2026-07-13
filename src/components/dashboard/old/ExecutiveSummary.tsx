import EnterpriseCard from "@/components/ui/EnterpriseCard";

export default function ExecutiveSummary() {
  return (
    <section className="py-20">

      <EnterpriseCard>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Executive Overview
        </span>

        <h2 className="mt-8 text-5xl font-black text-slate-900 dark:text-white">
          Unified Enterprise Decision Intelligence
        </h2>

        <div className="mt-10 space-y-8 text-lg leading-9 text-slate-600 dark:text-slate-400">

          <p>
            OpenMarTech AI demonstrates how modern enterprises integrate
            Data Engineering, Streaming Analytics,
            Machine Learning,
            Responsible AI,
            Explainability,
            MLOps and Executive Reporting
            into a single production-ready ecosystem.
          </p>

          <p>
            Enterprise data continuously flows through Kafka,
            Apache Spark,
            dbt,
            Iceberg,
            MLflow,
            Langfuse,
            Dify
            and Power BI,
            enabling reliable, explainable and observable AI systems.
          </p>

          <p>
            Executives can monitor marketing performance,
            AI governance,
            operational health,
            model quality,
            customer intelligence
            and platform reliability
            from one enterprise dashboard.
          </p>

        </div>

      </EnterpriseCard>

    </section>
  );
}