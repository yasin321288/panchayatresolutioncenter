import { ArrowUpRight, Mail } from "lucide-react";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function ContactSection() {
	return (
		<Section id="start-a-conversation">
			<Container width="narrow">
				<div className="border-y border-[var(--color-border)] py-12 text-center sm:py-16">
					<Eyebrow>Start a Conversation</Eyebrow>
					<h2 className="mt-6 text-[var(--color-primary-dark)]">Connect with PRC.</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">People and organisations interested in the broader PRC resolution ecosystem can reach out by email.</p>
					<a
						href={`mailto:${siteContent.contactEmail}`}
						aria-label="Email PRC"
						className="mt-9 inline-flex max-w-full items-center gap-3 border-b-2 border-[var(--color-primary)] pb-2 text-left text-lg font-bold text-[var(--color-primary)] transition-colors hover:border-[var(--color-orange)] hover:text-[var(--color-primary-dark)] sm:text-2xl"
					>
						<Mail aria-hidden="true" size={21} />
						<span className="break-all">{siteContent.contactEmail}</span>
						<ArrowUpRight aria-hidden="true" size={19} />
					</a>
					<p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">Email PRC</p>
				</div>
			</Container>
		</Section>
	);
}