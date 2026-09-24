import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function CauseSection() {
	return (
		<Section className="bg-[var(--color-primary-dark)] text-[var(--color-background)]">
			<Container>
				<div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
					<div>
						<Eyebrow className="text-[var(--color-surface)]">Our Cause</Eyebrow>
						<h2 className="mt-6 max-w-lg text-[var(--color-background)]">{siteContent.about.cause.title}</h2>
					</div>
					<div className="space-y-8 border-t border-white/25 pt-8">
						<p className="max-w-2xl text-[clamp(1.35rem,2.5vw,2.1rem)] leading-tight text-[var(--color-background)]">
							{siteContent.about.cause.description}
						</p>
						<div className="border-l-2 border-[var(--color-orange)] pl-6">
							<p className="max-w-xl text-lg leading-8 text-white/70">{siteContent.about.cause.response}</p>
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}