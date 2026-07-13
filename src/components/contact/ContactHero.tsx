export default function ContactHero() {
  return (
    <section
      className="
        rounded-[36px]
        bg-gradient-to-r
        from-blue-700
        via-indigo-700
        to-slate-900
        px-10 py-20 lg:px-16 lg:py-24
        text-white
      "
    >
      <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
        Contact
      </span>

      <h1 className="mt-8 text-5xl lg:text-6xl font-black">
        Let&apos;s Build Enterprise AI Together
      </h1>

      <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
        Open to opportunities in Data Engineering,
        AI Platform Engineering,
        Machine Learning,
        Enterprise Architecture,
        and Responsible AI.
      </p>

    </section>
  );
}