import ArchitectureBox from "./ArchitectureBox";
import ConnectionLine from "./ConnectionLine";

export default function ArchitectureCanvas() {
  return (
    <div className="mx-auto max-w-6xl">

      <ArchitectureBox
        title="Enterprise Data Sources"
        subtitle="CRM • ERP • Marketing • Analytics"
      />

      <ConnectionLine />

      <ArchitectureBox
        title="Streaming Layer"
        subtitle="Kafka • CDC • Airbyte"
      />

      <ConnectionLine />

      <ArchitectureBox
        title="Processing Layer"
        subtitle="Spark • Flink • dbt"
      />

      <ConnectionLine />

      <ArchitectureBox
        title="Enterprise Lakehouse"
        subtitle="Iceberg • MinIO"
      />

      <div className="my-12 grid gap-12 md:grid-cols-2">

        <ArchitectureBox
          title="Machine Learning"
          subtitle="Spark ML • MLflow"
        />

        <ArchitectureBox
          title="Generative AI"
          subtitle="LangChain • RAG • AI Agents"
        />

      </div>

      <ConnectionLine />

      <ArchitectureBox
        title="Decision Intelligence"
        subtitle="Power BI • Executive Dashboards"
      />

    </div>
  );
}