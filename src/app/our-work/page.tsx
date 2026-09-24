import type { Metadata } from "next";
import { ApproachSection } from "@/components/sections/approach-section";
import { FromAwarenessSection } from "@/components/our-work/from-awareness-section";
import { HowWorkConnectsSection } from "@/components/our-work/how-work-connects-section";
import { OurWorkCta } from "@/components/our-work/our-work-cta";
import { OurWorkHero } from "@/components/our-work/our-work-hero";
import { WorkAreasPageSection } from "@/components/our-work/work-areas-page-section";

export const metadata: Metadata = {
  title: "Our Work",
  description: "From awareness to action: PRC's grassroots governance, dialogue and resolution direction.",
};

export default function OurWorkPage() {
  return (
    <>
      <OurWorkHero />
      <FromAwarenessSection />
      <ApproachSection />
      <WorkAreasPageSection />
      <HowWorkConnectsSection />
      <OurWorkCta />
    </>
  );
}
