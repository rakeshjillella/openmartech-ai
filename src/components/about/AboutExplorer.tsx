import AboutHero from "./AboutHero";
import AboutIntroduction from "./AboutIntroduction";
import CareerTimeline from "./CareerTimeline";
import Vision from "./Vision";
import Mission from "./Mission";
import Stats from "./Stats";
import EnterpriseCapabilities from "./EnterpriseCapabilities";
import TechnologyExpertise from "./TechnologyExpertise";
import ProfessionalAchievements from "./ProfessionalAchievements";
import EnterpriseCTA from "@/components/cta/EnterpriseCTA";

export default function AboutExplorer() {
  return (
    <>
      <AboutHero />

      <AboutIntroduction />

      <EnterpriseCapabilities />

      <TechnologyExpertise />

      <CareerTimeline />

      <ProfessionalAchievements />

      <Mission />

      <Vision />

      <Stats />

      <EnterpriseCTA />
    </>
  );
}