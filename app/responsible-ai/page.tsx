import Container from "@/components/ui/Container";

import RAIHero from "@/components/responsible-ai/RAIHero";
import RAIPillars from "@/components/responsible-ai/RAIPillars";
import RAIMonitoring from "@/components/responsible-ai/RAIMonitoring";
import RAIWorkflow from "@/components/responsible-ai/RAIWorkflow";
import ComplianceCards from "@/components/responsible-ai/ComplianceCards";

export default function ResponsibleAIPage() {
  return (
    <Container>

      <div className="space-y-12 py-20">

        <RAIHero />

        <RAIPillars />

        <RAIMonitoring />

        <RAIWorkflow />

        <ComplianceCards />

      </div>

    </Container>
  );
}