import type { Metadata } from "next";
import Link from "next/link";
import { ProjectGrid } from "@/components/project-grid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Immersive installations, light works and landmark projection shows produced by Elena Uvarova.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <h1 className="projects-display">Projects</h1>
      <div className="mt-10">
        <ProjectGrid />
      </div>
      <p className="mt-16 max-w-[36rem] text-[1.2rem] leading-[1.5]">
        Have an idea?{" "}
        <Link href="/work-with-me" className="text-[#ffc600] underline-offset-4 hover:underline">
          Let&apos;s build it together.
        </Link>
      </p>
    </div>
  );
}
