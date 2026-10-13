import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function ImpactHero() {
	return (
		<Section className="overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
			<Container>
				<div className="max-w-5xl">
						<Eyebrow>Our Commitment</Eyebrow>
						<h1 className="mt-6 max-w-4xl text-[clamp(3.1rem,6vw,5.75rem)] text-[var(--color-primary-dark)]">Measuring the work. Strengthening the ecosystem.</h1>
						<p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
							PRC describes its intended work through yearly milestones and stated commitments. They define a direction for grassroots dispute resolution; they are not reported achievements.
						</p>
						<div className="mt-9">
							<Link href="#stated-milestones">
								<Button>View the commitments <ArrowDownRight aria-hidden="true" size={17} /></Button>
							</Link>
						</div>
				</div>
			</Container>
		</Section>
	);
}