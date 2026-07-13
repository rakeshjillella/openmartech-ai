export default function AIPlatformHero() {
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

        px-12
        py-28

        text-white

        shadow-2xl

        dark:border-slate-800
      "
    >

      {/* Background */}

      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl text-center">

        <span
          className="
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
          Enterprise AI Platform
        </span>

        <h1
          className="
            mt-8

            text-6xl
            font-black
            leading-tight

            md:text-7xl
          "
        >
          AI Platform
        </h1>

        <p
          className="
            mx-auto
            mt-8

            max-w-4xl

            text-xl
            leading-9

            text-slate-300
          "
        >
          OpenMarTech AI delivers a complete enterprise-grade AI platform
          combining Data Engineering, Streaming Analytics, Machine Learning,
          Responsible AI, MLOps, Generative AI, LLM Applications and Executive
          Intelligence into one unified architecture.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button
            className="
              rounded-2xl

              bg-blue-600

              px-8
              py-4

              font-semibold

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-blue-500
            "
          >
            Explore Platform
          </button>

          <button
            className="
              rounded-2xl

              border
              border-white/20

              bg-white/10

              px-8
              py-4

              font-semibold

              backdrop-blur

              transition-all

              hover:bg-white/20
            "
          >
            View Architecture
          </button>

        </div>

      </div>

    </section>

  );
}