"use client";

import ResponsibleAIHero from "./ResponsibleAIHero";
import ResponsibleAIStats from "./ResponsibleAIStats";
import ResponsibleAIPillars from "./ResponsibleAIPillars";
import ResponsibleAILifecycle from "./ResponsibleAILifecycle";
import ResponsibleAIExplainability from "./ResponsibleAIExplainability";
import ResponsibleAIBias from "./ResponsibleAIBias";
import ResponsibleAIMonitoring from "./ResponsibleAIMonitoring";
import ResponsibleAIGovernance from "./ResponsibleAIGovernance";
import ResponsibleAIWorkflow from "./ResponsibleAIWorkflow";
import ResponsibleAICTA from "./ResponsibleAICTA";

export default function ResponsibleAIExplorer() {
  return (

    <section className="space-y-24">

      <ResponsibleAIHero />

      <ResponsibleAIStats />

      <ResponsibleAIPillars />

      <ResponsibleAILifecycle />

      <ResponsibleAIExplainability />

      <ResponsibleAIBias />

      <ResponsibleAIMonitoring />

      <ResponsibleAIGovernance />

      <ResponsibleAIWorkflow />

      <ResponsibleAICTA />

      {/* Remaining sections go here */}

    </section>

  );
}