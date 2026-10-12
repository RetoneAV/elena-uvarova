"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  projectCategories,
  projects,
  type ProjectFilter,
} from "@/lib/content";
import { cn } from "cn";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="toolbar" aria-label="Filter projects">
        {projectCategories.map((category) => {
          const selected = filter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(category)}
              className={cn(
                "rounded-[4px] border px-3 py-2 text-[0.75rem] uppercase tracking-[0.14em] transition-colors",
                selected
                  ? "border-white bg-white text-black"
                  : "border-white/25 bg-transparent text-white hover:border-white/70",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>
      {visible.length === 0 ? (
        <p className="text-[1.1rem] text-white/70">Nothing in this category yet.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {visible.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-[0.5rem] bg-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffc600] lg:aspect-[16/10]"
              >
                <div className="absolute inset-0 transition duration-700 ease-out group-hover:scale-105">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  ) : (
                    <ProjectVisual slug={project.slug} />
                  )}
                </div>
                <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/50" />
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
                  <p className="mb-3 text-[0.8rem] font-normal uppercase tracking-[0.2em] text-white/70">
                    {project.client}
                  </p>
                  <h2 className="tile-title max-w-[16ch] transition duration-300 group-hover:-translate-y-3 group-hover:opacity-80">
                    {project.title}
                  </h2>
                </div>
                <div className="pointer-events-none absolute top-1/2 left-1/2 z-20 hidden size-[7.5rem] -translate-x-1/2 translate-y-6 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-xl transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:flex">
                  <span className="text-[0.8rem] uppercase tracking-[0.16em] text-white">
                    View
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
