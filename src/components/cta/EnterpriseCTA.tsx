"use client";

import Link from "next/link";

import {
  ArrowRight,
  BrainCircuit,
  Mail,
  FaGithub,
} from "@/lib/icons";

interface EnterpriseCTAProps {
  title?: string;
  description?: string;
}

export default function EnterpriseCTA({
  title = "Ready to Build Enterprise AI Solutions?",
  description = "Let's discuss Enterprise AI, Data Engineering, Responsible AI, modern Lakehouse architectures and intelligent business platforms.",
}: EnterpriseCTAProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div
          className="
            relative
            overflow-hidden

            rounded-[32px]

            border
            border-blue-200

            bg-gradient-to-br
            from-blue-600
            via-indigo-600
            to-slate-900

            p-12

            text-white

            shadow-2xl
          "
        >

          {/* Background */}

          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]

              pointer-events-none
            "
          />

          <div className="relative z-10">

            <div
              className="
                mb-6

                inline-flex
                items-center
                gap-3

                rounded-full

                bg-white/15

                px-5
                py-2

                backdrop-blur
              "
            >
              <BrainCircuit size={20} />

              <span className="font-semibold">
                OpenMarTech AI
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-black leading-tight lg:text-5xl">
              {title}
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-blue-100">
              {description}
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3

                  rounded-xl

                  bg-white

                  px-7
                  py-4

                  font-semibold

                  text-slate-900

                  shadow-xl

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                <Mail size={20} />

                Contact Me

                <ArrowRight size={18} />
              </Link>

              <Link
                href="https://github.com/rakeshjillella/openmartech-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-3

                  rounded-xl

                  border
                  border-white/30

                  bg-white/10

                  px-7
                  py-4

                  font-semibold

                  backdrop-blur

                  transition-all
                  duration-300

                  hover:bg-white/20
                "
              >
                <FaGithub size={20} />

                View GitHub
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}