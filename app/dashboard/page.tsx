import Container from "@/components/ui/Container";

import DashboardHero from "@/components/dashboard/DashboardHero";
import KPICards from "@/components/dashboard/KPICards";
import SystemStatus from "@/components/dashboard/SystemStatus";
import ResponsibleAIStatus from "@/components/dashboard/ResponsibleAIStatus";

export default function DashboardPage() {
  return (
    <Container>

      <div className="space-y-10 py-20">

        <DashboardHero />

        <KPICards />

        <SystemStatus />

        <ResponsibleAIStatus />

      </div>

    </Container>
  );
}