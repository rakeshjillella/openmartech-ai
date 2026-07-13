import Container from "@/components/ui/Container";
import TechnologyHero from "@/components/technology/TechnologyHero";
import TechnologyExplorer from "@/components/technology/TechnologyExplorer";

export default function TechnologyPage() {
  return (
    <main
      className="
        bg-slate-50
        transition-colors
        duration-300

        dark:bg-slate-950
      "
    >
      <section className="py-16 lg:py-24">
        <Container>
          <TechnologyHero />
        </Container>
      </section>

      <section className="pb-24 lg:pb-32">
        <Container>
          <TechnologyExplorer />
        </Container>
      </section>
    </main>
  );
}