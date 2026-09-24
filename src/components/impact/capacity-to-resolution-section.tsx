import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

const dimensions = [
	"Panchayats",
	"Information",
	"Capacity",
	"Legal / administrative support",
	"Community participation",
	"Resolution",
];

export function CapacityToResolutionSection() {
	return (
		<Section className="bg-[var(--color-primary-dark)] text-[var(--color-background)]">
			<Container>
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
					<div>
						<Eyebrow className="text-[var(--color-surface)]">From Capacity to Resolution</Eyebrow>
						<h2 className="mt-6 max-w-lg text-[var(--color-background)]">A vision held across connected dimensions.</h2>
						<p className="mt-7 max-w-md text-lg leading-8 text-white/70">PRC&apos;s vision brings together these elements as part of a stronger grassroots dispute-resolution ecosystem.</p>
					</div>
					<div className="grid border-y border-white/25 sm:grid-cols-2">
						{dimensions.map((dimension, index) => (
							<div key={dimension} className="relative border-b border-white/25 py-7 sm:px-7 sm:nth-[2n+1]:border-r lg:py-8">
								<p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-orange)]">0{index + 1}</p>
								<p className={index === dimensions.length - 1 ? "mt-4 font-serif text-3xl text-[var(--color-surface)]" : "mt-4 text-xl text-white/80"}>{dimension}</p>
								{index < dimensions.length - 1 ? <span className="absolute bottom-[-0.6rem] left-7 z-10 h-5 border-l border-[var(--color-orange)] sm:left-7" aria-hidden="true" /> : null}
							</div>
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
}