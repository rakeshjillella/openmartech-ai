import Container from "../ui/Container";
import { siteConfig, heroStats } from "@/data/site";
import HeroStat from "./HeroStat";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24 lg:py-28 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Background */}
      <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <Container>

        <div className="relative z-10 mx-auto max-w-6xl text-center">

          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-6
              py-2
              text-sm
              font-semibold
              text-blue-700
              shadow-sm
              dark:border-blue-900
              dark:bg-blue-900/30
              dark:text-blue-300
            "
          >
            🚀 Enterprise AI Engineering Portfolio
          </span>

          {/* Heading */}

          <h1
            className="
              mt-10
              text-6xl
              font-black
              tracking-tight
              text-slate-900
              dark:text-white
              md:text-6xl
              lg:text-7xl
            "
          >
            {siteConfig.name}
          </h1>

          {/* Tagline */}

          <h2
            className="
              mt-8
              text-2xl
              font-bold
              text-blue-600
              dark:text-blue-400
              lg:text-3xl
            "
          >
            {siteConfig.tagline}
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-xl
              leading-9
              text-slate-600
              dark:text-slate-400
            "
          >
            {siteConfig.description}
          </p>

          {/* CTA */}

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <a
              href="#platform"
              className="
                inline-flex
                items-center
                rounded-2xl
                bg-blue-600
                px-8
                py-4
                text-lg
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-500
                hover:shadow-2xl
              "
            >
              Explore Platform →
            </a>

            <a
              href="/architecture"
              className="
                inline-flex
                items-center
                rounded-2xl
                border
                border-slate-300
                bg-white
                px-8
                py-4
                text-lg
                font-semibold
                text-slate-700
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500
                hover:shadow-2xl
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-slate-200
              "
            >
              View Architecture
            </a>

          </div>

          {/* Stats */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {heroStats.map((stat) => (

              <div
                key={stat.label}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-2xl
                  dark:border-slate-800
                  dark:bg-slate-900
                "
              >
                <HeroStat
                  number={stat.number}
                  label={stat.label}
                />
              </div>

            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}