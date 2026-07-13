import Container from "@/components/ui/Container";
import ResponsibleAIExplorer from "@/components/responsible-ai/ResponsibleAIExplorer";

export default function ResponsibleAIPage() {
  return (
    <main
      className="
        min-h-screen

        bg-gradient-to-b
        from-white
        via-slate-50
        to-white

        transition-colors
        duration-300

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
      "
    >
      <Container className="py-24 lg:py-32">
        <ResponsibleAIExplorer />
      </Container>
    </main>
  );
}