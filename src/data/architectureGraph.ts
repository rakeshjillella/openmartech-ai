import {
  ArchitectureFlowNode,
  ArchitectureFlowEdge,
} from "@/types/graph";

export const architectureNodes: ArchitectureFlowNode[] = [
  {
    id: "airflow",
    position: { x: 250, y: 0 },
    data: {
      title: "Apache Airflow",
      subtitle: "Orchestration",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "kafka",
    position: { x: 250, y: 150 },
    data: {
      title: "Apache Kafka",
      subtitle: "Streaming",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "spark",
    position: { x: 250, y: 320 },
    data: {
      title: "Apache Spark",
      subtitle: "Processing",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "iceberg",
    position: { x: 50, y: 520 },
    data: {
      title: "Apache Iceberg",
      subtitle: "Lakehouse",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "mlflow",
    position: { x: 450, y: 520 },
    data: {
      title: "MLflow",
      subtitle: "Experiment Tracking",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "rai",
    position: { x: 450, y: 720 },
    data: {
      title: "Responsible AI",
      subtitle: "Governance",
      status: "Healthy",
    },
    type: "architecture",
  },

  {
    id: "powerbi",
    position: { x: 250, y: 920 },
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