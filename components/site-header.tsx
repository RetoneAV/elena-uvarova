"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { cn } from "cn";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="relative z-50 mx-auto flex max-w-[96rem] items-center justify-between gap-6 bg-black px-6 py-5 md:px-10">
        <Link
          href="/"
          className="font-heading text-[1.25rem] font-black uppercase leading-none tracking-[-0.02em] text-white md:text-[1.7rem]"
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-[1rem] uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white",
                  active &&
                    "text-white underline decoration-[#ffc600] decoration-2 underline-offset-[10px]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-[6.4px] border border-white/25 text-white xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-0 z-40 overflow-y-auto bg-black px-6 pt-24 md:px-10 xl:hidden"
          aria-label="Primary"
        >
          <ul className="flex flex-col gap-5">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-heading text-[1.6rem] font-black uppercase leading-[1.2] tracking-[-0.02em] text-white",
                      active && "text-[#ffc600]",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
