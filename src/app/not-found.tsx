import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export default function NotFound() {
	return (
		<Section>
			<Container width="narrow" className="text-center">
				<p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]">404</p>
				<h1 className="mt-6 text-[var(--color-primary-dark)]">Page not found.</h1>
				<p className="mx-auto mt-6 max-w-md text-lg leading-8 text-[var(--color-muted)]">The page you&apos;re looking for doesn&apos;t appear to be here.</p>
				<div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
					<Link href="/">
						<Button>Home</Button>
					</Link>
					<Link href="/our-work">
						<Button variant="secondary">Our Work</Button>
					</Link>
				</div>
			</Container>
		</Section>
	);
}