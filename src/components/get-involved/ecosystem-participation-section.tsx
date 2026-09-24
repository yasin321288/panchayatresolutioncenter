import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function EcosystemParticipationSection() {
	return (
		<Section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
			<Container>
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
					<div>
						<Eyebrow>An Ecosystem of Participation</Eyebrow>
						<h2 className="mt-6 max-w-lg text-[var(--color-primary-dark)]">Many kinds of participation, held in common.</h2>
						<p className="mt-7 max-w-md leading-7 text-[var(--color-muted)]">These are source-listed ecosystem categories, not a verified current partner roster or a set of active recruitment programs.</p>
					</div>
					<div className="border-y border-[var(--color-primary)]/25">
						{siteContent.impact.ecosystemCategories.map((category, index) => (
							<div key={category} className="flex items-center gap-6 border-b border-[var(--color-primary)]/25 py-5 last:border-b-0 sm:py-6">
								<span className="font-serif text-3xl text-[var(--color-primary)]">0{index + 1}</span>
								<p className="text-xl text-[var(--color-primary-dark)] sm:text-2xl">{category}</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
}