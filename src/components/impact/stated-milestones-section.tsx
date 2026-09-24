import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function StatedMilestonesSection() {
	return (
		<Section id="stated-milestones">
			<Container>
				<div className="flex flex-col gap-6 border-b border-[var(--color-border)] pb-9 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<Eyebrow>Stated Yearly Milestones</Eyebrow>
						<h2 className="mt-5 max-w-2xl text-[var(--color-primary-dark)]">PRC&apos;s stated commitments.</h2>
					</div>
					<p className="max-w-sm text-sm leading-7 text-[var(--color-muted)]">Targets and yardsticks described by PRC. These figures are not reported as achieved results.</p>
				</div>
				<div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
					{siteContent.statedMilestones.map((milestone, index) => (
						<div key={milestone.label} className={`border-b border-[var(--color-border)] py-10 lg:py-14 ${index === 0 ? "lg:pr-10" : "lg:px-10"}`}>
							<p className="font-serif text-[clamp(3rem,5.5vw,5.5rem)] leading-none text-[var(--color-primary)]">{milestone.value}</p>
							<p className="mt-5 max-w-xs text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-primary-dark)]">{milestone.label}</p>
							<p className="mt-3 text-xs text-[var(--color-muted)]">Stated commitment</p>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}