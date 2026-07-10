import Container from "@/components/ui/Container";
import ArchitectureExplorer from "@/components/architecture/ArchitectureExplorer";

export default function ArchitecturePage() {
  return (
    <main className="py-24">

      <Container>

        <div className="mb-20 text-center">

          <h1 className="text-6xl font-bold text-slate-900">
            Enterprise Architecture
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Explore the end-to-end architecture powering OpenMarTech AI,
            from enterprise data ingestion through AI Platform Engineering
            to Executive Decision Intelligence.
          </p>

        </div>

        <ArchitectureExplorer />

      </Container>

    </main>
  );
}