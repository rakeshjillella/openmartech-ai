import Container from "@/components/ui/Container";
import StatisticCard from "./StatisticCard";
import { statistics } from "@/data/site";

export default function Statistics() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold text-white">
            Platform Statistics
          </h2>

          <p className="mt-6 text-lg text-slate-300">
            Enterprise-scale technologies powering OpenMarTech AI.
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