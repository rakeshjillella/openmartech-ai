import {
  ArchitectureFlowNode,
  ArchitectureFlowEdge,
} from "@/types/graph";

export const architectureNodes: ArchitectureFlowNode[] = [
  {
    id: "airflow",
    position: { x: 42, y: 20 },
    data: {
      title: "Apache Airflow",
      subtitle: "Orchestration",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "kafka",
    position: { x: 420, y: 200 },
    data: {
      title: "Apache Kafka",
      subtitle: "Streaming",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "spark",
    position: { x: 420, y: 380 },
    data: {
      title: "Apache Spark",
      subtitle: "Processing",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "iceberg",
    position: { x: 120, y: 620 },
    data: {
      title: "Apache Iceberg",
      subtitle: "Lakehouse",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "mlflow",
    position: { x: 700, y: 620 },
    data: {
      title: "MLflow",
      subtitle: "Experiment Tracking",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "rai",
    position: { x: 700, y: 840 },
    data: {
      title: "Responsible AI",
      subtitle: "Governance",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "powerbi",
    position: { x: 420, y: 1080 },
    data: {
      title: "Power BI",
      subtitle: "Visualization",
      status: "Healthy",
    },
    type: "architecture",
  },
];

export const architectureEdges: ArchitectureFlowEdge[] = [
  {
    id: "e1",
    source: "airflow",
    target: "kafka",
    animated: true,
  },
  {
    id: "e2",
    source: "kafka",
    target: "spark",
    animated: true,
  },
  {
    id: "e3",
    source: "spark",
    target: "iceberg",
    animated: true,
  },
  {
    id: "e4",
    source: "spark",
    target: "mlflow",
    animated: true,
  },
  {
    id: "e5",
    source: "mlflow",
    target: "rai",
    animated: true,
  },
  {
    id: "e6",
    source: "rai",
    target: "powerbi",
    animated: true,
  },
];