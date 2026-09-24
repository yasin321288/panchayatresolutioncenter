import type { Metadata } from "next";
import { ApproachSection } from "@/components/sections/approach-section";
import { ChallengeSection } from "@/components/sections/challenge-section";
import { CommitmentSection } from "@/components/sections/commitment-section";
import { GroundStoriesSection } from "@/components/sections/ground-stories-section";
import { HomeCta } from "@/components/sections/home-cta";
import { HomeHero } from "@/components/sections/home-hero";
import { PanchayatSection } from "@/components/sections/panchayat-section";
import { WorkAreasSection } from "@/components/sections/work-areas-section";

export const metadata: Metadata = {
  title: "Panchayat Resolution Centre",
  description: "Explore PRC's approach to grassroots governance and dispute resolution in rural India.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <ChallengeSection />
      <PanchayatSection />
      <ApproachSection />
      <WorkAreasSection />
      <GroundStoriesSection />
      <CommitmentSection />
      <HomeCta />
    </>
  );
}
