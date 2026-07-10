import Container from "@/components/ui/Container";
import TechnologyBadge from "./TechnologyBadge";
import { technologies } from "@/data/technologyList";

export default function TechnologyStack() {
  return (
    <section className="bg-slate-50 py-24">

      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Technology Ecosystem
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Powered by Modern Open Source Technologies
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            OpenMarTech AI integrates industry-leading open-source
            technologies for Enterprise Data Engineering,
            Lakehouse Architecture,
            AI Platform Engineering,
            Responsible AI,
            and Executive Decision Intelligence.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {technologies.map((tech) => (
            <TechnologyBadge
              key={tech.name}
              {...tech}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}