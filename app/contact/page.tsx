import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CtaLink } from "@/components/cta-link";
import { contactIntro, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: contactIntro.body,
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div>
          <h1>{contactIntro.title}</h1>
          <p className="mt-6 max-w-[34rem] text-[1.1rem] leading-[1.5]">{contactIntro.body}</p>
          <dl className="mt-10 grid gap-5 text-[1.1rem]">
            <div>
              <dt className="text-[0.8rem] uppercase tracking-[0.16em] text-white/55">Email</dt>
              <dd className="mt-1">
                <a className="text-[#ffc600] underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.8rem] uppercase tracking-[0.16em] text-white/55">Phone</dt>
              <dd className="mt-1">
                <a className="hover:text-[#ffc600]" href={site.phoneHref}>
                  {site.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.8rem] uppercase tracking-[0.16em] text-white/55">LinkedIn</dt>
              <dd className="mt-1">
                <a className="hover:text-[#ffc600]" href={site.linkedin} target="_blank" rel="noreferrer">
                  elena-uvarova
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.8rem] uppercase tracking-[0.16em] text-white/55">CV</dt>
              <dd className="mt-1">
                <a className="hover:text-[#ffc600]" href={site.cvMailto}>
                  Request a copy
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.8rem] uppercase tracking-[0.16em] text-white/55">Based in</dt>
              <dd className="mt-1">{site.location}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <CtaLink href="/projects" variant="outline">
              See projects
            </CtaLink>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
