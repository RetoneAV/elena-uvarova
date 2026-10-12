import type { Metadata } from "next";
import { ClientMarquee } from "@/components/client-marquee";
import { Prose } from "@/components/rich-text";
import {
  certifications,
  delivery,
  services,
  skillsAfterClients,
  skillsIntro,
  tools,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Skills & Services",
  description:
    "Creative development, experience design, technical production and production management for immersive work.",
};

export default function SkillsPage() {
  return (
    <div className="page-shell">
      <h1 className="max-w-[14ch]">Skills & Services</h1>
      <div className="mt-8">
        <Prose paragraphs={skillsIntro} />
      </div>
      <ClientMarquee />
      <Prose paragraphs={skillsAfterClients} />

      <div className="mt-16 grid gap-12">
        {services.map((service) => {
          const headingId = service.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
          return (
          <section key={service.title} aria-labelledby={headingId}>
            <h2 id={headingId} className="max-w-[20ch] text-[#ffc600]">
              {service.title}
            </h2>
            <p className="mt-4 text-[1.2rem] leading-[1.5]">{service.summary}</p>
            <ul className="mt-4 max-w-[44rem] space-y-2">
              {service.items.map((item) => (
                <li key={item} className="flex gap-3 text-[1.1rem] leading-[1.5]">
                  <span className="mt-[0.55em] size-1.5 shrink-0 bg-[#ffc600]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          );
        })}
      </div>

      <section className="mt-16" aria-labelledby="tools">
        <h2 id="tools" className="text-[#ffc600]">
          Tools and technologies
        </h2>
        <p className="mt-4 max-w-[44rem] text-[1.1rem] leading-[1.5]">{tools}</p>
      </section>

      <section className="mt-16" aria-labelledby="certifications">
        <h2 id="certifications" className="text-[#ffc600]">
          Certifications
        </h2>
        <ul className="mt-4 space-y-2">
          {certifications.map((item) => (
            <li key={item} className="flex gap-3 text-[1.1rem] leading-[1.5]">
              <span className="mt-[0.55em] size-1.5 shrink-0 bg-[#ffc600]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16" aria-labelledby="delivery">
        <h2 id="delivery" className="text-[#ffc600]">
          Delivery at a glance
        </h2>
        <dl className="mt-8 grid gap-8 sm:grid-cols-3">
          {delivery.map((item) => (
            <div key={item.figure}>
              <dt className="font-heading text-[clamp(2rem,1.4rem+1.5vw,2.6rem)] font-black leading-none tracking-[-0.02em] text-[#ffc600]">
                {item.figure}
              </dt>
              <dd className="mt-3 max-w-[18rem] text-[1rem] leading-[1.5] text-white/85">
                {item.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
