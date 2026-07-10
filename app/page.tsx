import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TechnologyStack from "@/components/technology/TechnologyStack";
import PlatformOverview from "@/components/home/PlatformOverview";
import ArchitectureSection from "@/components/architecture/ArchitectureSection";
import Workflow from "@/components/workflow/Workflow";
import Statistics from "@/components/stats/Statistics";
import GithubCTA from "@/components/cta/GithubCTA";

export default function Home() {
  return (
    <>

<main>

  <Hero />

  <TechnologyStack />

  <PlatformOverview />

  <ArchitectureSection />

  <Workflow />

  <Statistics />

  <GithubCTA />

</main>
    </>
  );
}