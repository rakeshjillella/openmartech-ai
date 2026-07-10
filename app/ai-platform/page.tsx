import AIPlatformHero from "@/components/ai-platform/AIPlatformHero";
import PlatformPipeline from "@/components/ai-platform/PlatformPipeline";
import EnterpriseCapabilities from "@/components/ai-platform/EnterpriseCapabilities";
import ProductionReadiness from "@/components/ai-platform/ProductionReadiness";
import DeploymentLifecycle from "@/components/ai-platform/DeploymentLifecycle";

export default function AIPlatformPage() {
  return (
    <main>
      <AIPlatformHero />
      <PlatformPipeline />
      <EnterpriseCapabilities />
      <ProductionReadiness />
      <DeploymentLifecycle />
    </main>
  );
}