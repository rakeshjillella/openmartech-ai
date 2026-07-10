import Container from "@/components/ui/Container";
import TechnologyLogo from "./TechnologyLogo";
import { technologyData } from "@/data/technologyData";

export default function TechnologyStack() {
  return (
    <section id="technology" className="py-24 bg-slate-50">
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <h2 className="text-5xl font-bold">
            Enterprise Technology Stack
          </h2>

          <p className="mt-6 text-xl text-slate-600">
            Modern enterprise-grade technologies powering OpenMarTech AI.
          </p>

        </div>

        <div className="flex flex-wrap justify-center gap-5">

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