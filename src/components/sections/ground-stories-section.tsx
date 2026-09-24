import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ImagePlaceholder } from "@/components/sections/image-placeholder";
import { Section } from "@/components/ui/section";

const storyCategories = ["Bootcamp", "Awareness", "Dialogue", "Campaigns"];

export function GroundStoriesSection() {
	return (
		<Section className="bg-[var(--color-peach)]">
			<Container>
				<div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">
					<div>
						<Eyebrow>From the Ground</Eyebrow>
						<h2 className="mt-5 max-w-md text-[var(--color-primary-dark)]">From awareness to action.</h2>
						<p className="mt-6 max-w-md text-lg leading-8 text-[var(--color-muted)]">
							PRC strengthens grassroots governance, access to entitlements, community dialogue and people-centred resolution mechanisms.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-3 sm:gap-5">
						{storyCategories.map((category, index) => (
							<div key={category} className={index === 0 ? "col-span-2" : ""}>
								<ImagePlaceholder
									className={index === 0 ? "min-h-64 sm:min-h-80" : "min-h-44 sm:min-h-56"}
									label={`Developer placeholder: ${category} photograph`}
									variant={index === 0 ? "dark" : "light"}
									imageSrc={index === 0 ? "/images/prc-field-work.png" : undefined}
									imageAlt="PRC field work with community members and grassroots documentation"
								/>
								<p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">{category}</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
}