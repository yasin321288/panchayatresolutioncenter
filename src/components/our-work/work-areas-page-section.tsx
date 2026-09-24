import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function WorkAreasPageSection() {
	return (
		<Section>
			<Container>
				<div className="flex flex-col gap-5 border-b border-[var(--color-border)] pb-9 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<Eyebrow>Highlighted Activities</Eyebrow>
						<h2 className="mt-5 max-w-2xl text-[var(--color-primary-dark)]">Four ways awareness meets participation.</h2>
					</div>
					<p className="max-w-xs leading-7 text-[var(--color-muted)]">Source-listed highlights from PRC&apos;s direction: dialogue, bootcamp, awareness and campaigns.</p>
				</div>
				<div className="divide-y divide-[var(--color-border)]">
					{siteContent.workThemes.map((theme, index) => (
						<div key={theme} className="grid gap-4 py-8 sm:grid-cols-[8rem_1fr_auto] sm:items-center sm:py-10">
							<p className="font-serif text-4xl text-[var(--color-primary)]">0{index + 1}</p>
							<h3 className="text-[clamp(2.25rem,5vw,4.5rem)] text-[var(--color-primary-dark)]">{theme}</h3>
							<ArrowUpRight className="text-[var(--color-orange)]" aria-hidden="true" size={26} />
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}