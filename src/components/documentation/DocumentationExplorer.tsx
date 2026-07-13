import DocumentationHero from "./DocumentationHero";
import DocumentationQuickStart from "./DocumentationQuickStart";
import DocumentationGuides from "./DocumentationGuides";
import DocumentationArchitecture from "./DocumentationArchitecture";
import DocumentationAPI from "./DocumentationAPI";
import DocumentationDeployment from "./DocumentationDeployment";
import DocumentationBestPractices from "./DocumentationBestPractices";
import DocumentationFAQ from "./DocumentationFAQ";
import DocumentationCTA from "./DocumentationCTA";

export default function DocumentationExplorer() {
  return (
    <section className="space-y-32">

      <DocumentationHero />

      <DocumentationQuickStart />

      <DocumentationGuides />

      <DocumentationArchitecture />

      <DocumentationAPI />

      <DocumentationDeployment />

      <DocumentationBestPractices />

      <DocumentationFAQ />

      <DocumentationCTA />

    </section>
  );
}