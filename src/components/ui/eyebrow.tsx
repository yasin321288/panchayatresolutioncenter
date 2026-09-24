import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
	return (
		<span
			className={cn(
				"text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-primary)]",
				className,
			)}
			{...props}
		/>
	);
}