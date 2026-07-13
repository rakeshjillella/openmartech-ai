"use client";

import { useState } from "react";

import {
  ChevronDown,
  ChevronRight,
} from "@/lib/icons";

const faqs = [
  {
    question: "What is OpenMarTech AI?",
    answer:
      "OpenMarTech AI is an enterprise AI-native data platform that combines modern data engineering, machine learning, Responsible AI, observability and executive dashboards into one unified ecosystem.",
  },
  {
    question: "Which technologies power the platform?",
    answer:
      "The platform uses PostgreSQL, Kafka, Apache Airflow, Apache Spark, Apache Iceberg, MinIO, DuckDB, MLflow, Dify, Langfuse, Power BI and Responsible AI services.",
  },
  {
    question: "Can the platform support real-time analytics?",
    answer:
      "Yes. Kafka, Spark Streaming and Airflow orchestrate real-time ingestion and processing while Iceberg and DuckDB provide analytical capabilities for dashboards.",
  },
  {
    question: "How is Responsible AI implemented?",
    answer:
      "Responsible AI includes explainability, fairness evaluation, governance, model monitoring, drift detection and operational validation throughout the ML lifecycle.",
  },
  {
    question: "Can this architecture be deployed in production?",
    answer:
      "Yes. The architecture follows enterprise best practices using containerization, workflow orchestration, scalable storage, monitoring and modular AI services.",
  },
  {
    question: "Where should I begin exploring the platform?",
    answer:
      "Start with the Architecture page, continue to the AI Platform, review the Dashboard, and then explore the documentation and deployment guides.",
  },
];

export default function DocumentationFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="space-y-14">

      <div className="max-w-4xl">

        <span
          className="
            inline-flex
            rounded-full
            bg-slate-200
            px-4
            py-2
            text-sm
            font-semibold
            text-slate-700

            dark:bg-slate-800
            dark:text-slate-300
          "
        >
          Frequently Asked Questions
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-black
            tracking-tight
            text-slate-900
            dark:text-white
            lg:text-5xl
          "
        >
          Documentation FAQ
        </h2>

        <p
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-9
            text-slate-600
            dark:text-slate-400
          "
        >
          Answers to common questions about the architecture,
          deployment, AI platform and enterprise capabilities.
        </p>

      </div>

      <div className="space-y-5">

        {faqs.map((faq, index) => {

          const expanded = open === index;

          return (

            <div
              key={faq.question}
              className="
                overflow-hidden

                rounded-[24px]

                border
                border-slate-200

                bg-white

                shadow-lg

                transition-all
                duration-300

                dark:border-slate-800
                dark:bg-slate-900
              "
            >

              <button
                onClick={() =>
                  setOpen(expanded ? null : index)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between

                  p-7

                  text-left
                "
              >

                <h3
                  className="
                    text-xl
                    font-bold

                    text-slate-900

                    dark:text-white
                  "
                >
                  {faq.question}
                </h3>

                {expanded ? (
                  <ChevronDown
                    size={22}
                    className="text-blue-600"
                  />
                ) : (
                  <ChevronRight
                    size={22}
                    className="text-slate-500"
                  />
                )}

              </button>

              <div
                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${
                    expanded
                      ? "max-h-60 pb-7 px-7"
                      : "max-h-0 px-7"
                  }
                `}
              >
                <p
                  className="
                    leading-8
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {faq.answer}
                </p>
              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}