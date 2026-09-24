import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ImagePlaceholder } from "@/components/sections/image-placeholder";
import { Section } from "@/components/ui/section";

const anchors = [
	{
		name: "People",
		copy: "Communities are central to collective dialogue and inclusive village governance.",
	},
	{
		name: "Problem",
		copy: "Local problems and disputes need accessible, participatory avenues for resolution.",
	},
];

export function WhyPanchayatSection() {
	return (
		<Section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
			<Container>
				<div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
					<div>
						<Eyebrow>Why Panchayat?</Eyebrow>
						<p className="mt-8 font-serif text-[clamp(4rem,10vw,9rem)] leading-[0.82] text-[var(--color-primary-dark)]">Panchayat</p>
						<ImagePlaceholder className="mt-12 min-h-64" label="Developer placeholder: Panchayat dialogue photograph" />
					</div>
					<div className="flex flex-col justify-between gap-12">
						<p className="max-w-2xl text-[clamp(1.4rem,2.5vw,2.2rem)] leading-tight text-[var(--color-primary-dark)]">
							{siteContent.about.panchayat.description}
						</p>
						<div className="grid gap-0 border-t border-[var(--color-primary)]/25 sm:grid-cols-2">
							{anchors.map((anchor, index) => (
								<div key={anchor.name} className="border-b border-[var(--color-primary)]/25 py-7 sm:px-7 sm:first:pl-0 sm:last:pr-0 sm:last:border-l">
									<p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">0{index + 2}</p>
									<h2 className="mt-4 text-4xl text-[var(--color-primary-dark)]">{anchor.name}</h2>
									<p className="mt-3 leading-7 text-[var(--color-muted)]">{anchor.copy}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}