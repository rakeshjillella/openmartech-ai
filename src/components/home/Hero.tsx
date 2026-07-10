import Container from "../ui/Container";
import { siteConfig, heroStats } from "@/data/site";
import HeroStat from "./HeroStat";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-32">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <Container>
        <div className="relative z-10 mx-auto max-w-6xl text-center">

          {/* Badge */}

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
              text-blue-700
              shadow-sm
            "
          >
            🚀 Enterprise AI Engineering Portfolio
          </span>

          {/* Title */}

          <h1
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              tracking-tight
              text-slate-900
              md:text-6xl
              lg:text-7xl
            "
          >
            {siteConfig.name}
          </h1>

          {/* Subtitle */}

          <h2 className="mt-6 text-2xl font-semibold text-slate-700 lg:text-3xl">
            {siteConfig.tagline}
          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600 lg:text-xl">
            {siteConfig.description}
          </p>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <a
              href="#platform"
              className="
                inline-flex
                items-center
                rounded-xl
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
                hover:shadow-xl
              "
            >
              Explore Platform →
            </a>

            <a
              href="/architecture"
              className="
                inline-flex
                items-center
                rounded-xl
                border
                border-slate-300
                bg-white
                px-8
                py-4
                font-semibold
                text-slate-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500
                hover:bg-slate-50
                hover:shadow-xl
              "
            >
              View Architecture
            </a>

          </div>

          {/* Statistics */}

          <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {heroStats.map((stat) => (
              <HeroStat
                key={stat.label}
                number={stat.number}
                label={stat.label}
              />
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
}