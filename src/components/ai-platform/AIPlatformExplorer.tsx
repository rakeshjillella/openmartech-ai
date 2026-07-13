"use client";

import AIPlatformStats from "./AIPlatformStats";
import AIPlatformCapabilities from "./AIPlatformCapabilities";
import AIPlatformLifecycle from "./AIPlatformLifecycle";
import AIPlatformServices from "./AIPlatformServices";
import AIPlatformBenefits from "./AIPlatformBenefits";
import AIPlatformIntegrations from "./AIPlatformIntegrations";
import AIPlatformCTA from "./AIPlatformCTA";

export default function AIPlatformExplorer() {

  return (

    <section className="space-y-24">

      <AIPlatformStats />

      <AIPlatformCapabilities />

      <AIPlatformLifecycle />

      <AIPlatformServices />

      <AIPlatformBenefits />

      <AIPlatformIntegrations />

      <AIPlatformCTA />

    </section>

  );

}