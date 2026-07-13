"use client";

import {
  BrainCircuit,
  Database,
  Workflow,
  ShieldCheck,
} from "@/lib/icons";

const services = [
  {
    icon: <BrainCircuit size={24} />,
    title: "Enterprise AI",
  },
  {
    icon: <Database size={24} />,
    title: "Data Engineering",
  },
  {
    icon: <Workflow size={24} />,
    title: "Architecture Design",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Responsible AI",
  },
];

export default function ContactServices() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-black text-slate-900 dark:text-white">
            Areas of Collaboration
          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            I enjoy collaborating on enterprise-scale technology initiatives.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (

            <div
              key={service.title}
              className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-blue-500
                hover:shadow-xl
                dark:border-slate-800
                dark:bg-slate-900
              "
            >

              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">

                {service.icon}

              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">

                {service.title}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}