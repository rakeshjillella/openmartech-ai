import Link from "next/link";

import {
  ArrowRight,
  BrainCircuit,
  FaGithub,
  Mail,
} from "@/lib/icons";

export default function AIPlatformCTA() {
  return (

    <section
      className="
        relative
        overflow-hidden

        rounded-[40px]

        border
        border-slate-200

        bg-gradient-to-br
        from-slate-950
        via-blue-950
        to-indigo-950

        px-8
        py-24

        text-white

        shadow-2xl

        dark:border-slate-800

        lg:px-16
      "
    >

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative">

        <div className="mx-auto max-w-5xl text-center">

          <div
            className="
              inline-flex
              items-center
              gap-3

              rounded-full

              bg-white/10

              px-6
              py-3

              backdrop-blur
            "
          >
            <BrainCircuit size={20} />

            <span className="font-semibold">
              Enterprise AI Portfolio
            </span>

          </div>

          <h2
            className="
              mt-8

              text-5xl
              font-black

              leading-tight

              md:text-6xl
            "
          >
            Ready to Explore the
            <span className="block text-blue-300">
              Complete Enterprise Platform?
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-8

              max-w-3xl

              text-xl
              leading-9

              text-slate-300
            "
          >
            OpenMarTech AI demonstrates a production-inspired Enterprise AI
            ecosystem covering Data Engineering, Streaming Analytics,
            Lakehouse Architecture, Responsible AI, MLOps and Executive
            Intelligence.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-12

              flex
              flex-col
              items-center
              justify-center

              gap-5

              sm:flex-row
            "
          >

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-3

                rounded-2xl

                bg-blue-600

                px-8
                py-5

                text-lg
                font-semibold

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-blue-500
                hover:shadow-2xl
              "
            >
              Contact Me

              <Mail size={18} />

            </Link>

            <Link
              href="https://github.com/rakeshjillella/openmartech-ai"
              target="_blank"
              className="
                inline-flex
                items-center
                gap-3

                rounded-2xl

                border
                border-white/20

                bg-white/10

                px-8
                py-5

                text-lg
                font-semibold

                backdrop-blur

                transition-all
                duration-300

                hover:bg-white/20
              "
            >
              View Source Code

              <FaGithub size={18} />

            </Link>

          </div>

          {/* Quick Stats */}

          <div
            className="
              mt-20

              grid
              gap-8

              md:grid-cols-3
            "
          >

            <div>

              <h3 className="text-5xl font-black">
                15+
              </h3>

              <p className="mt-3 text-slate-300">
                Enterprise Components
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-black">
                18+
              </h3>

              <p className="mt-3 text-slate-300">
                Integrated Technologies
              </p>

            </div>

            <div>

              <h3 className="text-5xl font-black">
                100%
              </h3>

              <p className="mt-3 text-slate-300">
                Open Source Architecture
              </p>

            </div>

          </div>

          <Link
            href="/architecture"
            className="
              mt-16

              inline-flex
              items-center
              gap-3

              text-lg
              font-semibold

              text-blue-300

              transition-all

              hover:gap-4
            "
          >
            Explore Enterprise Architecture

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>

  );

}