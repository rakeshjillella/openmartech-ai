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
      invisible absolute left-1/2 top-full z-50
      mt-4 w-[760px]
      -translate-x-1/2
      rounded-3xl
      border border-slate-200
      bg-white
      p-6
      opacity-0
      shadow-2xl
      transition-all
      duration-300
      group-hover:visible
      group-hover:translate-y-0
      group-hover:opacity-100
    "
    >
      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            target={
              item.href.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel={
              item.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="
              group/item
              flex
              gap-4
              rounded-2xl
              p-4
              transition
              hover:bg-slate-50
            "
          >
            <div className="mt-1 text-blue-600">
              {item.icon}
            </div>

            <div>
              <h3
                className="
                  font-bold
                  transition
                  group-hover/item:text-blue-600
                "
              >
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Platform ---------------- */

export const PlatformMenu: MegaMenuItem[] = [
  {
    title: "Architecture Studio",
    description:
      "Interactive enterprise data architecture explorer.",
    href: "/architecture",
    icon: <Boxes size={22} />,
  },
  {
    title: "Technology Stack",
    description:
      "Explore every technology powering OpenMarTech AI.",
    href: "/technology",
    icon: <Cpu size={22} />,
  },
  {
    title: "AI Platform",
    description:
      "Enterprise GenAI, MLOps and LLM platform.",
    href: "/ai-platform",
    icon: <BrainCircuit size={22} />,
  },
  {
    title: "Responsible AI",
    description:
      "Bias monitoring, governance and explainability.",
    href: "/responsible-ai",
    icon: <ShieldCheck size={22} />,
  },
];

/* ---------------- Architecture ---------------- */

export const ArchitectureMenu: MegaMenuItem[] = [
  {
    title: "Data Sources",
    description:
      "Enterprise operational systems.",
    href: "/architecture#sources",
    icon: <Database size={22} />,
  },
  {
    title: "Data Pipelines",
    description:
      "Kafka, Spark and Airflow orchestration.",
    href: "/architecture#pipelines",
    icon: <Workflow size={22} />,
  },
  {
    title: "Lakehouse",
    description:
      "Iceberg, MinIO and dbt transformations.",
    href: "/architecture#lakehouse",
    icon: <Database size={22} />,
  },
  {
    title: "Executive Dashboard",
    description:
      "Business Intelligence and KPIs.",
    href: "/dashboard",
    icon: <LayoutDashboard size={22} />,
  },
];

/* ---------------- Resources ---------------- */

export const ResourceMenu: MegaMenuItem[] = [
  {
    title: "Documentation",
    description:
      "Platform documentation and architecture guides.",
    href: "/docs",
    icon: <FileText size={22} />,
  },
  {
    title: "GitHub",
    description:
      "Browse the complete project source code.",
    href: "https://github.com/rakeshjillella/openmartech-ai",
    icon: <ExternalLink size={22} />,
  },
  {
    title: "Contact",
    description:
      "Let's connect and discuss Enterprise AI.",
    href: "/contact",
    icon: <Mail size={22} />,
  },
];