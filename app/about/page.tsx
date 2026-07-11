import Container from "@/components/ui/Container";

import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Stats from "@/components/about/Stats";
import CareerTimeline from "@/components/about/CareerTimeline";
import SkillsGrid from "@/components/about/SkillsGrid";
import Vision from "@/components/about/Vision";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[160px]" />

      <Container>

        <div className="relative z-10 space-y-32 py-28">

          <AboutHero />

          <Mission />

          <Stats />

          <CareerTimeline />

          <SkillsGrid />

          <Vision />

        </div>

      </Container>

    </main>
  );
}