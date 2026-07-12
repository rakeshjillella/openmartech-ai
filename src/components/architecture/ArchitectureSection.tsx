import Container from "@/components/ui/Container";
import ArchitectureStudio from "./studio/ArchitectureStudio";

export default function ArchitectureSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-28 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />

      <Container>

        <div className="relative z-10 mb-20 text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Enterprise Architecture
          </span>

          <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900 dark:text-white lg:text-6xl">
            Interactive Platform Architecture
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600 dark:text-slate-400">
            Explore every layer of OpenMarTech AI including orchestration,
            streaming, lakehouse, AI engineering, Responsible AI,
            observability and executive analytics.
          </p>

        </div>

        <ArchitectureStudio />

      </Container>

    </section>
  );
}