import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

const connections = [
	"Grassroots governance",
	"Access to information and entitlements",
	"Community dialogue",
	"People-centred resolution",
	"A stronger grassroots resolution ecosystem",
];

export function HowWorkConnectsSection() {
	return (
		<Section className="bg-[var(--color-primary-dark)] text-[var(--color-background)]">
			<Container>
				<div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
					<div>
						<Eyebrow className="text-[var(--color-surface)]">How the Pieces Connect</Eyebrow>
						<h2 className="mt-6 max-w-lg text-[var(--color-background)]">Many points of entry. One broader direction.</h2>
						<p className="mt-7 max-w-md text-lg leading-8 text-white/70">Together, these areas reflect PRC&apos;s broader direction toward strengthening grassroots dispute resolution.</p>
					</div>
					<div className="border-y border-white/25">
						{connections.map((connection, index) => (
							<div key={connection} className="relative border-b border-white/25 py-6 last:border-b-0 sm:py-7">
								<div className="flex items-center gap-5">
									<span className="font-serif text-3xl text-[var(--color-orange)]">0{index + 1}</span>
									<p className={index === connections.length - 1 ? "font-serif text-2xl text-[var(--color-surface)] sm:text-3xl" : "text-lg text-white/80 sm:text-xl"}>{connection}</p>
								</div>
								{index < connections.length - 1 ? <span className="absolute bottom-[-0.6rem] left-[0.85rem] z-10 h-5 border-l border-[var(--color-orange)]" aria-hidden="true" /> : null}
							</div>
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
}