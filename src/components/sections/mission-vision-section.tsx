import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function MissionVisionSection() {
	return (
		<Section className="bg-[var(--color-surface)]">
			<Container width="wide">
				<div className="mx-auto grid max-w-6xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-background)] shadow-[0_20px_50px_rgba(77,43,28,0.12)] md:grid-cols-2">
					<article className="flex min-h-80 flex-col px-7 py-8 sm:px-10 sm:py-10 md:min-h-[31rem] md:px-12 md:py-14 md:shadow-[inset_-14px_0_18px_-20px_rgba(77,43,28,0.55)]">
						<div className="flex items-center justify-between border-b border-[var(--color-border)] pb-5">
							<Eyebrow>Mission</Eyebrow>
							<span aria-hidden="true" className="font-serif text-xl text-[var(--color-muted)]">01</span>
						</div>
						<p className="mt-10 font-serif text-3xl leading-[1.04] text-[var(--color-primary-dark)] sm:text-4xl md:mt-auto md:pt-10 md:text-[2.75rem]">{siteContent.mission}</p>
					</article>
					<article className="flex min-h-80 flex-col border-t border-[var(--color-border)] px-7 py-8 sm:px-10 sm:py-10 md:min-h-[31rem] md:border-l-0 md:border-t-0 md:px-12 md:py-14 md:shadow-[inset_14px_0_18px_-20px_rgba(77,43,28,0.55)]">
						<div className="flex items-center justify-between border-b border-[var(--color-border)] pb-5">
							<Eyebrow>Vision</Eyebrow>
							<span aria-hidden="true" className="font-serif text-xl text-[var(--color-muted)]">02</span>
						</div>
						<p className="mt-10 font-serif text-3xl leading-[1.04] text-[var(--color-primary-dark)] sm:text-4xl md:mt-auto md:pt-10 md:text-[2.75rem]">{siteContent.vision}</p>
					</article>
				</div>
			</Container>
		</Section>
	);
}