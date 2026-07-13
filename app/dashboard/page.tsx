import Container from "@/components/ui/Container";

import DashboardExplorer from "@/components/dashboard/DashboardExplorer";

export default function DashboardPage() {
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
        <DashboardExplorer />
      </Container>
    </main>
  );
}