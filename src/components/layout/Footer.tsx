"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import {
  BrainCircuit,
  Mail,
  FaGithub,
  FaLinkedin,
} from "@/lib/icons";

const platformLinks = [
  { title: "Data Engineering", href: "/platform/data-engineering" },
  { title: "AI Platform", href: "/platform/ai-platform" },
  { title: "Responsible AI", href: "/platform/responsible-ai" },
  { title: "Architecture", href: "/architecture" },
];

const resourceLinks = [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Documentation", href: "#" },
  { title: "Roadmap", href: "#" },
];

const technologies = [
  "Apache Spark",
  "Apache Kafka",
  "Apache Airflow",
  "Apache Iceberg",
  "MLflow",
  "Power BI",
  "LangChain",
  "OpenAI",
];

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-200
        bg-white
        transition-colors
        duration-300

        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* ===================================================== */}
          {/* Brand */}
          {/* ===================================================== */}

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
                  bg-gradient-to-br
                  from-blue-600
                  to-indigo-600
                  text-white
                  shadow-xl
                "
              >
                <BrainCircuit size={28} />
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  OpenMarTech AI
                </h3>

                <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
                  Enterprise AI Platform
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
              Enterprise-grade platform demonstrating modern
              Data Engineering, AI Platform Engineering,
              Responsible AI, Explainable AI and Decision
              Intelligence architectures.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="https://github.com/rakeshjillella/openmartech-ai"
                target="_blank"
                className="rounded-xl border border-slate-200 p-3 transition-all hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700"
              >
                <FaGithub size={20} />
              </Link>

              <Link
                href="https://linkedin.com/in/rakesh-jillella"
                target="_blank"
                className="rounded-xl border border-slate-200 p-3 transition-all hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700"
              >
                <FaLinkedin size={20} />
              </Link>

              <Link
                href="mailto:rakeshjillella@gmail.com"
                className="rounded-xl border border-slate-200 p-3 transition-all hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          {/* ===================================================== */}
          {/* Platform */}
          {/* ===================================================== */}

          <div>
            <h4 className="mb-6 text-lg font-bold">
              Platform
            </h4>

            <ul className="space-y-4">
              {platformLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================================================== */}
          {/* Resources */}
          {/* ===================================================== */}

          <div>
            <h4 className="mb-6 text-lg font-bold">
              Resources
            </h4>

            <ul className="space-y-4">
              {resourceLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="text-slate-600 transition hover:text-blue-600 dark:text-slate-400"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ===================================================== */}
          {/* Technologies */}
          {/* ===================================================== */}

          <div>
            <h4 className="mb-6 text-lg font-bold">
              Technology Stack
            </h4>

            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-blue-200
                    bg-blue-50
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-blue-700

                    dark:border-blue-800
                    dark:bg-blue-900/20
                    dark:text-blue-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <MapPin size={16} />
              Built with ❤️ in India
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* Bottom */}
        {/* ===================================================== */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-slate-200
            pt-8

            text-sm

            dark:border-slate-800

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="text-slate-500">
            © {new Date().getFullYear()} OpenMarTech AI. All
            rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-slate-500">
              Designed & Engineered by
              <span className="ml-1 font-semibold text-slate-800 dark:text-white">
                Rakesh Jillella
              </span>
            </span>

            <span
              className="
                rounded-full
                bg-blue-600
                px-3
                py-1
                text-xs
                font-bold
                text-white
              "
            >
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}