import type { Metadata } from "next";
import { CapacityToResolutionSection } from "@/components/impact/capacity-to-resolution-section";
import { EcosystemSection } from "@/components/impact/ecosystem-section";
import { ImpactCta } from "@/components/impact/impact-cta";
import { ImpactHero } from "@/components/impact/impact-hero";
import { StatedMilestonesSection } from "@/components/impact/stated-milestones-section";
import { WhatImpactMeansSection } from "@/components/impact/what-impact-means-section";

export const metadata: Metadata = {
  title: "Our Commitment",
  description: "Explore PRC's stated yearly milestones and broader grassroots resolution direction.",
};

export default function ImpactPage() {
  return (
    <>
      <ImpactHero />
      <WhatImpactMeansSection />
      <StatedMilestonesSection />
      <CapacityToResolutionSection />
      <EcosystemSection />
      <ImpactCta />
    </>
  );
}
