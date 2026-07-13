import Container from "@/components/ui/Container";
import ArchitectureStudio from "./studio/ArchitectureStudio";

export default function ArchitectureSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-100

        py-20

        transition-colors
        duration-300

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950

        lg:py-28
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -left-40
          top-0

          h-[420px]
          w-[420px]

          rounded-full

          bg-blue-500/10

          blur-[140px]
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0

          h-[420px]
          w-[420px]

          rounded-full

          bg-cyan-500/10

          blur-[140px]
        "
      />

      <Container>

        <div className="relative z-10">

          <div className="mx-auto mb-20 max-w-4xl text-center">

            <span
              className="
                inline-flex
                items-center

                rounded-full

                border
                border-blue-200

                bg-blue-50

                px-5
                py-2

                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]

                text-blue-700

                dark:border-blue-800
                dark:bg-blue-900/30
                dark:text-blue-300
              "
            >
              Interactive Architecture
            </span>

            <h1
              className="
                mt-8

                text-4xl
                font-black
                tracking-tight

                text-slate-900

                md:text-5xl
                lg:text-6xl

                dark:text-white
              "
            >
              Enterprise AI Platform Architecture
            </h1>

            <p
              className="
                mx-auto
                mt-8

                max-w-3xl

                text-lg
                leading-8

                text-slate-600

                dark:text-slate-400
              "
            >
              Explore the complete production-inspired Enterprise AI
              ecosystem including orchestration, streaming,
              lakehouse, machine learning, Responsible AI,
              governance, observability and executive analytics.
            </p>

          </div>

          <ArchitectureStudio />

        </div>

      </Container>
    </section>
  );
}