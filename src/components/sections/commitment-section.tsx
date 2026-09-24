import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

const displayTargets = [
	{ value: "10,000", label: "Primary Legal Status" },
	{ value: "1,000", label: "Village Panchayat Drives" },
	{ value: "100", label: "Legal Practitioners" },
	{ value: "1,000", label: "Professional Mediators" },
	{ value: "500", label: "Community Mediators" },
	{ value: "₹10,00,000", label: "Resolution Reward" },
];

export function CommitmentSection() {
	return (
		<Section className="bg-[var(--color-background)]">
			<Container>
				<div className="flex flex-col gap-5 border-b border-[var(--color-border)] pb-8 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<Eyebrow>Our Commitment / Stated yearly milestones</Eyebrow>
						<h2 className="mt-5 text-[var(--color-primary-dark)]">A direction held in view.</h2>
					</div>
					<p className="max-w-xs text-sm leading-6 text-[var(--color-muted)]">Stated yearly milestones. These are commitments, not achieved impact figures.</p>
				</div>
				<div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
					{displayTargets.map((target, index) => {
						const sourceTarget = siteContent.statedCommitments[index];
						return (
							<div key={target.label} className="border-b border-[var(--color-border)] py-9 lg:py-12">
								<p className="font-serif text-[clamp(2.75rem,5vw,5rem)] leading-none text-[var(--color-primary)]">{target.value}</p>
								<p className="mt-4 text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-primary-dark)]">{target.label}</p>
								<p className="mt-2 text-xs text-[var(--color-muted)]">{sourceTarget.label}</p>
							</div>
						);
					})}
				</div>
			</Container>
		</Section>
	);
}