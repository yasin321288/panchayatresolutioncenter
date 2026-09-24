import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function HomeCta() {
	return (
		<Section className="border-t border-[var(--color-primary)]/15 bg-[var(--color-surface)]">
			<Container>
				<div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">Get Involved</p>
						<h2 className="mt-6 max-w-3xl text-[var(--color-primary-dark)]">Be part of the resolution ecosystem.</h2>
					</div>
					<div>
						<p className="max-w-md text-lg leading-8 text-[var(--color-muted)]">
							Students, legal practitioners, mediators, institutions, CSR partners and volunteers can play a role in strengthening Panchayats and grassroots dispute resolution.
						</p>
						<Link href="/get-involved" className="mt-8 inline-block">
							<Button>Get Involved <ArrowUpRight aria-hidden="true" size={17} /></Button>
						</Link>
					</div>
				</div>
			</Container>
		</Section>
	);
}