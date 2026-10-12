import type { Metadata } from "next";
import { CtaLink } from "@/components/cta-link";
import { site, workWithMe } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work with me",
  description: workWithMe.intro,
};

export default function WorkWithMePage() {
  return (
    <div className="page-shell">
      <h1 className="max-w-[14ch]">Have an idea? Let&apos;s build it together.</h1>
      <p className="mt-8 max-w-[40rem] text-[1.1rem] leading-[1.5]">{workWithMe.intro}</p>

      <section className="mt-16" aria-labelledby="what-i-bring">
        <h2 id="what-i-bring" className="text-[#ffc600]">
          What I bring to your team
        </h2>
        <ul className="mt-8 grid max-w-[48rem] gap-8">
          {workWithMe.offers.map((offer) => (
            <li key={offer.title}>
              <h3>{offer.title}</h3>
              <p className="mt-2 text-[1.1rem] leading-[1.5]">{offer.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16" aria-labelledby="looking-for">
        <h2 id="looking-for" className="text-[#ffc600]">
          What I&apos;m looking for
        </h2>
        <p className="mt-6 max-w-[40rem] text-[1.1rem] leading-[1.5]">{workWithMe.lookingFor}</p>
        <p className="mt-4 max-w-[40rem] text-[1rem] leading-[1.5] text-white/70">
          A CV is available on request.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink href={site.cvMailto}>Request my CV</CtaLink>
          <CtaLink href="/projects" variant="outline">
            See projects
          </CtaLink>
        </div>
      </section>
    </div>
  );
}
