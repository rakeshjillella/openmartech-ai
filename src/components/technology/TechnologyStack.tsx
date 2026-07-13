import Container from "@/components/ui/Container";
import TechnologyLogo from "./TechnologyLogo";
import { technologyData } from "@/data/technologyData";

export default function TechnologyStack() {
  return (
    <section
      id="technology"
      className="
        relative
        overflow-hidden

        bg-slate-50

        py-20

        transition-colors
        duration-300

        dark:bg-slate-950

        lg:py-28
      "
    >
      {/* Background decoration */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <Container>
        {/* ========================================================= */}
        {/* Section Heading */}
        {/* ========================================================= */}

        <div className="relative mx-auto mb-20 max-w-4xl text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full

              bg-blue-100

              px-5
              py-2

              text-sm
              font-semibold
              uppercase
              tracking-[0.20em]

              text-blue-700

              dark:bg-blue-900/30
              dark:text-blue-300
            "
          >
            Enterprise Stack
          </span>

          <h2
            className="
              mt-6

              text-4xl
              font-black
              tracking-tight

              text-slate-900

              dark:text-white

              md:text-5xl
              lg:text-6xl
            "
          >
            Enterprise Technology Stack
          </h2>

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
            OpenMarTech AI is powered by modern enterprise technologies
            spanning orchestration, streaming, lakehouse architecture,
            machine learning, observability, Responsible AI and executive
            intelligence.
          </p>
        </div>

        {/* ========================================================= */}
        {/* Technology Grid */}
        {/* ========================================================= */}

        <div
          className="
            relative

            grid

            grid-cols-2
            gap-5

            sm:grid-cols-3

            lg:grid-cols-4

            xl:grid-cols-6
          "
        >
          {technologyData.map((tech) => (
            <TechnologyLogo
              key={tech.id}
              name={tech.name}
              logo={tech.logo}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}