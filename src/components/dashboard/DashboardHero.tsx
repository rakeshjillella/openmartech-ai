import {
  LayoutDashboard,
  BarChart3,
  BrainCircuit,
} from "@/lib/icons";

export default function DashboardHero() {
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

        transition-colors
        duration-300

        dark:border-slate-800

        lg:px-16
        lg:py-28
      "
    >
      {/* Background Glow */}

      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10">

        <span
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-cyan-400/20

            bg-cyan-500/10

            px-5
            py-2

            text-sm
            font-semibold

            text-cyan-300
          "
        >
          <LayoutDashboard size={16} />
          Executive Intelligence
        </span>

        <h1
          className="
            mt-8

            max-w-5xl

            text-5xl
            font-black
            leading-tight

            md:text-6xl
            xl:text-7xl
          "
        >
          Enterprise
          <span className="text-cyan-400"> Analytics </span>
          Dashboard
        </h1>

        <p
          className="
            mt-8

            max-w-3xl

            text-lg
            leading-9

            text-slate-300

            lg:text-xl
          "
        >
          Unified executive dashboards combining operational
          analytics, AI insights, Responsible AI governance,
          model monitoring and enterprise KPIs in a single
          intelligent workspace.
        </p>

        {/* Stats */}

        <div
          className="
            mt-14

            grid

            gap-6

            md:grid-cols-3
          "
        >
          <div className="rounded-3xl bg-white/5 p-6 backdrop-blur">
            <BarChart3
              className="mb-5 text-cyan-400"
              size={32}
            />

            <h3 className="text-4xl font-black">
              30+
            </h3>

            <p className="mt-2 text-slate-300">
              Executive Dashboards
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 p-6 backdrop-blur">
            <BrainCircuit
              className="mb-5 text-cyan-400"
              size={32}
            />

            <h3 className="text-4xl font-black">
              AI
            </h3>

            <p className="mt-2 text-slate-300">
              Decision Intelligence
            </p>
          </div>

          <div className="rounded-3xl bg-white/5 p-6 backdrop-blur">
            <LayoutDashboard
              className="mb-5 text-cyan-400"
              size={32}
            />

            <h3 className="text-4xl font-black">
              Real-time
            </h3>

            <p className="mt-2 text-slate-300">
              Enterprise KPIs
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}