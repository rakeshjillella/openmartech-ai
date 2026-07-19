import Link from "next/link";

import {
  ArrowRight,
  ShieldCheck,
  BrainCircuit,
  FaGithub,
  Mail,
} from "@/lib/icons";

export default function ResponsibleAICTA() {
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
        via-slate-900
        to-blue-950

        px-8
        py-20

        text-white

        shadow-2xl

        dark:border-slate-800

        md:px-16
        lg:py-24
      "
    >

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      </div>

      <div className="relative mx-auto max-w-5xl text-center">

        <div
          className="
            mx-auto

            flex
            h-20
            w-20
            items-center
            justify-center

            rounded-full

            bg-white/10

            backdrop-blur
          "
        >

          <ShieldCheck
            size={42}
            className="text-blue-300"
          />

        </div>

        <span
          className="
            mt-8
            inline-flex

            rounded-full

            border
            border-blue-400/20

            bg-blue-500/10

            px-5
            py-2

            text-sm
            font-semibold

            uppercase
            tracking-[0.2em]

            text-blue-300
          "
        >
          Enterprise Responsible AI
        </span>

        <h2
          className="
            mt-8

            text-5xl
            font-black

            leading-tight

            md:text-6xl
          "
        >
          Building Trustworthy
          <span className="block text-blue-400">
            Enterprise AI Systems
          </span>
        </h2>

        <p
          className="
            mx-auto

            mt-8

            max-w-3xl

            text-lg
            leading-9

            text-slate-300
          "
        >
          OpenMarTech AI demonstrates enterprise-grade Responsible AI
          capabilities including Explainability, Fairness, Governance,
          Continuous Monitoring and Executive AI Intelligence using
          production-inspired architecture.
        </p>

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
            href="/architecture"
            className="
              inline-flex
              items-center
              gap-3

              rounded-2xl

              bg-blue-600

              px-8
              py-4

              text-lg
              font-semibold

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-blue-500
              hover:shadow-xl
            "
          >
            Explore Architecture

            <ArrowRight size={20} />

          </Link>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3

              rounded-2xl

              border
              border-white/20

              bg-white/10

              px-8
              py-4

              text-lg
              font-semibold

              backdrop-blur

              transition-all
              duration-300

              hover:border-blue-400
              hover:bg-white/20
            "
          >
            Contact Me
          </Link>

        </div>

      </div>

    </section>

  );
}