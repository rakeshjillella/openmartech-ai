import { Technology } from "@/types/technology";

export const technologyData: Technology[] = [
  {
    name: "Apache Kafka",
    logo: "/logos/kafka.svg",

    category: "Streaming",
    layer: "Event Streaming",

    role: "Enterprise Event Bus",

    description:
      "Streams real-time events from CRM, marketing platforms, databases and enterprise applications.",

    github: "https://github.com/apache/kafka",

    documentation: "https://kafka.apache.org",

    usedIn: [
      "CDC",
      "Real-time Analytics",
      "Spark Streaming",
      "Apache Flink",
    ],

    advantages: [
      "Fault Tolerant",
      "High Throughput",
      "Distributed",
      "Scalable",
    ],

    enterpriseUse:
      "Acts as the central event backbone of the OpenMarTech AI platform.",
  },

  {
    name: "Apache Spark",

    logo: "/logos/spark.svg",

    category: "Data Engineering",

    layer: "Real-Time Processing",

    role: "Distributed Compute Engine",

    description:
      "Processes enterprise-scale batch and streaming workloads for AI pipelines.",

    github: "https://github.com/apache/spark",

    documentation: "https://spark.apache.org",

    usedIn: [
      "ETL",
      "Machine Learning",
      "Streaming",
      "Feature Engineering",
    ],

    advantages: [
      "Fast",
      "Distributed",
      "Scalable",
      "Production Ready",
    ],

    enterpriseUse:
      "Runs large-scale data engineering and machine learning workloads.",
  },
];