import type { Metadata } from "next";
import Link from "next/link";
import { CtaLink } from "@/components/cta-link";
import { ProjectVisual } from "@/components/project-visual";
import { Prose } from "@/components/rich-text";
import { home, projects, site } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} — Creative Producer`,
  },
  description: home.headline,
};

export default function HomePage() {
  return (
    <div className="page-shell">
      <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.72fr)] lg:gap-16">
        <div>
          <p className="font-heading text-[clamp(1.25rem,0.9rem+0.8vw,1.6rem)] font-bold uppercase leading-[1.2] tracking-[-0.02em] text-[#ffc600]">
            {site.role}
          </p>
          <h1 className="mt-8 max-w-[18ch]">{home.headline}</h1>
          <div className="mt-6">
            <Prose paragraphs={[home.intro]} />
          </div>
        </div>
        <Link
          href="/projects/immersive-colour-light"
          className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffc600]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[0.5rem]">
            <ProjectVisual
              slug="immersive-colour-light"
              className="transition duration-700 group-hover:scale-105"
            />
          </div>
          <p className="mt-3 text-[0.8rem] uppercase tracking-[0.18em] text-white/70 group-hover:text-[#ffc600]">
            Immersive Colour Light
          </p>
        </Link>
      </div>

      <section className="mt-24" aria-labelledby="invitation">
        <h2 id="invitation" className="max-w-[16ch] text-[#ffc600]">
          {home.invitation}
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href="/projects">See projects</CtaLink>
          <CtaLink href="/work-with-me" variant="outline">
            Work with me
          </CtaLink>
        </div>
        <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <span className="font-heading text-[clamp(1.15rem,0.9rem+0.7vw,1.6rem)] font-bold uppercase leading-[1.2] tracking-[-0.02em] group-hover:text-[#ffc600]">
                  {project.title}
                </span>
                <span className="shrink-0 text-[0.8rem] uppercase tracking-[0.16em] text-white/60">
                  {project.client}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
