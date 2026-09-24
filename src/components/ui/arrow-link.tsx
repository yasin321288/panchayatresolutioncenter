import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ArrowLinkProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ArrowLink({ children, className, ...props }: ArrowLinkProps) {
	return (
		<Link
			className={cn(
				"inline-flex items-center gap-2 text-sm font-bold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-dark)]",
				className,
			)}
			{...props}
		>
			{children}
			<ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
		</Link>
	);
}