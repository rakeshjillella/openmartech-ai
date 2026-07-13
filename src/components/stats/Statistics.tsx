import Container from "@/components/ui/Container";
import StatisticCard from "./StatisticCard";
import { statistics } from "@/data/site";

export default function Statistics() {
  return (
    <section
      className="
        bg-slate-900
        py-20
        transition-colors
        duration-300
        dark:bg-black
        lg:py-28
      "
    >
      <Container>

        <div className="mx-auto mb-16 max-w-4xl text-center">

          <span
            className="
              inline-flex
              rounded-full
              bg-blue-500/20
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-blue-300
            "
          >
            Platform Scale
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-white
              md:text-5xl
            "
          >
            Enterprise Platform Statistics
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-300
            "
          >
            OpenMarTech AI demonstrates a production-inspired ecosystem
            integrating enterprise data engineering, streaming,
            machine learning, Responsible AI and executive intelligence.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {statistics.map((stat) => (

            <StatisticCard
              key={stat.label}
              {...stat}
            />

          ))}

        </div>

      </Container>
    </section>
  );
}