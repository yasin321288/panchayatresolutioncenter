import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
	width?: "default" | "narrow" | "wide";
};

export function Container({ className, width = "default", ...props }: ContainerProps) {
	return (
		<div
			className={cn(
				"mx-auto w-full px-5 sm:px-8 lg:px-10",
				width === "narrow" && "max-w-3xl",
				width === "default" && "max-w-7xl",
				width === "wide" && "max-w-[88rem]",
				className,
			)}
			{...props}
		/>
	);
}