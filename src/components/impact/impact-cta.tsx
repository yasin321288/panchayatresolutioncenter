import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ImpactCta() {
	return (
		<Section className="border-t border-[var(--color-primary)]/15 bg-[var(--color-background)]">
			<Container>
				<div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
					<h2 className="max-w-3xl text-[var(--color-primary-dark)]">Help strengthen the resolution ecosystem.</h2>
					<div className="flex flex-col items-start gap-3 sm:flex-row lg:justify-end">
						<Link href="/get-involved">
							<Button>Get Involved <ArrowUpRight aria-hidden="true" size={17} /></Button>
						</Link>
						<Link href="/our-work">
							<Button variant="secondary">Our Work</Button>
						</Link>
					</div>
				</div>
			</Container>
		</Section>
	);
}