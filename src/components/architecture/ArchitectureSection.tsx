import Container from "@/components/ui/Container";
import ArchitectureCanvas from "./canvas/ArchitectureCanvas";
import ArchitectureExplorer from "./ArchitectureExplorer";

export default function ArchitectureSection() {
  return (
    <section
      id="architecture"
      className="bg-white py-28"
    >
      <Container>

        <div className="mx-auto mb-20 max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-blue-600">
            Enterprise Architecture
          </p>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            Production-Inspired AI Platform
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            OpenMarTech AI combines modern data engineering,
            machine learning,
            Responsible AI,
            and Generative AI into a unified enterprise platform.
          </p>

        </div>

        <ArchitectureExplorer />

      </Container>
    </section>
  );
}