import EnterpriseCard from "@/components/ui/EnterpriseCard";

export default function ExecutiveSummary() {
  return (
    <section className="mt-24 mb-24">

      <EnterpriseCard>

        <h2 className="text-3xl font-bold">
          Executive Summary
        </h2>

        <div className="mt-8 space-y-6 leading-8 text-slate-600">

          <p>
            OpenMarTech AI integrates enterprise-grade data engineering,
            streaming analytics, machine learning, Responsible AI,
            explainability and executive reporting into a unified
            decision intelligence platform.
          </p>

          <p>
            Data is continuously ingested through Kafka, transformed by
            Spark and dbt, stored in Apache Iceberg, monitored by
            MLflow, and governed through Responsible AI policies.
          </p>

          <p>
            The platform enables executives to monitor marketing
            performance, customer intelligence, model health,
            operational efficiency and AI governance from a single
            enterprise dashboard.
          </p>

        </div>

      </EnterpriseCard>

    </section>
  );
}