import type { Metadata } from "next";
import { ApproachSection } from "@/components/sections/approach-section";
import { AboutCta } from "@/components/sections/about-cta";
import { AboutHero } from "@/components/sections/about-hero";
import { CauseSection } from "@/components/sections/cause-section";
import { MissionVisionSection } from "@/components/sections/mission-vision-section";
import { TeamSection } from "@/components/sections/team-section";
import { WhyPanchayatSection } from "@/components/sections/why-panchayat-section";

export const metadata: Metadata = {
  title: "About PRC",
  description: "Understand PRC's Panchayat-centred vision, mission, cause and leadership.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyPanchayatSection />
      <CauseSection />
      <MissionVisionSection />
      <ApproachSection />
      <TeamSection />
      <AboutCta />
    </>
  );
}
