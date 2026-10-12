import { clients } from "@/lib/content";

export function ClientMarquee() {
  const items = [...clients, ...clients];

  return (
    <div className="client-marquee my-10 overflow-hidden border-y border-white/15 py-4">
      <p className="sr-only">Clients: {clients.join(", ")}</p>
      <div className="client-marquee-track flex w-max items-center gap-10">
        {items.map((client, index) => (
          <span
            key={`${client}-${index}`}
            data-clone={index >= clients.length ? "true" : undefined}
            aria-hidden={index >= clients.length ? true : undefined}
            className="font-heading text-[0.95rem] font-bold uppercase tracking-[-0.02em] text-white"
          >
            {client}
            <span className="ml-10 text-[#ffc600]" aria-hidden>
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
