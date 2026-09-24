import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ImagePlaceholder } from "@/components/sections/image-placeholder";
import { Section } from "@/components/ui/section";

export function GetInvolvedHero() {
	return (
		<Section className="overflow-hidden pb-20 pt-12 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
			<Container>
				<div className="grid items-end gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
					<div>
						<Eyebrow>Get Involved</Eyebrow>
						<h1 className="mt-6 max-w-2xl text-[clamp(3.1rem,6vw,5.75rem)] text-[var(--color-primary-dark)]">Be part of the resolution ecosystem.</h1>
						<p className="mt-8 max-w-xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
							Grassroots resolution depends on participation across communities, institutions, professionals, students and other ecosystem participants.
						</p>
						<div className="mt-9">
							<Link href="#start-a-conversation">
								<Button>Start a conversation <ArrowDownRight aria-hidden="true" size={17} /></Button>
							</Link>
						</div>
					</div>
					<ImagePlaceholder
						className="min-h-[20rem] sm:min-h-[30rem] lg:min-h-[36rem]"
						label="Developer placeholder: add a real PRC community photograph"
						variant="dark"
					/>
				</div>
			</Container>
		</Section>
	);
}