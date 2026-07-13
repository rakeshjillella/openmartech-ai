export default function TechnologyHero() {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[36px]

        border
        border-slate-200

        bg-gradient-to-br
        from-blue-700
        via-indigo-700
        to-slate-900

        px-8
        py-20

        shadow-2xl

        transition-all
        duration-300

        dark:border-slate-800

        md:px-14
        lg:px-20
        lg:py-28
      "
    >
      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[130px]" />

      <div className="absolute -right-20 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl text-center">

        <span
          className="
            inline-flex
            items-center
            rounded-full

            border
            border-blue-300/30

            bg-white/10

            px-5
            py-2

            text-sm
            font-semibold

            tracking-wide

            text-blue-100

            backdrop-blur
          "
        >
          Enterprise Technology Stack
        </span>

        <h1
          className="
            mt-8

            text-5xl
            font-black

            tracking-tight

            text-white

            md:text-6xl
            lg:text-7xl
          "
        >
          Technology Explorer
        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-3xl

            text-lg
            leading-8

            text-slate-200

            lg:text-xl
          "
        >
          Discover every technology powering OpenMarTech AI —
          from Streaming, Lakehouse and Data Engineering
          to Responsible AI, MLOps and Enterprise Intelligence.
        </p>

      </div>

    </section>
  );
}