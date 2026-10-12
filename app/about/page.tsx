import type { Metadata } from "next";
import Link from "next/link";
import { ClientMarquee } from "@/components/client-marquee";
import { Prose } from "@/components/rich-text";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elena Uvarova works at the intersection of creative vision and technical production, crafting immersive experiences that transform how people feel in space.",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <h1>About</h1>
      <div className="mt-8">
        <Prose paragraphs={about.intro} />
      </div>

      <section className="mt-16" aria-labelledby="what-i-do">
        <h2 id="what-i-do" className="text-[#ffc600]">
          What I do
        </h2>
        <div className="mt-6">
          <Prose paragraphs={about.whatIDo} />
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-block text-[1.1rem] text-[#ffc600] underline-offset-4 hover:underline"
        >
          See projects →
        </Link>
      </section>

      <hr className="my-16 border-white/15" />

      <section aria-labelledby="background">
        <h2 id="background" className="text-[#ffc600]">
          Background
        </h2>
        <div className="mt-6">
          <Prose paragraphs={about.background} />
        </div>
        <ClientMarquee />
        <Prose paragraphs={[about.education]} />
      </section>

      <hr className="my-16 border-white/15" />

      <section aria-labelledby="practice">
        <h2 id="practice" className="text-[#ffc600]">
          My practice
        </h2>
        <div className="mt-6">
          <Prose paragraphs={about.practice} />
        </div>
      </section>
    </div>
  );
}
