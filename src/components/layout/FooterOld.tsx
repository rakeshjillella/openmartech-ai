"use client";

import Link from "next/link";

import {
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  FaGithub,
  FaLinkedin,
} from "@/lib/icons";

function EnterpriseCTA() {
  return (
    <section
      className="
        mx-auto
        max-w-7xl
        px-6
        py-12

        text-slate-900
        dark:text-white
      "
    >
      <div
        className="
          rounded-[2rem]
          border
          border-slate-200
          bg-slate-100
          p-10
          shadow-xl
          transition-colors
          duration-300
          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
              Enterprise AI
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
              Accelerate your AI transformation.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
              Deploy production-ready AI solutions with a platform designed for
              data engineering, MLOps, and responsible AI.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-blue-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                duration-300
                hover:bg-blue-700
              "
            >
              Get Started
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              href="/about"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                px-6
                py-3
                text-sm
                font-semibold
                text-slate-900
                transition
                duration-300
                hover:border-blue-500
                hover:text-blue-600
                dark:border-slate-700
                dark:bg-slate-950
                dark:text-white
              "
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const platformLinks = [
  {
    title: "AI Platform",
    href: "/ai-platform",
  },
  {
    title: "Responsible AI",
    href: "/responsible-ai",
  },
  {
    title: "Executive Dashboard",
    href: "/dashboard",
  },
  {
    title: "Technology Explorer",
    href: "/technology",
  },
  {
    title: "Architecture Studio",
    href: "/architecture",
  },
  {
    title: "Documentation",
    href: "/documentation",
  },
];

const resourceLinks = [
  {
    title: "Documentation",
    href: "/documentation",
  },
  {
    title: "Case Study",
    href: "/case-study",
  },
  {
    title: "GitHub Repository",
    href: "https://github.com/rakeshjillella/openmartech-ai",
    external: true,
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const technologies = [
  "Apache Spark",
  "Apache Kafka",
  "Apache Airflow",
  "dbt",
  "MLflow",
  "Iceberg",
  "MinIO",
  "Trino",
  "LangChain",
  "Dify",
  "Langfuse",
  "Power BI",
];

export default function Footer() {
  return (
    <footer
      className="
        mt-24

        border-t
        border-slate-200

        bg-white

        text-slate-900

        transition-colors
        duration-300

        dark:border-slate-800
        dark:bg-slate-950
        dark:text-white
      "
    >
      {/* =======================================================
          CTA
      ======================================================== */}

      <EnterpriseCTA />


      {/* =======================================================
          Main Footer
      ======================================================== */}

            <section>
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-14

            px-6
            py-20

            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {/* ===================================================
              Brand
          =================================================== */}

          <div>

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  bg-blue-600

                  text-white

                  shadow-lg
                "
              >
                <BrainCircuit size={28} />
              </div>

              <div>

                <h3
                  className="
                    text-2xl
                    font-black

                    text-slate-900

                    dark:text-white
                  "
                >
                  OpenMarTech AI
                </h3>

                <p
                  className="
                    text-slate-500

                    dark:text-slate-400
                  "
                >
                  Enterprise AI Platform
                </p>

              </div>

            </div>

            <p
              className="
                mt-8
                leading-8

                text-slate-600

                dark:text-slate-400
              "
            >
              Production-inspired Enterprise AI portfolio
              showcasing Data Engineering,
              AI Platform Engineering,
              Responsible AI,
              MLOps,
              Streaming Analytics,
              Executive Intelligence
              and modern Lakehouse architecture.
            </p>

            <div className="mt-10 flex gap-4">

              <Link
                href="https://github.com/rakeshjillella/openmartech-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-slate-200

                  bg-white

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:text-blue-600
                  hover:shadow-lg

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:hover:border-blue-400
                "
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://linkedin.com/in/rakesh-jillella"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-slate-200

                  bg-white

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-blue-500
                  hover:text-blue-600
                  hover:shadow-lg

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:hover:border-blue-400
                "
              >
                <FaLinkedin size={20} />
              </Link>

            </div>

          </div>

          {/* ===================================================
              Platform
          =================================================== */}

          <div>

            <h3
              className="
                mb-8
                text-xl
                font-bold

                text-slate-900

                dark:text-white
              "
            >
              Platform
            </h3>

            <div className="space-y-4">

              {platformLinks.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    block

                    text-slate-600

                    transition-all
                    duration-300

                    hover:translate-x-1
                    hover:text-blue-600

                    dark:text-slate-400
                    dark:hover:text-blue-400
                  "
                >
                  {item.title}
                </Link>

              ))}

            </div>

          </div>

          {/* ===================================================
              Technology
          =================================================== */}

          <div>

            <h3
              className="
                mb-8
                text-xl
                font-bold

                text-slate-900

                dark:text-white
              "
            >
              Technology Stack
            </h3>

            <div className="flex flex-wrap gap-3">

              {technologies.map((tech) => (

                <span
                  key={tech}
                  className="
                    rounded-xl

                    border
                    border-slate-200

                    bg-slate-100

                    px-3
                    py-2

                    text-sm

                    text-slate-700

                    transition

                    hover:border-blue-500
                    hover:bg-blue-50

                    dark:border-slate-700
                    dark:bg-slate-900
                    dark:text-slate-300
                    dark:hover:bg-slate-800
                  "
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* ===================================================
              Resources
          =================================================== */}

          <div>

            <h3
              className="
                mb-8
                text-xl
                font-bold

                text-slate-900

                dark:text-white
              "
            >
              Resources
            </h3>

            <div className="space-y-4">

              {resourceLinks.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    block

                    text-slate-600

                    transition-all
                    duration-300

                    hover:translate-x-1
                    hover:text-blue-600

                    dark:text-slate-400
                    dark:hover:text-blue-400
                  "
                >
                  {item.title}
                </Link>

              ))}

            </div>

            <div
              className="
                mt-10

                rounded-2xl

                border
                border-slate-200

                bg-slate-50

                p-6

                dark:border-slate-700
                dark:bg-slate-900
              "
            >
              <h4
                className="
                  font-bold

                  text-slate-900

                  dark:text-white
                "
              >
                Portfolio Status
              </h4>
              <div className="space-y-3">

<div className="flex items-center gap-3">

<CheckCircle2 className="h-5 w-5 text-green-500"/>

<span>Enterprise AI Platform</span>

</div>

<div className="flex items-center gap-3">

<CheckCircle2 className="h-5 w-5 text-green-500"/>

<span>Responsible AI & Governance</span>

</div>

<div className="flex items-center gap-3">

<CheckCircle2 className="h-5 w-5 text-green-500"/>

<span>Modern Lakehouse Architecture</span>

</div>

<div className="flex items-center gap-3">

<CheckCircle2 className="h-5 w-5 text-green-500"/>

<span>Real-Time Streaming Pipelines</span>

</div>

<div className="flex items-center gap-3">

<CheckCircle2 className="h-5 w-5 text-green-500"/>

<span>Executive BI Dashboards</span>

</div>

</div>

        </div>
      </div>
    </div>
        
      </section>

      {/* =======================================================
          Bottom Footer
      ======================================================== */}

      <section
        className="
          border-t
          border-slate-200

          bg-slate-50

          dark:border-slate-800
          dark:bg-slate-950
        "
      >
        <div
          className="
            mx-auto

            flex
            max-w-7xl
            flex-col

            items-center
            justify-between

            gap-4

            px-6
            py-8

            text-sm

            md:flex-row
          "
        >
          <p
            className="
              text-center
              text-slate-600

              md:text-left

              dark:text-slate-400
            "
          >
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              OpenMarTech AI
            </span>
            {" "}• Designed & Developed by{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Rakesh Jillella
            </span>
          </p>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            {[
              "Enterprise AI",
              "Lakehouse",
              "Streaming",
              "RAG ",
              "XAI",
              "MLOps",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full

                  border
                  border-slate-200

                  bg-white

                  px-3
                  py-1

                  text-xs
                  font-medium

                  text-slate-600

                  transition-all
                  duration-300

                  hover:border-blue-500
                  hover:text-blue-600

                  dark:border-slate-700
                  dark:bg-slate-900
                  dark:text-slate-400
                  dark:hover:border-blue-400
                  dark:hover:text-blue-400
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

    </footer>
  );
}