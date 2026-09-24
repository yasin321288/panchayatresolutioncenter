import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function WhatImpactMeansSection() {
	return (
		<Section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
			<Container>
				<div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
					<div>
						<Eyebrow>What Impact Means to PRC</Eyebrow>
						<h2 className="mt-6 max-w-lg text-[var(--color-primary-dark)]">Empowered Panchayats. More accessible resolution.</h2>
					</div>
					<p className="max-w-2xl text-[clamp(1.35rem,2.5vw,2.1rem)] leading-tight text-[var(--color-primary-dark)]">
						PRC&apos;s vision brings together accessible information, institutional capacity, legal and administrative support, effective grievance-resolution mechanisms and community participation so Panchayats can contribute to welfare delivery, local issue resolution, social justice and equitable development.
					</p>
				</div>
				<div className="mt-20 grid border-t border-[var(--color-primary)]/25 sm:grid-cols-2 lg:grid-cols-3">
					{siteContent.impact.dimensions.map((dimension, index) => (
						<div key={dimension} className="border-b border-[var(--color-primary)]/25 py-7 sm:px-7 sm:first:pl-0 lg:py-8 lg:nth-[3n+1]:pl-0">
							<p className="font-serif text-4xl text-[var(--color-primary)]">0{index + 1}</p>
							<h3 className="mt-7 max-w-xs text-2xl text-[var(--color-primary-dark)]">{dimension}</h3>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}