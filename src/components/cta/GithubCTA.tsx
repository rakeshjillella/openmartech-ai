import Container from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export default function GithubCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-5xl font-bold">
            Explore the Complete Project
          </h2>

          <p className="mt-6 text-xl text-blue-100">
            View the complete source code, enterprise architecture,
            documentation, and implementation on GitHub.
          </p>

          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-lg transition hover:scale-105"
          >
            View on GitHub
          </a>

        </div>

      </Container>

    </section>
  );
}