import DashboardHero from "./DashboardHero";
import DashboardOverview from "./DashboardOverview";
import DashboardMetrics from "./DashboardMetrics";
import DashboardFeatures from "./DashboardFeatures";
import DashboardPreview from "./DashboardPreview";
import DashboardCapabilities from "./DashboardCapabilities";
import DashboardIntegrations from "./DashboardIntegrations";
import DashboardBenefits from "./DashboardBenefits";
import DashboardCTA from "./DashboardCTA";

export default function DashboardExplorer() {
  return (
    <div className="space-y-28 lg:space-y-36">

      <DashboardHero />

      <DashboardOverview />

      <DashboardMetrics />

      <DashboardFeatures />

      <DashboardPreview />

      <DashboardCapabilities />

      <DashboardIntegrations />

      <DashboardBenefits />

      <DashboardCTA />

    </div>
  );
}