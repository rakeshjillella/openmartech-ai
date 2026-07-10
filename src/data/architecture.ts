export type ArchitectureLayer =
  | "Data Sources"
  | "Ingestion"
  | "Processing"
  | "Storage"
  | "AI Platform"
  | "Consumption";

export interface ArchitectureNode {

  id: string;

  title: string;

  subtitle: string;

  layer: ArchitectureLayer;

  category: string;

  description: string;

  icon: string;

  technologies: string[];

  documentation: string;

  connections: string[];

}

export const architectureNodes: ArchitectureNode[] = [

  {
    id: "crm",

    title: "Marketing Systems",

    subtitle: "CRM • Ads • Web Analytics",

    layer: "Data Sources",

    category: "Source",

    icon: "📊",

    description:
      "Marketing platforms generating customer, campaign and engagement data.",

    technologies: [
      "Salesforce",
      "Google Analytics",
      "Meta Ads",
    ],

    documentation: "#",

    connections: ["kafka"],
  },

  {
    id: "kafka",

    title: "Kafka + CDC",

    subtitle: "Real-Time Ingestion",

    layer: "Ingestion",

    category: "Streaming",

    icon: "⚡",

    description:
      "Captures streaming events and Change Data Capture from operational systems.",

    technologies: [
      "Apache Kafka",
      "Debezium",
    ],

    documentation: "https://kafka.apache.org/",

    connections: [
      "airflow",
      "spark",
    ],
  },

  {
    id: "airflow",

    title: "Apache Airflow",

    subtitle: "Workflow Orchestration",

    layer: "Processing",

    category: "Orchestration",

    icon: "🛠",

    description:
      "Schedules and orchestrates enterprise ETL and ML pipelines.",

    technologies: [
      "Apache Airflow",
    ],

    documentation: "https://airflow.apache.org/",

    connections: [
      "spark",
    ],
  },

  {
    id: "spark",

    title: "Apache Spark",

    subtitle: "Distributed Compute",

    layer: "Processing",

    category: "Processing",

    icon: "🔥",

    description:
      "Distributed data engineering and machine learning platform.",

    technologies: [
      "Spark SQL",
      "Spark ML",
      "PySpark",
    ],

    documentation: "https://spark.apache.org/",

    connections: [
      "iceberg",
      "mlflow",
    ],
  },

  {
    id: "iceberg",

    title: "Iceberg Lakehouse",

    subtitle: "Enterprise Storage",

    layer: "Storage",

    category: "Lakehouse",

    icon: "🧊",

    description:
      "ACID-compliant enterprise data lake built on MinIO.",

    technologies: [
      "Apache Iceberg",
      "MinIO",
    ],

    documentation: "https://iceberg.apache.org/",

    connections: [
      "powerbi",
      "dify",
    ],
  },

  {
    id: "mlflow",

    title: "MLflow",

    subtitle: "Model Lifecycle",

    layer: "AI Platform",

    category: "MLOps",

    icon: "🤖",

    description:
      "Tracks experiments, model versions and production deployments.",

    technologies: [
      "MLflow",
    ],

    documentation: "https://mlflow.org/",

    connections: [
      "dify",
    ],
  },

  {
    id: "dify",

    title: "Dify AI",

    subtitle: "GenAI Agents",

    layer: "AI Platform",

    category: "LLM",

    icon: "🧠",

    description:
      "Enterprise AI Agents powered by Retrieval-Augmented Generation.",

    technologies: [
      "Dify",
      "LLMs",
    ],

    documentation: "https://dify.ai",

    connections: [
      "powerbi",
    ],
  },

  {
    id: "powerbi",

    title: "Power BI",

    subtitle: "Executive Dashboards",

    layer: "Consumption",

    category: "Visualization",

    icon: "📈",

    description:
      "Executive dashboards delivering marketing decision intelligence.",

    technologies: [
      "Power BI",
    ],

    documentation: "https://powerbi.microsoft.com/",

    connections: [],
  },

];