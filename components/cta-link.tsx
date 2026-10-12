import type { ReactNode } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "default" | "outline";
};

export function CtaLink({ href, children, variant = "default" }: CtaLinkProps) {
  const className = cn(
    buttonVariants({ variant }),
    "h-auto rounded-[6.4px] px-[1.3rem] py-4 text-[1rem] font-normal uppercase tracking-[0.04em]",
    variant === "outline"
      ? "border-white/40 bg-transparent text-white hover:bg-white hover:text-black"
      : "bg-[#ffc600] text-black hover:bg-[#ffd54a]",
  );

  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
