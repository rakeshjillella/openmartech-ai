import {
  FileText,
  Database,
  Workflow,
  BrainCircuit,
} from "@/lib/icons";

export default function DocumentationHero() {
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
        lg:py-28
      "
    >
      {/* Background */}

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative">

        <span
          className="
            inline-flex
            rounded-full

            border
            border-blue-400/20

            bg-blue-500/10

            px-5
            py-2

            text-sm
            font-semibold

            text-blue-300
          "
        >
          Enterprise Documentation
        </span>

        <h1
          className="
            mt-8

            max-w-5xl

            text-5xl
            font-black
            tracking-tight

            text-white

            lg:text-7xl
          "
        >
          Documentation Center
        </h1>

        <p
          className="
            mt-8

            max-w-3xl

            text-xl
            leading-9

            text-slate-300
          "
        >
          Comprehensive documentation covering architecture,
          enterprise data engineering, AI platform, Responsible AI,
          deployment, APIs and operational best practices for
          OpenMarTech AI.
        </p>

        {/* Stats */}

        <div
          className="
            mt-16

            grid
            gap-6

            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <FileText
              size={34}
              className="text-blue-300"
            />

            <h3 className="mt-6 text-4xl font-black text-white">
              80+
            </h3>

            <p className="mt-3 text-slate-300">
              Documentation Pages
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <Database
              size={34}
              className="text-cyan-300"
            />

            <h3 className="mt-6 text-4xl font-black text-white">
              18
            </h3>

            <p className="mt-3 text-slate-300">
              Enterprise Technologies
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <Workflow
              size={34}
              className="text-indigo-300"
            />

            <h3 className="mt-6 text-4xl font-black text-white">
              12
            </h3>

            <p className="mt-3 text-slate-300">
              Architecture Modules
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <BrainCircuit
              size={34}
              className="text-purple-300"
            />

            <h3 className="mt-6 text-4xl font-black text-white">
              100%
            </h3>

            <p className="mt-3 text-slate-300">
              Responsible AI Ready
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}