import Link from "next/link";

import {
  ArrowRight,
  LayoutDashboard,
  FaGithub,
  Mail,
} from "@/lib/icons";

export default function DashboardCTA() {
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

        shadow-2xl

        dark:border-slate-800

        lg:px-20
        lg:py-24
      "
    >
      {/* Background */}

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl text-center">

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
          <LayoutDashboard
            size={42}
            className="text-blue-300"
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
          Enterprise Intelligence Starts Here
        </h2>

        <p
          className="
            mx-auto
            mt-8

            max-w-3xl

            text-lg
            leading-9

            text-slate-300

            lg:text-xl
          "
        >
          Discover how OpenMarTech AI unifies enterprise data,
          streaming, AI, Responsible AI and executive dashboards
          into one modern decision intelligence platform.
        </p>

        {/* Buttons */}

        <div
          className="
            mt-12

            flex
            flex-col
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
              justify-center
              gap-3

              rounded-2xl

              bg-blue-600

              px-8
              py-4

              text-lg
              font-semibold
              text-white

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-blue-700
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
              justify-center
              gap-3

              rounded-2xl

              border
              border-white/20

              bg-white/10

              px-8
              py-4

              text-lg
              font-semibold

              text-white

              backdrop-blur

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-white/20
            "
          >
            <Mail size={20} />

            Contact Us
          </Link>
        </div>

        {/* GitHub */}

        <div className="mt-14">

          <Link
            href="https://github.com/"
            target="_blank"
            className="
              inline-flex
              items-center
              gap-3

              text-slate-300

              transition-colors
              duration-300

              hover:text-white
            "
          >
            <FaGithub size={22} />

            View Project Repository
          </Link>

        </div>

      </div>
    </section>
  );
}