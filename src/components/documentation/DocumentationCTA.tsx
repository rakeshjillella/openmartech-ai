import Link from "next/link";

import {
  ArrowRight,
  FileText,
  FaGithub,
  Mail,
} from "@/lib/icons";

export default function DocumentationCTA() {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[40px]

        border
        border-slate-200

        bg-gradient-to-br
        from-blue-700
        via-indigo-700
        to-slate-900

        px-8
        py-20

        shadow-2xl

        dark:border-slate-800

        lg:px-20
        lg:py-24
      "
    >
      {/* Background */}

      <div className="absolute -left-32 top-0 h-[340px] w-[340px] rounded-full bg-cyan-400/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[340px] w-[340px] rounded-full bg-purple-500/20 blur-[120px]" />

      <div
        className="
          relative

          mx-auto
          max-w-5xl

          text-center
        "
      >
        <div
          className="
            mx-auto

            flex
            h-20
            w-20

            items-center
            justify-center

            rounded-3xl

            bg-white/10

            backdrop-blur
          "
        >
          <FileText
            size={38}
            className="text-white"
          />
        </div>

        <h2
          className="
            mt-10

            text-4xl
            font-black
            tracking-tight

            text-white

            lg:text-6xl
          "
        >
          Ready to Explore the Platform?
        </h2>

        <p
          className="
            mx-auto
            mt-8
            max-w-3xl

            text-xl
            leading-9

            text-blue-100
          "
        >
          Dive deeper into the enterprise architecture, AI platform,
          Responsible AI framework and executive dashboards that power
          OpenMarTech AI.
        </p>

        <div
          className="
            mt-14

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

              bg-white

              px-8
              py-4

              font-semibold

              text-slate-900

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Explore Architecture

            <ArrowRight size={18} />
          </Link>

          <Link
            href="https://github.com/"
            target="_blank"
            className="
              inline-flex
              items-center
              gap-3

              rounded-2xl

              border
              border-white/30

              bg-white/10

              px-8
              py-4

              font-semibold

              text-white

              backdrop-blur

              transition-all
              duration-300

              hover:bg-white/20
            "
          >
            <FaGithub size={20} />

            GitHub
          </Link>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3

              rounded-2xl

              border
              border-white/30

              bg-white/10

              px-8
              py-4

              font-semibold

              text-white

              backdrop-blur

              transition-all
              duration-300

              hover:bg-white/20
            "
          >
            <Mail size={20} />

            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}