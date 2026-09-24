import { ArrowUpRight } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { ArrowLink } from "@/components/ui/arrow-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function WorkAreasSection() {
	return (
		<Section>
			<Container>
				<div className="flex flex-col justify-between gap-7 border-b border-[var(--color-border)] pb-10 sm:flex-row sm:items-end">
					<div>
						<Eyebrow>What We Do</Eyebrow>
						<h2 className="mt-5 text-[var(--color-primary-dark)]">From awareness to action.</h2>
					</div>
					<ArrowLink href="/our-work">Explore our work</ArrowLink>
				</div>
				<div className="grid gap-0 md:grid-cols-2">
					{siteContent.workAreas.map((area, index) => (
						<article
							key={area.name}
							className={[
								"group border-b border-[var(--color-border)] py-8 sm:py-10 md:px-8",
								index % 2 === 0 ? "md:pl-0" : "md:border-l md:pr-0",
							].join(" ")}
						>
							<div className="flex items-start justify-between gap-5">
								<p className="font-serif text-4xl text-[var(--color-primary)]">0{index + 1}</p>
								<ArrowUpRight className="text-[var(--color-orange)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" size={22} />
							</div>
							<h3 className={index === 0 ? "mt-10 text-4xl text-[var(--color-primary-dark)] sm:text-5xl" : "mt-10 text-3xl text-[var(--color-primary-dark)]"}>{area.name}</h3>
							<p className="mt-4 max-w-md leading-7 text-[var(--color-muted)]">{area.description}</p>
						</article>
					))}
				</div>
			</Container>
		</Section>
	);
}