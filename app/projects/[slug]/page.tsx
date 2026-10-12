import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { Prose } from "@/components/rich-text";
import {
  getAdjacentProjects,
  getProject,
  projects,
} from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <div className="page-shell">
      <Link
        href="/projects"
        className="text-[0.85rem] uppercase tracking-[0.16em] text-white/70 hover:text-[#ffc600]"
      >
        All projects
      </Link>
      <p className="mt-8 text-[0.9rem] uppercase tracking-[0.18em] text-[#ffc600]">
        {project.client} · {project.category}
      </p>
      <h1 className="mt-4 max-w-[16ch]">{project.title}</h1>
      <p className="mt-6 max-w-[42rem] text-[1.2rem] leading-[1.5]">{project.summary}</p>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[0.5rem]">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 96rem) 1400px, 100vw"
            priority
          />
        ) : (
          <ProjectVisual slug={project.slug} />
        )}
      </div>

      <section className="mt-16" aria-labelledby="mission">
        <h2 id="mission" className="text-[#ffc600]">
          Mission
        </h2>
        <div className="mt-6">
          <Prose paragraphs={[project.mission]} />
        </div>
      </section>

      <section className="mt-14" aria-labelledby="challenge">
        <h2 id="challenge" className="text-[#ffc600]">
          Challenge
        </h2>
        <div className="mt-6">
          <Prose paragraphs={[project.challenge]} />
        </div>
      </section>

      <section className="mt-14" aria-labelledby="solution">
        <h2 id="solution" className="text-[#ffc600]">
          Solution
        </h2>
        <div className="mt-6">
          <Prose paragraphs={project.solution} />
        </div>
      </section>

      <section className="mt-14" aria-labelledby="metrics">
        <h2 id="metrics" className="text-[#ffc600]">
          Key metrics
        </h2>
        <ul className="mt-6 max-w-[44rem] space-y-3">
          {project.metrics.map((metric) => (
            <li key={metric} className="flex gap-3 text-[1.1rem] leading-[1.5]">
              <span className="mt-[0.55em] size-1.5 shrink-0 bg-[#ffc600]" aria-hidden />
              <span>{metric}</span>
            </li>
          ))}
        </ul>
      </section>

      <nav className="mt-20 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2" aria-label="More projects">
        <Link href={`/projects/${previous.slug}`} className="group">
          <span className="text-[0.75rem] uppercase tracking-[0.16em] text-white/50">
            Previous
          </span>
          <span className="mt-2 block font-heading text-[1.15rem] font-bold uppercase leading-[1.2] tracking-[-0.02em] group-hover:text-[#ffc600]">
            {previous.title}
          </span>
        </Link>
        <Link href={`/projects/${next.slug}`} className="group sm:text-right">
          <span className="text-[0.75rem] uppercase tracking-[0.16em] text-white/50">
            Next
          </span>
          <span className="mt-2 block font-heading text-[1.15rem] font-bold uppercase leading-[1.2] tracking-[-0.02em] group-hover:text-[#ffc600]">
            {next.title}
          </span>
        </Link>
      </nav>
    </div>
  );
}
