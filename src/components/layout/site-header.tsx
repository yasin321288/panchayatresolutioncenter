"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function SiteHeader() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_94%,transparent)] backdrop-blur-md">
			<Container className="flex h-[4.5rem] items-center justify-between gap-8">
				<Link href="/" className="shrink-0" aria-label="Panchayat Resolution Centre home">
					<Image
						src="/logos/prc-logo.png"
						alt="Panchayat Resolution Centre"
						width={140}
						height={80}
						style={{ width: "8.75rem", height: "auto" }}
						priority
					/>
				</Link>

				<nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-primary)]",
								pathname === item.href && "font-bold text-[var(--color-primary)]",
							)}
							aria-current={pathname === item.href ? "page" : undefined}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className="hidden lg:block">
					<Link href="/get-involved" className={cn(buttonVariants({ size: "small" }))}>
						Get Involved
					</Link>
				</div>

				<MobileNavigation />
			</Container>
		</header>
	);
}