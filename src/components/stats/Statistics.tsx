import Container from "@/components/ui/Container";
import StatisticCard from "./StatisticCard";
import { statistics } from "@/data/site";

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb20,transparent_35%),radial-gradient(circle_at_bottom_right,#06b6d420,transparent_35%)]" />

      <Container>

        <div className="relative z-10">

          {/* Header */}

          <div className="mx-auto mb-20 max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-blue-800 bg-blue-900/30 px-5 py-2 text-sm font-semibold text-blue-300">
              Enterprise Scale
            </span>

            <h2 className="mt-8 text-5xl font-black tracking-tight text-white md:text-6xl">
              Platform By The Numbers
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
              Built using enterprise-grade cloud-native technologies,
              modern AI engineering practices, and production-ready
              architecture patterns.
            </p>

          </div>

          {/* Statistics */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {statistics.map((stat) => (

              <div
                key={stat.label}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-800
                  bg-slate-900
                  p-8
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-500
                  hover:shadow-blue-500/20
                  hover:shadow-2xl
                "
              >
                <StatisticCard {...stat} />
              </div>

            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}