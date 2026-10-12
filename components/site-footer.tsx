import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[96rem] flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-10">
        <div>
          <p className="font-heading text-[1.25rem] font-black uppercase leading-none tracking-[-0.02em]">
            {site.name}
          </p>
          <p className="mt-3 text-[0.9rem] leading-[1.5] text-white/70">
            Creative producer, {site.location}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-[1rem] md:items-end">
          <a className="text-[#ffc600] underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="text-white/80 hover:text-white" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <a
            className="text-white/80 hover:text-white"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
