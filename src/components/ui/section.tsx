import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
	spacing?: "default" | "compact" | "large";
};

export function Section({ className, spacing = "default", ...props }: SectionProps) {
	return (
		<section
			className={cn(
				spacing === "compact" && "py-12 sm:py-16",
				spacing === "default" && "py-20 sm:py-28 lg:py-36",
				spacing === "large" && "py-28 sm:py-36 lg:py-48",
				className,
			)}
			{...props}
		/>
	);
}