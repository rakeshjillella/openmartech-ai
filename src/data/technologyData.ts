import { Technology } from "@/types/technology";

export const technologyData: Technology[] = [

{
id: "spark",
name: "Apache Spark",
category: "Processing",
logo: "/logos/spark.svg",
description:
"Distributed engine for batch, streaming and ML workloads.",
maturity: "Production",
website: "https://spark.apache.org",
documentation: "https://spark.apache.org/docs/latest/",
github: "https://github.com/apache/spark",
},

{
id: "kafka",
name: "Apache Kafka",
category: "Streaming",
logo: "/logos/kafka.svg",
description:
"Distributed event streaming platform.",
maturity: "Production",
website: "https://kafka.apache.org",
documentation: "https://kafka.apache.org/documentation/",
github: "https://github.com/apache/kafka",
},

{
id: "airflow",
name: "Apache Airflow",
category: "Orchestration",
logo: "/logos/airflow.svg",
description:
"Workflow orchestration platform.",
maturity: "Production",
website: "https://airflow.apache.org",
documentation: "https://airflow.apache.org/docs/",
github: "https://github.com/apache/airflow",
},

{
id: "iceberg",
name: "Apache Iceberg",
category: "Lakehouse",
logo: "/logos/iceberg.svg",
description:
"Open table format for enterprise lakehouses.",
maturity: "Production",
website: "https://iceberg.apache.org",
documentation: "https://iceberg.apache.org/docs/latest/",
github: "https://github.com/apache/iceberg",
},

{
id: "mlflow",
name: "MLflow",
category: "MLOps",
logo: "/logos/mlflow.svg",
description:
"Machine Learning Lifecycle Platform.",
maturity: "Production",
website: "https://mlflow.org",
documentation: "https://mlflow.org/docs/latest/",
github: "https://github.com/mlflow/mlflow",
},

{
id: "dify",
name: "Dify",
category: "LLM",
logo: "/logos/dify.svg",
description:
"Enterprise LLM Application Platform.",
maturity: "Production",
website: "https://dify.ai",
documentation: "https://docs.dify.ai",
github: "https://github.com/langgenius/dify",
},

];