import ResponsibleAIHero from "./ResponsibleAIHero";
import ResponsibleAICard from "./ResponsibleAICard";
import ResponsibleAIDashboard from "./ResponsibleAIDashboard";
import GovernanceChecklist from "./GovernanceChecklist";
import ComplianceSection from "./ComplianceSection";

import { responsibleAI } from "@/data/responsibleAI";

export default function ResponsibleAIExplorer() {
  return (
    <div className="space-y-24">
      <ResponsibleAIHero />

      <section>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {responsibleAI.map((item) => (
            <ResponsibleAICard
              key={item.title}
              title={item.title}
              value={item.value}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <ResponsibleAIDashboard />

      <GovernanceChecklist />

      <ComplianceSection />
    </div>
  );
}