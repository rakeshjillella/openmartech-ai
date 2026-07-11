import MetricCard from "@/components/ui/MetricCard";
import FeatureGrid from "@/components/ui/FeatureGrid";

export default function ArchitectureMetrics() {
  return (

    <section>

      <FeatureGrid columns={4}>

        <MetricCard
          title="Components"
          value="27"
          trend="+2"
        />

        <MetricCard
          title="Connections"
          value="42"
          trend="Stable"
        />

        <MetricCard
          title="AI Models"
          value="4"
          trend="Production"
        />

        <MetricCard
          title="Availability"
          value="99.98%"
          trend="Healthy"
        />

      </FeatureGrid>

    </section>

  );
}