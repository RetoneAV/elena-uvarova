"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/content";
import { cn } from "cn";

type FieldName = "name" | "email" | "message";

const fieldClass =
  "h-12 rounded-[6.4px] border-white/25 bg-white/5 px-3 text-[1rem] text-white placeholder:text-white/40";

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const nextErrors: Partial<Record<FieldName, string>> = {};

    if (!name) nextErrors.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Add a valid email address.";
    }
    if (!message) {
      nextErrors.message = "Say what you're hiring for or working on.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company || "—"}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[0.5rem] border border-white/15 bg-white/5 p-6" role="status">
        <h2 className="text-[#ffc600]">Message ready</h2>
        <p className="mt-4 max-w-[40rem] text-[1.1rem] leading-[1.5]">
          Your email app should open with this note addressed to {site.email}. If
          it doesn&apos;t, write to that address directly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6 h-auto rounded-[6.4px] border-white/40 bg-transparent px-[1.3rem] py-4 text-[1rem] font-normal uppercase tracking-[0.04em] text-white hover:bg-white hover:text-black"
          onClick={() => setSent(false)}
        >
          Edit message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <Field
        id="name"
        label="Name"
        error={errors.name}
      >
        <Input
          id="name"
          name="name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClass}
        />
      </Field>
      <Field id="company" label="Company">
        <Input
          id="company"
          name="company"
          autoComplete="organization"
          className={fieldClass}
        />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldClass}
        />
      </Field>
      <Field
        id="message"
        label="What are you hiring for or working on?"
        error={errors.message}
      >
        <Textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass, "h-auto min-h-36 py-3")}
        />
      </Field>
      <div>
        <Button
          type="submit"
          className="h-auto rounded-[6.4px] bg-[#ffc600] px-[1.3rem] py-4 text-[1rem] font-normal uppercase tracking-[0.04em] text-black hover:bg-[#ffd54a]"
        >
          Send message
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-[0.9rem] font-normal tracking-[0.04em] text-white">
        {label}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-[0.9rem] text-[#ffb4a8]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
