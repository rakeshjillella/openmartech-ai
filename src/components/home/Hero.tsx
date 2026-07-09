import Container from "../ui/Container";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <div className="max-w-4xl">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Enterprise AI Platform
          </span>

          <h1 className="mt-6 text-6xl font-bold tracking-tight">
            {siteConfig.name}
          </h1>

          <h2 className="mt-6 text-2xl font-medium text-gray-600">
            {siteConfig.tagline}
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-500">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex gap-4">
            <a
  href="#platform"
  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
>
  Explore Platform
</a>

            <a
  href={siteConfig.github}
  target="_blank"
  className="rounded-xl border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
>
  View on GitHub
</a>
          </div>
        </div>
      </Container>
    </section>
  );
}