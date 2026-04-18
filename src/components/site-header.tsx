"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Container } from "@/components/container";
import { CONTACT_NUMBERS, whatsappHref } from "@/components/whatsapp";

const nav = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/calculator", label: "Calculator" },
  { href: "/contact", label: "Contact" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.71 2.88 18.29 9.17 12 2.88 5.71 4.29 4.29l6.3 6.31 6.3-6.31 1.41 1.42Z" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const primary = CONTACT_NUMBERS[0];
  const text =
    "Bună! Vreau o ofertă pentru izolație cu spumă poliuretanică. Suprafața este aproximativ ___ m², grosime ___ cm, locația ___.";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-3 md:h-20">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold tracking-tight">
          <span className="relative h-10 w-[190px] sm:h-12 sm:w-[220px] md:h-16 md:w-[320px]">
            <Image
              src="/logo.png"
              alt="Izotehno"
              fill
              sizes="(max-width: 640px) 190px, (max-width: 768px) 220px, 320px"
              priority
              className="object-contain"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "rounded-2xl px-4 py-2 text-sm font-semibold transition",
                  active
                    ? "bg-gradient-to-r from-emerald-600 to-sky-600 text-white shadow-sm"
                    : "text-slate-700 hover:bg-slate-100",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 md:hidden"
            aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
          <Link
            href={whatsappHref(primary.e164, text)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:from-emerald-700 hover:to-sky-700 md:inline-flex"
          >
            Cere ofertă
          </Link>
        </div>
      </Container>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-3">
            <div className="grid gap-2">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition",
                      active
                        ? "bg-gradient-to-r from-emerald-600 to-sky-600 text-white"
                        : "bg-slate-50 text-slate-900 hover:bg-slate-100",
                    ].join(" ")}
                  >
                    {item.label}
                    <span className="text-xs opacity-80">›</span>
                  </Link>
                );
              })}
              <Link
                href={whatsappHref(primary.e164, text)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-3 text-sm font-semibold text-white"
              >
                Cere ofertă pe WhatsApp
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

