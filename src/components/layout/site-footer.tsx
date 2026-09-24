import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/content/navigation";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";

const socialLinks: Array<{ label: string; href: string | null }> = [];

export function SiteFooter() {
	return (
		<footer className="bg-[var(--color-primary-dark)] text-[var(--color-background)]">
			<Container className="py-16 sm:py-20">
				<div className="grid gap-12 border-b border-white/20 pb-14 md:grid-cols-[1.5fr_1fr_1fr]">
					<div className="max-w-sm space-y-5">
						<Image
							src="/logos/prc-logo.png"
							alt="Panchayat Resolution Centre"
							width={140}
							height={80}
							style={{ width: "8.75rem", height: "auto" }}
						/>
						<p className="text-sm leading-7 text-white/75">
							A registered non-profit organisation to strengthen the Grassroot &amp; Dispute
							Resolution Ecosystem in Rural India.
						</p>
					</div>

					<div>
						<p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-surface)]">
							Explore
						</p>
						<nav aria-label="Footer navigation">
							<ul className="space-y-3 text-sm text-white/80">
								{navigation.map((item) => (
									<li key={item.href}>
										<Link className="transition-colors hover:text-white" href={item.href}>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>

					<div>
						<p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-surface)]">
							Contact
						</p>
						<a
							className="break-words text-sm text-white/80 transition-colors hover:text-white"
							href={`mailto:${siteContent.contactEmail}`}
						>
							{siteContent.contactEmail}
						</a>
						{socialLinks.length > 0 ? (
							<ul className="mt-6 space-y-2 text-sm">
								{socialLinks.map((social) => (
									<li key={social.label}>
										{social.href ? <a href={social.href}>{social.label}</a> : social.label}
									</li>
								))}
							</ul>
						) : null}
					</div>
				</div>

				<div className="flex flex-col gap-3 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
					<p>© {new Date().getFullYear()} {siteContent.organizationName}</p>
					<p>Grassroots dialogue, access and resolution.</p>
				</div>
			</Container>
		</footer>
	);
}