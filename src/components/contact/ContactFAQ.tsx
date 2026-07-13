"use client";

import { useState } from "react";

import {
  ChevronDown,
  BrainCircuit,
} from "@/lib/icons";

const faqs = [
  {
    question: "What types of projects do you specialize in?",
    answer:
      "I specialize in Enterprise AI platforms, modern Data Engineering, Lakehouse architectures, Responsible AI, MLOps, Executive Dashboards and Intelligent Decision Platforms.",
  },
  {
    question: "Are you available for consulting or freelance work?",
    answer:
      "Yes. I'm open to consulting opportunities involving AI architecture, cloud-native data platforms, enterprise automation and analytics solutions.",
  },
  {
    question: "Which technologies do you primarily work with?",
    answer:
      "Apache Spark, Kafka, Airflow, dbt, Iceberg, MinIO, MLflow, LangChain, Dify, Python, PostgreSQL, Docker, Power BI and modern AI ecosystems.",
  },
  {
    question: "Do you design complete enterprise architectures?",
    answer:
      "Yes. From data ingestion and real-time streaming through AI inference, governance, observability and executive dashboards, I design complete end-to-end enterprise platforms.",
  },
  {
    question: "How quickly do you usually respond?",
    answer:
      "Typically within 24 hours for professional enquiries.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24">

      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="mb-16 text-center">

          <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            Frequently Asked Questions
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">
            Common Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Answers to the questions I receive most often regarding
            Enterprise AI, consulting and architecture.
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

                  rounded-3xl

                  border
                  border-slate-200

                  bg-white

                  shadow-lg

                  transition-all
                  duration-300

                  hover:shadow-xl

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

                    px-8
                    py-7

                    text-left
                  "
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">

                      <BrainCircuit size={22} />

                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">

                      {faq.question}

                    </h3>

                  </div>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-300

                    ${
                      expanded
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <div className="px-8 pb-8 pl-24">

                      <p className="leading-8 text-slate-600 dark:text-slate-400">

                        {faq.answer}

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}