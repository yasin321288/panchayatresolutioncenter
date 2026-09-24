import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
	eyebrow?: string;
	title: string;
};

export function SectionHeading({ className, eyebrow, title, ...props }: SectionHeadingProps) {
	return (
		<div className={cn("space-y-4", className)} {...props}>
			{eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
			<h2>{title}</h2>
		</div>
	);
}