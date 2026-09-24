import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function WaysToEngageSection() {
	return (
		<Section>
			<Container>
				<div className="flex flex-col gap-5 border-b border-[var(--color-border)] pb-9 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<Eyebrow>Ways to Engage</Eyebrow>
						<h2 className="mt-5 max-w-2xl text-[var(--color-primary-dark)]">Participation takes many forms.</h2>
					</div>
					<p className="max-w-sm leading-7 text-[var(--color-muted)]">Activities and settings described in the PRC source, not formal sign-up programs.</p>
				</div>
				<div className="grid gap-0 md:grid-cols-2">
					{siteContent.getInvolved.engagementAreas.map((area, index) => (
						<div key={area} className="group flex min-h-36 items-start justify-between gap-5 border-b border-[var(--color-border)] py-8 sm:min-h-40 sm:py-10 md:px-8 md:first:pl-0 md:nth-[2n+1]:border-r md:nth-[2n+1]:pl-0">
							<div className="flex gap-5">
								<span className="font-serif text-3xl text-[var(--color-primary)]">0{index + 1}</span>
								<p className="max-w-xs text-2xl text-[var(--color-primary-dark)]">{area}</p>
							</div>
							<span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-orange)] transition-transform group-hover:scale-150" aria-hidden="true" />
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}