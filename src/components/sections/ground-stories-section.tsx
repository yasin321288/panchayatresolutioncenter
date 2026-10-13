import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ImagePlaceholder } from "@/components/sections/image-placeholder";
import { Section } from "@/components/ui/section";

const storyCategories = [
	{ name: "Bootcamp", imageSrc: "/images/bootcamp.png", imageAlt: "Panchayat Resolution Centre BootCamp 2026 event poster" },
];

export function GroundStoriesSection() {
	return (
		<Section className="bg-[var(--color-peach)]">
			<Container>
				<div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-stretch lg:gap-16">
					<div className="flex flex-col">
						<Eyebrow>From the Ground</Eyebrow>
						<h2 className="mt-5 max-w-xl text-[var(--color-primary-dark)]">From awareness to action.</h2>
						<p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
							PRC strengthens grassroots governance, access to entitlements, community dialogue and people-centred resolution mechanisms.
						</p>
						<div className="mt-10 border-t border-[var(--color-border)] pt-6 lg:mt-auto">
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">Featured activity</p>
							<h3 className="mt-3 text-3xl text-[var(--color-primary-dark)]">BootCamp 2026</h3>
							<p className="mt-3 max-w-xl leading-7 text-[var(--color-muted)]">
								A session on welfare, advocacy and justice in rural India, and on recognizing and reshaping Panchayat-led dispute resolution.
							</p>
							<p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--color-muted)]">
								13 August 2026 <span aria-hidden="true">/</span> Jindal Global Law School, Haryana
							</p>
						</div>
					</div>
					<div className="grid items-end gap-3 sm:gap-5">
						{storyCategories.map((category) => (
							<div key={category.name}>
								<ImagePlaceholder
									className="min-h-0 aspect-[3/4] max-w-md"
									variant="light"
									imageSrc={category.imageSrc}
									imageAlt={category.imageAlt}
									imageFit="contain"
									showImageLabel={false}
								/>
								<p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-primary)]">{category.name}</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
}