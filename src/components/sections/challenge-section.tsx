import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

const contextFigures = [
	{ value: "90 crore", label: "people in India's villages" },
	{ value: "80 crore", label: "population receiving ration" },
	{ value: "2.68 lakh", label: "Gram Panchayats" },
	{ value: "6.65 lakh", label: "villages" },
];

export function ChallengeSection() {
	return (
		<Section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
			<Container>
				<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
					<div>
						<Eyebrow>The Challenge</Eyebrow>
						<h2 className="mt-6 max-w-xl text-[var(--color-primary-dark)]">When access to redress is out of reach, inequality grows.</h2>
					</div>
					<div className="space-y-6 text-lg leading-8 text-[var(--color-muted)]">
						<p>
							The absence of adequate grassroots grievance-redressal mechanisms creates greater scope for corruption, places additional burdens on the local judiciary, and perpetuates inequalities in the distribution of resources.
						</p>
						<p>
							PRC works in the space where information, legal aid, welfare schemes and community dialogue meet.
						</p>
					</div>
				</div>
				<div className="mt-20 grid gap-0 border-t border-[var(--color-primary)]/25 sm:grid-cols-2 lg:grid-cols-4">
					{contextFigures.map((figure) => (
						<div key={figure.value} className="border-b border-[var(--color-primary)]/25 py-7 sm:border-r sm:px-7 lg:border-b-0 first:sm:pl-0 last:border-r-0">
							<p className="font-serif text-4xl text-[var(--color-primary-dark)] sm:text-5xl">{figure.value}</p>
							<p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">{figure.label}</p>
							<p className="mt-4 text-xs text-[var(--color-muted)]">Source-provided context</p>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}