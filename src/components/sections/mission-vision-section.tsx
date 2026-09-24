import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function MissionVisionSection() {
	return (
		<Section>
			<Container width="narrow">
				<div className="space-y-16 sm:space-y-24">
					<div>
						<Eyebrow>Mission</Eyebrow>
						<p className="mt-6 font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] text-[var(--color-primary-dark)]">{siteContent.mission}</p>
					</div>
					<div className="border-t border-[var(--color-border)] pt-10 sm:ml-24 sm:pt-14">
						<Eyebrow>Vision</Eyebrow>
						<p className="mt-6 font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] text-[var(--color-primary-dark)]">{siteContent.vision}</p>
					</div>
				</div>
			</Container>
		</Section>
	);
}