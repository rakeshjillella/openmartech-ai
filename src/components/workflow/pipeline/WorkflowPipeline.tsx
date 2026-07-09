import WorkflowArrow from "./WorkflowArrow";
import WorkflowNode from "./WorkflowNode";

export default function WorkflowPipeline() {
  return (
    <div className="mx-auto max-w-3xl">

      <WorkflowNode
        title="Enterprise Sources"
        subtitle="CRM • ERP • Marketing Platforms"
      />

      <WorkflowArrow />

      <WorkflowNode
        title="Real-Time Streaming"
        subtitle="Kafka • CDC • Airbyte"
      />

      <WorkflowArrow />

      <WorkflowNode
        title="Processing"
        subtitle="Spark • Flink • dbt"
      />

      <WorkflowArrow />

      <WorkflowNode
        title="Lakehouse"
        subtitle="Apache Iceberg • MinIO"
      />

      <WorkflowArrow />

      <WorkflowNode
        title="Machine Learning"
        subtitle="Spark ML • MLflow"
      />

      <WorkflowArrow />

      <WorkflowNode
        title="Generative AI"
        subtitle="LangChain • RAG • AI Agents"
      />

      <WorkflowArrow />

      <WorkflowNode
        title="Executive Intelligence"
        subtitle="Power BI Dashboards"
      />

    </div>
  );
}