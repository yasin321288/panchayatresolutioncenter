import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

const directions = [
	"Grassroots governance",
	"Access to entitlements",
	"Community dialogue",
	"People-centred resolution",
];

export function FromAwarenessSection() {
	return (
		<Section id="from-awareness" className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
			<Container>
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
					<div>
						<Eyebrow>From Awareness to Action</Eyebrow>
						<h2 className="mt-6 max-w-lg text-[var(--color-primary-dark)]">A wider ecosystem for people, Panchayats and resolution.</h2>
					</div>
					<p className="max-w-2xl text-[clamp(1.35rem,2.5vw,2.1rem)] leading-tight text-[var(--color-primary-dark)]">
						PRC&apos;s work sits across the connected concerns of grassroots governance, access to entitlements, community dialogue and people-centred resolution mechanisms.
					</p>
				</div>
				<div className="mt-20 grid border-t border-[var(--color-primary)]/25 sm:grid-cols-2 lg:grid-cols-4">
					{directions.map((direction, index) => (
						<div key={direction} className="border-b border-[var(--color-primary)]/25 py-7 sm:px-7 sm:first:pl-0 lg:border-b-0 lg:border-r lg:py-8 lg:last:border-r-0 lg:last:pr-0">
							<p className="font-serif text-4xl text-[var(--color-primary)]">0{index + 1}</p>
							<h3 className="mt-8 max-w-[12rem] text-2xl text-[var(--color-primary-dark)]">{direction}</h3>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}