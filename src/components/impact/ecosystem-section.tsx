import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function EcosystemSection() {
	return (
		<Section className="bg-[var(--color-surface)]">
			<Container>
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
					<div>
						<Eyebrow>Broader Ecosystem</Eyebrow>
						<h2 className="mt-6 max-w-lg text-[var(--color-primary-dark)]">An ecosystem built around participation.</h2>
						<p className="mt-7 max-w-md leading-7 text-[var(--color-muted)]">These are the ecosystem categories PRC describes. They are not presented here as a verified current partner roster.</p>
					</div>
					<div>
						<div className="flex flex-wrap gap-x-8 gap-y-4 border-y border-[var(--color-primary)]/25 py-8 sm:gap-x-10 sm:gap-y-5">
							{siteContent.impact.ecosystemCategories.map((category, index) => (
								<span key={category} className="text-lg text-[var(--color-primary-dark)] sm:text-xl">
									<span className="mr-2 text-xs font-bold text-[var(--color-orange)]">0{index + 1}</span>
									{category}
								</span>
							))}
						</div>
						<p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">The source describes collaboration with law colleges to train and engage law students in community outreach, welfare assistance, legal aid and mediation awareness. It also describes an autonomous space monitored by PRC for neutrals, awareness drives, Help Desk sessions and resolution sessions for referred cases.</p>
					</div>
				</div>
			</Container>
		</Section>
	);
}