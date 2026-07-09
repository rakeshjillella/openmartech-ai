import Container from "../ui/Container";
import { siteConfig, heroStats } from "@/data/site";
import HeroStat from "./HeroStat";

export default function Hero() {
  return (
    /* 1. Added explicit z-0 to the section wrapper */
    <section className="relative z-0 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-28">

      {/* Background Glows */}
      {/* 2. Added -z-10 to both glow wrappers to forcefully lock them behind your text and stats */}
      <div className="absolute -z-10 left-20 top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
      <div className="absolute -z-10 right-20 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <Container>
        <div className="relative z-10 max-w-4xl">
          {/* Badge */}
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Enterprise AI Platform
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-6xl font-bold tracking-tight text-slate-900">
            {siteConfig.name}
          </h1>

          {/* Tagline */}
          <h2 className="mt-6 text-2xl font-medium text-slate-700">
            {siteConfig.tagline}
          </h2>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            {siteConfig.description}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#platform"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              Explore Platform
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition duration-300 hover:bg-slate-100 hover:shadow-lg"
            >
              View on GitHub
            </a>
          </div>

          {/* Hero Statistics */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {heroStats.map((stat) => (
              <HeroStat
                key={stat.label}
                {...stat}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}