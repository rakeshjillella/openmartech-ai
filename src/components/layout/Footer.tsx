"use client";

import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
} from "@/lib/icons";

import {
  BrainCircuit,
  ArrowRight,
} from "@/lib/icons";

const platformLinks = [
  { name: "Architecture", href: "/architecture" },
  { name: "Technology Stack", href: "/technology" },
  { name: "AI Platform", href: "/ai-platform" },
  { name: "Responsible AI", href: "/responsible-ai" },
  { name: "Dashboard", href: "/dashboard" },
];

const resourceLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Architecture Studio", href: "/architecture" },
  { name: "Platform Overview", href: "/ai-platform" },
];

const technologies = [
  "Apache Airflow",
  "Apache Kafka",
  "Apache Spark",
  "Apache Iceberg",
  "DuckDB",
  "MinIO",
  "MLflow",
  "Dify",
  "Langfuse",
  "Power BI",
];

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden border-t border-slate-800 bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb18,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d418,transparent_35%)]" />

      {/* CTA */}

      <section className="relative border-b border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-24 lg:flex-row">

          <div>

            <span className="rounded-full border border-blue-800 bg-blue-900/30 px-4 py-2 text-sm font-semibold text-blue-300">
              Enterprise AI Portfolio
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Let&apos;s Build
              <span className="block text-blue-400">
                Enterprise AI Together
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400">
              OpenMarTech AI demonstrates a complete production-inspired
              Enterprise AI ecosystem covering Data Engineering,
              Streaming, Lakehouse, MLOps, Responsible AI and Executive
              Analytics.
            </p>

          </div>

          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-2xl"
          >
            Get In Touch
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

      {/* Main Footer */}

      <section className="relative">

        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 xl:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-600 p-4 shadow-lg">
                <BrainCircuit size={28} />
              </div>

              <div>

                <h3 className="text-2xl font-black">
                  OpenMarTech AI
                </h3>

                <p className="text-slate-400">
                  Enterprise AI Platform
                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-slate-400">
              Production-ready AI Engineering Portfolio demonstrating
              Enterprise Architecture, Responsible AI, Data Engineering,
              AI Platform Engineering, MLOps and Executive Intelligence.
            </p>

            <div className="mt-10 flex gap-4">

              <Link
                href="https://github.com/rakeshjillella/openmartech-ai"
                target="_blank"
                className="rounded-2xl border border-slate-800 bg-slate-900 p-4 transition hover:border-blue-500 hover:bg-slate-800"
              >
                <FaGithub size={22} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="rounded-2xl border border-slate-800 bg-slate-900 p-4 transition hover:border-blue-500 hover:bg-slate-800"
              >
                <FaLinkedin size={22} />
              </Link>

            </div>

          </div>

          {/* Platform */}

          <div>

            <h3 className="mb-8 text-xl font-bold">
              Platform
            </h3>

            <div className="space-y-4">

              {platformLinks.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-slate-400 transition hover:text-blue-400"
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>

          {/* Technology */}

          <div>

            <h3 className="mb-8 text-xl font-bold">
              Technology Stack
            </h3>

            <div className="grid grid-cols-2 gap-3">

              {technologies.map((tech) => (

                <span
                  key={tech}
                  className="rounded-xl bg-slate-900 px-3 py-2 text-sm text-slate-300"
                >
                  {tech}
                </span>

              ))}

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-8 text-xl font-bold">
              Resources
            </h3>

            <div className="space-y-4">

              {resourceLinks.map((item) => (

                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-slate-400 transition hover:text-blue-400"
                >
                  {item.name}
                </Link>

              ))}

            </div>

            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">

              <h4 className="font-bold text-white">
                Portfolio Status
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Enterprise-ready architecture with AI Engineering,
                Streaming Analytics, Responsible AI, MLOps and
                Interactive Dashboards.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom */}

      <section className="relative border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} OpenMarTech AI • Designed &
            Developed by <span className="text-white">Rakesh Jillella</span>
          </p>

          <p className="text-slate-400">
            Enterprise AI • Responsible AI • Data Engineering • MLOps
          </p>

        </div>

      </section>

    </footer>
  );
}