import { cn } from "@/lib/utils";
import Image from "next/image";

type ImagePlaceholderProps = {
	className?: string;
	label?: string;
	variant?: "light" | "dark" | "peach";
	imageSrc?: string;
	imageAlt?: string;
};

export function ImagePlaceholder({
	className,
	label = "PRC photography placeholder",
	variant = "light",
	imageSrc,
	imageAlt = "PRC field work",
}: ImagePlaceholderProps) {
	return (
		<div
			className={cn(
				"relative isolate flex min-h-56 items-end overflow-hidden border border-[var(--color-border)] p-5",
				variant === "light" && "bg-[var(--color-surface)]",
				variant === "dark" && "bg-[var(--color-primary-dark)] text-[var(--color-background)]",
				variant === "peach" && "bg-[var(--color-surface)]",
				className,
			)}
		>
			{imageSrc ? (
				<Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
			) : (
				<div
					className="absolute inset-0 -z-10 opacity-40"
					aria-hidden="true"
					style={{
						backgroundImage:
							"linear-gradient(135deg, transparent 48%, rgba(241,90,10,0.18) 49%, transparent 50%), linear-gradient(45deg, transparent 48%, rgba(11,159,88,0.14) 49%, transparent 50%)",
						backgroundSize: "42px 42px",
					}}
				/>
			)}
			<span className="max-w-48 text-[0.65rem] font-bold uppercase tracking-[0.16em] opacity-70">
				{imageSrc ? "PRC field work" : label}
			</span>
		</div>
	);
}