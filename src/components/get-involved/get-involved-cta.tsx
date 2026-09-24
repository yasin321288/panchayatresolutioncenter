import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { siteContent } from "@/content/site-content";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function GetInvolvedCta() {
	return (
		<Section className="border-t border-[var(--color-primary)]/15 bg-[var(--color-surface)]">
			<Container>
				<div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
					<div>
						<h2 className="max-w-3xl text-[var(--color-primary-dark)]">Strengthen the resolution ecosystem.</h2>
						<p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">Start with a conversation about the participation and support described by PRC.</p>
					</div>
					<div className="flex flex-col items-start gap-3 sm:flex-row lg:justify-end">
						<a href={`mailto:${siteContent.contactEmail}`}>
							<Button> Email PRC <ArrowUpRight aria-hidden="true" size={17} /></Button>
						</a>
						<Link href="/our-work">
							<Button variant="secondary">Our Work</Button>
						</Link>
					</div>
				</div>
			</Container>
		</Section>
	);
}