import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";
import ArchitectureCanvas from "@/components/architecture/canvas/ArchitectureCanvas";

export default function ArchitecturePage() {
  return (
    <>
      <Navbar />

      <main className="py-24">

        <Container>

          <div className="mb-20 text-center">

            <h1 className="text-6xl font-bold">
              Enterprise Architecture
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Production-inspired enterprise architecture powering
              OpenMarTech AI.
            </p>

          </div>

          <ArchitectureCanvas />

        </Container>

      </main>

    </>
  );
}