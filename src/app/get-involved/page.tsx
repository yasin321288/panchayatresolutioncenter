import type { Metadata } from "next";
import { ContactSection } from "@/components/get-involved/contact-section";
import { EcosystemParticipationSection } from "@/components/get-involved/ecosystem-participation-section";
import { GetInvolvedCta } from "@/components/get-involved/get-involved-cta";
import { GetInvolvedHero } from "@/components/get-involved/get-involved-hero";
import { StudentsAcademicSection } from "@/components/get-involved/students-academic-section";
import { WaysToEngageSection } from "@/components/get-involved/ways-to-engage-section";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Connect with the broader PRC resolution ecosystem through source-described forms of participation.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <GetInvolvedHero />
      <EcosystemParticipationSection />
      <WaysToEngageSection />
      <StudentsAcademicSection />
      <ContactSection />
      <GetInvolvedCta />
    </>
  );
}
