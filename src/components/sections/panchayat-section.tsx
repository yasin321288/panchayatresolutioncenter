import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ImagePlaceholder } from "@/components/sections/image-placeholder";
import { Section } from "@/components/ui/section";

const storyWords = [
	{
		title: "Panchayat",
		copy: "A grassroots deliberative assembly for collective dialogue and the resolution of community problems and disputes.",
	},
	{
		title: "People",
		copy: "Communities are central to participatory, responsive and inclusive village governance.",
	},
	{
		title: "Problem",
		copy: "Without adequate grievance-redressal mechanisms, access to justice and resources remains unequal.",
	},
];

export function PanchayatSection() {
	return (
		<Section>
			<Container>
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
					<div className="lg:sticky lg:top-32">
						<Eyebrow>Why Panchayat?</Eyebrow>
						<h2 className="mt-6 max-w-md text-[var(--color-primary-dark)]">People. Dialogue. Resolution.</h2>
						<ImagePlaceholder
							className="mt-12 min-h-0 aspect-[3/2]"
							imageSrc="/images/panchayatResolution.png"
							imageAlt="Participants holding legal aid and mediation books at a PRC event"
							showImageLabel={false}
						/>
					</div>
					<div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
						{storyWords.map((item, index) => (
							<article key={item.title} className="grid gap-5 py-8 sm:grid-cols-[8rem_1fr] sm:py-10">
								<p className="font-serif text-4xl text-[var(--color-primary)]">0{index + 1}</p>
								<div>
									<h3 className="text-4xl text-[var(--color-primary-dark)]">{item.title}</h3>
									<p className="mt-4 max-w-xl text-lg leading-8 text-[var(--color-muted)]">{item.copy}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</Container>
		</Section>
	);
}