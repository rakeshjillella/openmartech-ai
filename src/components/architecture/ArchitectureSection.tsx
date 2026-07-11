import Container from "@/components/ui/Container";
import ArchitectureStudio from "./studio/ArchitectureStudio";

export default function ArchitectureSection() {
  return (
    <section className="py-24 bg-slate-50">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl font-black">
            Enterprise AI Architecture
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Explore the complete OpenMarTech AI platform architecture,
            including orchestration, streaming, lakehouse, AI/ML,
            Responsible AI, and business intelligence.
          </p>
        </div>

        <ArchitectureStudio />
      </Container>
    </section>
  );
}