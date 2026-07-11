import Container from "@/components/ui/Container";

import AIHero from "@/components/ai-platform/AIHero";
import AIStats from "@/components/ai-platform/AIStats";
import ArchitectureOverview from "@/components/ai-platform/ArchitectureOverview";
import FeatureGrid from "@/components/ai-platform/FeatureGrid";
import Lifecycle from "@/components/ai-platform/Lifecycle";

export default function AIPlatformPage() {
  return (
    <Container>

      <div className="space-y-12 py-20">

        <AIHero />

        <AIStats />

        <ArchitectureOverview />

        <FeatureGrid />

        <Lifecycle />

      </div>

    </Container>
  );
}