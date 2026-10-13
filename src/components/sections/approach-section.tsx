"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { siteContent } from "@/content/site-content";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export function ApproachSection() {
	const [activeStage, setActiveStage] = useState(0);
	const shouldReduceMotion = useReducedMotion();
	const activeApproach = siteContent.approach[activeStage];

	return (
		<Section className="bg-[var(--color-primary-dark)] text-[var(--color-background)]">
			<Container>
				<div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
					<div>
						<Eyebrow className="text-[var(--color-surface)]">Our Approach</Eyebrow>
						<h2 className="mt-6 max-w-lg text-[var(--color-background)]">From Access to Resolution</h2>
						<p className="mt-7 max-w-md text-lg leading-8 text-white/70">
							A grassroots ecosystem where communities can access information, identify appropriate avenues for assistance, strengthen their capacities and participate more meaningfully in rural development.
						</p>
					</div>
					<div>
						<div className="grid border-y border-white/25 sm:grid-cols-4">
							{siteContent.approach.map((stage, index) => (
								<button
									key={stage.name}
									type="button"
									onClick={() => setActiveStage(index)}
									onMouseEnter={() => setActiveStage(index)}
									className={`group border-b border-white/25 px-0 py-6 text-left transition-colors last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0 ${activeStage === index ? "bg-white/[0.06] sm:-mx-1 sm:px-6" : ""}`}
									aria-pressed={activeStage === index}
								>
									<span className={`mb-4 flex items-center justify-between text-xs ${activeStage === index ? "text-[var(--color-background)]" : "text-white/50"}`}>
										0{index + 1}
										<ArrowRight className="opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" size={16} />
									</span>
									<span className={activeStage === index ? "font-bold text-[var(--color-surface)]" : "text-white/70"}>
										{stage.name}
									</span>
								</button>
							))}
						</div>
						<motion.div
							key={activeStage}
							initial={shouldReduceMotion === null ? false : shouldReduceMotion ? false : { opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
							className="min-h-44 border-b border-white/25 py-10"
							aria-live="polite"
						>
							<p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-background)]">{activeApproach.name}</p>
							<p className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[var(--color-background)] sm:text-4xl">{activeApproach.description}</p>
						</motion.div>
					</div>
				</div>
			</Container>
		</Section>
	);
}