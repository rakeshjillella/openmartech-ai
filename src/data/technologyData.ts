import { Technology } from "@/types/technology";

export const technologyData: Technology[] = [

  {

    name: "Apache Kafka",

    category: "Event Streaming",

    role: "Real-Time Event Streaming",

    description:
      "Streams enterprise events from CDC, marketing platforms, CRM and operational systems.",

    github: "https://github.com/apache/kafka",

    documentation: "https://kafka.apache.org",

    logo: ""

  },

  {

    name: "Apache Flink",

    category: "Real-Time Processing",

    role: "Stream Processing",

    description:
      "Processes Kafka streams in real time for analytics and AI pipelines.",

    github: "https://github.com/apache/flink",

    documentation: "https://flink.apache.org",

    logo: ""

  }

];