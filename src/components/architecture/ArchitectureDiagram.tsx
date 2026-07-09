import ArchitectureConnector from "./ArchitectureConnector";
import ArchitectureNode from "./ArchitectureNode";

export default function ArchitectureDiagram() {
  return (
    <div className="mx-auto max-w-4xl">

      <ArchitectureNode
        title="Enterprise Data Sources"
        subtitle="CRM • ERP • Marketing Platforms • Web Analytics"
      />

      <ArchitectureConnector />

      <ArchitectureNode
        title="Event Streaming"
        subtitle="Apache Kafka • CDC • Apache Airbyte"
      />

      <ArchitectureConnector />

      <ArchitectureNode
        title="Real-Time Processing"
        subtitle="Apache Spark • Apache Flink • dbt"
      />

      <ArchitectureConnector />

      <ArchitectureNode
        title="Lakehouse Platform"
        subtitle="Apache Iceberg • MinIO"
      />

      <ArchitectureConnector />

      <div className="grid gap-8 md:grid-cols-2">

        <ArchitectureNode
          title="Machine Learning"
          subtitle="Spark ML • MLflow"
        />

        <ArchitectureNode
          title="Generative AI"
          subtitle="LangChain • RAG • AI Agents"
        />

      </div>

      <ArchitectureConnector />

      <ArchitectureNode
        title="Decision Intelligence"
        subtitle="Power BI • Executive Dashboards"
      />

    </div>
  );
}