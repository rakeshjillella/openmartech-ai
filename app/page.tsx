import Hero from "@/components/home/Hero";
import TechnologyStack from "@/components/technology/TechnologyStack";
import PlatformOverview from "@/components/home/PlatformOverview";
import ArchitectureStudio from "@/components/architecture/studio/ArchitectureStudio";
import Workflow from "@/components/workflow/Workflow";
import GithubCTA from "@/components/cta/GithubCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TechnologyStack />
      <PlatformOverview />
      <ArchitectureStudio />
      <Workflow />
      {/* Removed <Statistics /> to fix duplicate stats issue */}
      <GithubCTA />
    </>
  );
}