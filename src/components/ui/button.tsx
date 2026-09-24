import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex min-h-12 items-center justify-center gap-2 border px-5 py-3 text-sm font-bold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				primary:
					"border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-background)] hover:border-[var(--color-primary-dark)] hover:bg-[var(--color-primary-dark)]",
				secondary:
					"border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-surface)]",
				ghost:
					"border-transparent px-0 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]",
			},
			size: {
				default: "",
				small: "min-h-10 px-4 py-2 text-xs",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
		},
	},
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, size, variant, ...props }: ButtonProps) {
	return <button className={cn(buttonVariants({ size, variant }), className)} {...props} />;
}

export { buttonVariants };