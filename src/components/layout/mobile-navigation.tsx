"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const firstLinkRef = useRef<HTMLAnchorElement>(null);
	const shouldReduceMotion = useReducedMotion();

	useEffect(() => {
		if (!isOpen) {
			document.body.style.overflow = "";
			return;
		}

		document.body.style.overflow = "hidden";
		firstLinkRef.current?.focus();

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsOpen(false);
				menuButtonRef.current?.focus();
				return;
			}

			if (event.key === "Tab") {
				const focusableElements = Array.from(
					document.querySelectorAll<HTMLElement>(
						'#mobile-navigation a[href], #mobile-navigation button:not([disabled])',
					),
				);
				const firstElement = focusableElements[0];
				const lastElement = focusableElements[focusableElements.length - 1];

				if (!firstElement || !lastElement) return;
				if (event.shiftKey && document.activeElement === firstElement) {
					event.preventDefault();
					lastElement.focus();
				} else if (!event.shiftKey && document.activeElement === lastElement) {
					event.preventDefault();
					firstElement.focus();
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = "";
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);

	return (
		<div className="lg:hidden">
			<button
				ref={menuButtonRef}
				type="button"
				className="inline-flex size-11 items-center justify-center text-[var(--color-primary)]"
				aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
				aria-expanded={isOpen}
				aria-controls="mobile-navigation"
				onClick={() => setIsOpen((open) => !open)}
			>
				{isOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
			</button>

			<AnimatePresence>
				{isOpen ? (
					<motion.div
						id="mobile-navigation"
						initial={shouldReduceMotion === null ? false : shouldReduceMotion ? false : { opacity: 0, y: -12 }}
						animate={{ opacity: 1, y: 0 }}
						exit={shouldReduceMotion === true ? undefined : { opacity: 0, y: -12 }}
						transition={{ duration: shouldReduceMotion === true ? 0 : 0.2 }}
						className="absolute inset-x-0 top-full border-t border-[var(--color-border)] bg-[var(--color-background)] px-5 pb-8 pt-4 shadow-lg sm:px-8"
						role="dialog"
						aria-modal="true"
						aria-label="Mobile navigation"
					>
						<nav aria-label="Mobile navigation">
							<ul className="divide-y divide-[var(--color-border)]">
								{navigation.map((item, index) => (
									<li key={item.href}>
										<Link
											ref={index === 0 ? firstLinkRef : undefined}
											href={item.href}
											className={cn(
												"block py-4 text-lg",
												pathname === item.href && "font-bold text-[var(--color-primary)]",
											)}
											aria-current={pathname === item.href ? "page" : undefined}
											onClick={() => setIsOpen(false)}
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
							<Link
								href="/get-involved"
								className={cn(buttonVariants(), "mt-6 w-full")}
								onClick={() => setIsOpen(false)}
							>
								Get Involved
							</Link>
						</nav>
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	);
}