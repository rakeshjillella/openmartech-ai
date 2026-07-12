import Link from "next/link";

export default function GithubCTA() {
  return (
    <section
      className="
        rounded-[36px]
        bg-gradient-to-r
        from-slate-900
        to-slate-800
        p-14
        text-center
        text-white
      "
    >
      <span className="font-semibold uppercase tracking-widest text-blue-400">
        Open Source
      </span>

      <h2 className="mt-6 text-5xl font-black">
        Explore the Complete Source Code
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
        Every component of OpenMarTech AI has been designed using
        modern enterprise engineering practices.
      </p>

      <Link
        href="https://github.com/rakeshjillella/openmartech-ai"
        target="_blank"
        className="
          mt-10
          inline-flex
          rounded-2xl
          bg-blue-600
          px-8
          py-4
          font-semibold
          transition
          hover:bg-blue-700
        "
      >
        View GitHub Repository
      </Link>

    </section>
  );
}