import { CtaLink } from "@/components/cta-link";

export default function NotFound() {
  return (
    <div className="page-shell">
      <p className="text-[0.9rem] uppercase tracking-[0.18em] text-[#ffc600]">404</p>
      <h1 className="mt-4">This page isn&apos;t here.</h1>
      <p className="mt-6 max-w-[36rem] text-[1.1rem] leading-[1.5]">
        The link may have changed. The work is still on the projects page.
      </p>
      <div className="mt-8">
        <CtaLink href="/projects">See projects</CtaLink>
      </div>
    </div>
  );
}
