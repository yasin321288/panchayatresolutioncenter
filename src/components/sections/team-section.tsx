import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ImagePlaceholder } from "@/components/sections/image-placeholder";
import { Section } from "@/components/ui/section";

export function TeamSection() {
	const founder = siteContent.team.find((member) => member.role === "Founder & Director");
	const supportingTeam = siteContent.team.filter((member) => member !== founder);

	return (
		<Section className="bg-[var(--color-surface)]">
			<Container>
				<div className="flex flex-col gap-5 border-b border-[var(--color-primary)]/20 pb-9 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<Eyebrow>Leadership</Eyebrow>
						<h2 className="mt-5 text-[var(--color-primary-dark)]">The people behind PRC.</h2>
					</div>
					<p className="max-w-sm leading-7 text-[var(--color-muted)]">Mentorship, founding leadership and advocacy for a stronger grassroots dispute-resolution ecosystem.</p>
				</div>

				{founder ? (
					<div className="grid gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20 lg:py-16">
						<ImagePlaceholder
							className="min-h-[22rem] sm:min-h-[30rem]"
							label="Developer placeholder: founding team field photograph"
							variant="dark"
							imageSrc={founder.image}
							imageAlt={`${founder.name}, ${founder.role}`}
						/>
						<div>
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Founder &amp; Director</p>
							<h3 className="mt-5 text-5xl text-[var(--color-primary-dark)] sm:text-7xl">{founder.name}</h3>
						</div>
					</div>
				) : null}

				<div className="grid border-t border-[var(--color-primary)]/20 sm:grid-cols-3">
					{supportingTeam.map((member, index) => (
						<div key={member.name} className="border-b border-[var(--color-primary)]/20 py-8 sm:border-b-0 sm:border-r sm:px-7 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0">
							<ImagePlaceholder
								className="mb-7 min-h-52 sm:min-h-60"
								variant="light"
								imageSrc={member.image}
								imageAlt={`${member.name}, ${member.role}`}
							/>
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">0{index + 1}</p>
							<h3 className="mt-5 text-3xl text-[var(--color-primary-dark)]">{member.name}</h3>
							<p className="mt-3 text-sm font-bold text-[var(--color-muted)]">{member.role}</p>
							{"description" in member ? <p className="mt-1 text-sm text-[var(--color-muted)]">{member.description}</p> : null}
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}