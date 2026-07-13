export default function ResponsibleAIHero() {
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
        to-emerald-950

        px-8
        py-24

        text-white

        shadow-2xl

        dark:border-slate-800

        lg:px-16
        lg:py-32
      "
    >
      {/* Background */}

      <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-emerald-500/20 blur-[130px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl text-center">

        <span
          className="
            inline-flex
            rounded-full

            border
            border-emerald-400/20

            bg-emerald-500/10

            px-5
            py-2

            text-sm
            font-semibold

            uppercase
            tracking-[0.2em]

            text-emerald-300
          "
        >
          Responsible AI
        </span>

        <h1
          className="
            mt-8

            text-5xl
            font-black

            leading-tight

            md:text-6xl
            xl:text-7xl
          "
        >
          Enterprise
          <span className="block text-emerald-300">
            Responsible AI Platform
          </span>
        </h1>

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
          OpenMarTech AI incorporates Responsible AI principles across
          the complete machine learning lifecycle through explainability,
          fairness, governance, monitoring, transparency and enterprise
          compliance.
        </p>

      </div>
    </section>
  );
}