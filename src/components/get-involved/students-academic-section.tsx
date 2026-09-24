import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function StudentsAcademicSection() {
	return (
		<Section className="bg-[var(--color-primary-dark)] text-[var(--color-background)]">
			<Container>
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
					<div>
						<Eyebrow className="text-[var(--color-surface)]">Students &amp; Academic Chapter</Eyebrow>
						<h2 className="mt-6 max-w-lg text-[var(--color-background)]">Learning through grassroots participation.</h2>
					</div>
					<div>
						<p className="max-w-2xl text-[clamp(1.35rem,2.5vw,2.1rem)] leading-tight text-[var(--color-background)]">The source describes law colleges training and engaging law students in community outreach, welfare assistance, legal aid and mediation awareness.</p>
						<div className="mt-10 grid border-t border-white/25 sm:grid-cols-2">
							{siteContent.getInvolved.studentEngagement.map((area, index) => (
								<div key={area} className="border-b border-white/25 py-6 sm:px-6 sm:first:pl-0">
									<p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-orange)]">0{index + 1}</p>
									<p className="mt-3 text-xl text-white/80">{area}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</Container>
		</Section>
	);
}