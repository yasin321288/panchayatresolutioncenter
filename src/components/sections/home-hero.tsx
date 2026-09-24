"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/sections/image-placeholder";

export function HomeHero() {
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="overflow-hidden bg-[var(--color-background)] pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-24">
			<Container className="relative">
				<div className="grid items-end gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(25rem,1.1fr)] lg:gap-16">
					<motion.div
						initial={shouldReduceMotion === null ? false : shouldReduceMotion ? false : { opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: shouldReduceMotion ? 0 : 0.65 }}
						className="relative z-10"
					>
						<p className="mb-7 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
							Panchayat Resolution Centre
						</p>
						<h1 className="max-w-3xl text-[clamp(3.1rem,6vw,5.75rem)] text-[var(--color-primary-dark)]">
							<span className="block">Justice begins</span>
							<span className="block">where communities</span>
							<span className="block">come together.</span>
						</h1>
						<p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
							Strengthening grassroots dispute resolution ecosystems in Panchayats across rural India.
						</p>
						<div className="mt-9 flex flex-col gap-3 sm:flex-row">
							<Link href="/our-work">
								<Button>Explore Our Work <ArrowDownRight aria-hidden="true" size={17} /></Button>
							</Link>
							<Link href="/get-involved">
								<Button variant="secondary">Get Involved</Button>
							</Link>
						</div>
					</motion.div>

					<motion.div
						initial={shouldReduceMotion === null ? false : shouldReduceMotion ? false : { opacity: 0, x: 28 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.12 }}
						className="lg:translate-y-8"
					>
						<ImagePlaceholder
							className="min-h-[20rem] sm:min-h-[30rem] lg:min-h-[38rem]"
							label="Developer placeholder: add a real PRC community photograph"
							variant="dark"
						/>
					</motion.div>
				</div>
				<div className="mt-10 grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1 border-t border-[var(--color-border)] pt-5 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-muted)] sm:mt-12 sm:flex sm:gap-4 sm:tracking-[0.16em]">
					<span className="h-2 w-2 rounded-full bg-[var(--color-orange)]" aria-hidden="true" />
					<span>Grassroots dialogue</span>
					<span className="col-start-2 sm:col-start-auto" aria-hidden="true">/</span>
					<span className="col-start-2 sm:col-start-auto">People-centred resolution</span>
				</div>
			</Container>
		</section>
	);
}