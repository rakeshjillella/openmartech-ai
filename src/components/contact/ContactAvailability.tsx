"use client";

import {
  BadgeCheck,
  Mail,
} from "@/lib/icons";

const availability = [
  "Enterprise AI Architecture",
  "Data Engineering Consulting",
  "Responsible AI Solutions",
  "Technical Discussions",
];

export default function ContactAvailability() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <div className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              Available for Collaboration
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white lg:text-5xl">
              Let&apos;s Build Enterprise AI Together
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              I&apos;m open to discussing Enterprise AI, Data Engineering,
              Responsible AI, cloud-native architectures and modern analytics
              platforms.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Currently Available For
            </h3>

            <div className="mt-8 space-y-5">

              {availability.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <BadgeCheck className="text-blue-600 dark:text-blue-400" />

                  <span className="text-slate-700 dark:text-slate-300">
                    {item}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-10 rounded-2xl bg-blue-50 p-6 dark:bg-blue-900/20">

              <div className="flex items-center gap-3">

                <Mail className="text-blue-600 dark:text-blue-400" />

                <span className="font-semibold text-slate-900 dark:text-white">
                  Response Time
                </span>

              </div>

              <p className="mt-3 text-slate-600 dark:text-slate-400">
                Usually within 24 hours.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}