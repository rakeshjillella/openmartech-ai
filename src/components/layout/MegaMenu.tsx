"use client";

import Link from "next/link";

import {
  Cpu,
  Boxes,
  Database,
  Workflow,
  ShieldCheck,
  BrainCircuit,
  LayoutDashboard,
  FileText,
  Mail,
  ExternalLink,
} from "@/lib/icons";

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

interface MegaMenuProps {
  items: MegaMenuItem[];
}

export default function MegaMenu({
  items,
}: MegaMenuProps) {
  return (
    <div
  className="
    absolute
    left-1/2
    top-full
    z-50

    w-[980px]
    max-w-[95vw]
    -translate-x-1/2
    translate-y-2

    rounded-3xl
    border
    border-slate-200
    bg-white

    p-7

    shadow-2xl

    opacity-0
    invisible
    pointer-events-none

    transition-all
    duration-300

    group-hover:visible
    group-hover:opacity-100
    group-hover:pointer-events-auto
    group-hover:translate-y-2

    dark:border-slate-800
    dark:bg-slate-900
  "
>
      {/* Header */}

      <div className="mb-6 border-b border-slate-200 pb-5 dark:border-slate-700">

        <h3
          className="
            text-lg
            font-bold
            text-slate-900

            dark:text-white
          "
        >
          Enterprise Navigation
        </h3>

        <p
  className="
    mt-2
    max-w-full

    text-sm
    leading-6

    text-slate-500
    dark:text-slate-400

    line-clamp-2

    break-words
    whitespace-normal
  "
>
          Explore every capability of the OpenMarTech AI platform.
        </p>

      </div>

      {/* Menu Grid */}

<div className="grid grid-cols-2 gap-6">
  {items.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="
        group/item
        flex
        items-start
        gap-4

        rounded-2xl
        border
        border-transparent

        p-5

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-200
        hover:bg-blue-50
        hover:shadow-lg

        dark:hover:border-blue-900
        dark:hover:bg-slate-800
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center

          rounded-2xl

          bg-blue-100
          text-blue-600

          dark:bg-blue-900/30
          dark:text-blue-400
        "
      >
        {item.icon}
      </div>

      {/* Content */}

      <div className="flex flex-col flex-1">
        <h3
          className="
            text-lg
            font-bold
            text-slate-900

            transition-colors

            group-hover/item:text-blue-600

            dark:text-white
            dark:group-hover/item:text-blue-400
          "
        >
          {item.title}
        </h3>

        <p
          className="
            mt-2

            text-sm
            leading-6

            text-slate-500
            dark:text-slate-400

            whitespace-normal
            break-words
          "
        >
          {item.description}
        </p>
      </div>
    </Link>
  ))}
</div>

      {/* Footer */}

      <div
        className="
          mt-7

          border-t
          border-slate-200

          pt-5

          text-center
          text-xs

          text-slate-500

          dark:border-slate-700
          dark:text-slate-400
        "
      >
        OpenMarTech AI • Enterprise Decision Intelligence Platform
      </div>

    </div>
  );
}

/* ---------------- Platform ---------------- */

export const PlatformMenu: MegaMenuItem[] = [
  {
    title: "AI Platform",
    description: "Enterprise GenAI, MLOps and LLM platform.",
    href: "/ai-platform",
    icon: <BrainCircuit size={22} />,
  },
  {
    title: "Responsible AI",
    description: "Governance, fairness, explainability and monitoring.",
    href: "/responsible-ai",
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "Executive Dashboard",
    description: "Enterprise intelligence, KPIs and executive analytics.",
    href: "/dashboard",
    icon: <LayoutDashboard size={22} />,
  },
];

/* ---------------- Architecture ---------------- */

export const ArchitectureMenu: MegaMenuItem[] = [
  {
    title: "Interactive Architecture",
    description: "Explore the complete enterprise architecture.",
    href: "/architecture",
    icon: <Boxes size={22} />,
  },
  {
    title: "Technology Explorer",
    description: "Discover every technology powering OpenMarTech AI.",
    href: "/technology",
    icon: <Cpu size={22} />,
  },
  {
    title: "Data Pipelines",
    description: "Kafka, Spark and Airflow orchestration.",
    href: "/architecture#pipelines",
    icon: <Workflow size={22} />,
  },
  {
    title: "Lakehouse",
    description: "Iceberg, MinIO and dbt transformations.",
    href: "/architecture#lakehouse",
    icon: <Database size={22} />,
  },
];

/* ---------------- Resources ---------------- */

export const ResourceMenu: MegaMenuItem[] = [
  {
    title: "Documentation",
    description: "Architecture guides, deployment, APIs, and documentation.",
    href: "/documentation",
    icon: <FileText size={22} />,
  },
  {
    title: "Case Study",
    description: "Explore the OpenMarTech AI enterprise implementation.",
    href: "/case-study",
    icon: <FileText size={22} />,
  },
  {
    title: "GitHub",
    description: "Browse the complete OpenMarTech AI source code.",
    href: "https://github.com/rakeshjillella/openmartech-ai",
    icon: <ExternalLink size={22} />,
  },
  {
    title: "Contact",
    description: "Connect regarding Enterprise AI and Data Engineering.",
    href: "/contact",
    icon: <Mail size={22} />,
  },
];