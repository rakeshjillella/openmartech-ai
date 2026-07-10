import Container from "@/components/ui/Container";

import DashboardHero from "@/components/dashboard/DashboardHero";
import DashboardKPIs from "@/components/dashboard/DashboardKPIs";
import RevenueTrend from "@/components/dashboard/RevenueTrend";
import MarketingPerformance from "@/components/dashboard/MarketingPerformance";
import AIInsightCards from "@/components/dashboard/AIInsightCards";
import ExecutiveSummary from "@/components/dashboard/ExecutiveSummary";
import PlatformHealth from "@/components/dashboard/PlatformHealth";
import GovernanceStatus from "@/components/dashboard/GovernanceStatus";

export default function DashboardPage() {
  return (
    <main className="py-24">

      <Container>

        <DashboardHero />

<DashboardKPIs />

<RevenueTrend />

<MarketingPerformance />

<AIInsightCards />

<PlatformHealth />

<GovernanceStatus />

<ExecutiveSummary />

      </Container>

    </main>
  );
}