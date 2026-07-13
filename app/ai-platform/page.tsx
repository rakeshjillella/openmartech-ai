import Container from "@/components/ui/Container";

import AIPlatformHero from "@/components/ai-platform/AIPlatformHero";
import AIPlatformExplorer from "@/components/ai-platform/AIPlatformExplorer";

export default function AIPlatformPage() {
  return (
    <main className="py-24">

      <Container>

        <AIPlatformHero />

        <div className="mt-20">

          <AIPlatformExplorer />

        </div>

      </Container>

    </main>
  );
}