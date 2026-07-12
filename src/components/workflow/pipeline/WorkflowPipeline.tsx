import PipelineCard from "../PipelineCard";
import WorkflowArrow from "./WorkflowArrow";

const pipeline = [
  {
    title: "Data Sources",
    subtitle: "CRM • ERP • APIs",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Kafka",
    subtitle: "Streaming Platform",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Spark",
    subtitle: "Distributed Processing",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Iceberg",
    subtitle: "Lakehouse Storage",
    color: "from-cyan-500 to-teal-600",
  },
  {
    title: "ML + RAG",
    subtitle: "Enterprise AI",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Executive BI",
    subtitle: "Power BI",
    color: "from-pink-500 to-rose-600",
  },
];

export default function WorkflowPipeline() {
  return (
    <section className="overflow-x-auto py-12">

      <div className="flex min-w-max items-center gap-8 px-4">

        {pipeline.map((node, index) => (
          <div
            key={node.title}
            className="flex items-center gap-8"
          >
            <PipelineCard
              title={node.title}
              subtitle={node.subtitle}
              color={node.color}
            />

            {index !== pipeline.length - 1 && (
              <WorkflowArrow />
            )}
          </div>
        ))}

      </div>

    </section>
  );
}