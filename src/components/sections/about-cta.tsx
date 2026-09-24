import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutCta() {
	return (
		<Section className="border-t border-[var(--color-primary)]/15 bg-[var(--color-background)]">
			<Container>
				<div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
					<h2 className="max-w-3xl text-[var(--color-primary-dark)]">Be Part of the Resolution Ecosystem</h2>
					<div className="flex flex-col items-start gap-3 sm:flex-row lg:justify-end">
						<Link href="/our-work">
							<Button>Explore Our Work <ArrowUpRight aria-hidden="true" size={17} /></Button>
						</Link>
						<Link href="/get-involved">
							<Button variant="secondary">Get Involved</Button>
						</Link>
					</div>
				</div>
			</Container>
		</Section>
	);
}