import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="py-24">

        <Container>

          <h1 className="text-6xl font-bold">
            Coming Soon
          </h1>

        </Container>

      </main>

    </>
  );
}