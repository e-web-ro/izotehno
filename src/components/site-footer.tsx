"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { CONTACT_NUMBERS, whatsappHref } from "@/components/whatsapp";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const text =
    "Bună! Vreau o ofertă pentru izolație cu spumă poliuretanică. Suprafața este aproximativ ___ m², grosime ___ cm, locația ___.";

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-lg font-semibold tracking-tight text-slate-900">Izotehno</div>
            <p className="text-sm leading-6 text-slate-600">
              Izolații cu spumă poliuretanică pentru locuințe și industrial. Ofertă rapidă, consultanță și execuție profesionistă.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-slate-900">Link-uri utile</div>
            <ul className="grid gap-2 text-sm text-slate-600">
              <li>
                <Link className="transition hover:text-slate-900" href="/servicii">
                  Servicii
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-slate-900" href="/portofoliu">
                  Portofoliu
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-slate-900" href="/calculator">
                  Calculator estimativ
                </Link>
              </li>
              <li>
                <Link className="transition hover:text-slate-900" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <ul className="grid gap-2 text-sm text-slate-600">
              <li>
                <span className="font-medium text-slate-900">Telefon:</span>{" "}
                {CONTACT_NUMBERS.map((n, i) => (
                  <span key={n.e164}>
                    {i > 0 ? " · " : null}
                    <a
                      className="transition hover:text-slate-900"
                      href={`tel:+${n.e164}`}
                    >
                      {n.label}: {n.raw}
                    </a>
                  </span>
                ))}
              </li>
              <li>
                <span className="font-medium text-slate-900">Email:</span>{" "}
                <a className="transition hover:text-slate-900" href="mailto:contact@izotehno.ro">
                  contact@izotehno.ro
                </a>
              </li>
              <li className="pt-1">
                <span className="font-medium text-slate-900">WhatsApp:</span>{" "}
                <a
                  className="transition hover:text-slate-900"
                  href={whatsappHref(CONTACT_NUMBERS[0].e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_NUMBERS[0].raw}
                </a>
                {" · "}
                <a
                  className="transition hover:text-slate-900"
                  href={whatsappHref(CONTACT_NUMBERS[1].e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_NUMBERS[1].raw}
                </a>
              </li>
              <li className="pt-1">
                <span className="font-medium text-slate-900">Facebook:</span>{" "}
                <a
                  className="transition hover:text-slate-900"
                  href="https://www.facebook.com/profile.php?id=61573306575903"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Izotehno
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>
            © {year} Izotehno. Toate drepturile rezervate. {" "}
            <span className="text-slate-300">•</span>{" "}
            <a
              className="font-semibold text-slate-700 transition hover:text-slate-900"
              href="https://e-web.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site realizat de e-web.ro
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-4">
              <Link className="transition hover:text-slate-900" href="/politica-confidentialitate">
                Politica de confidențialitate
              </Link>
              <Link className="transition hover:text-slate-900" href="/termeni">
                Termeni
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100"
                aria-label="ANPC SAL"
              >
                <Image
                  src="/250x50_icon_ANPC-SAL.webp"
                  alt="ANPC SAL"
                  width={250}
                  height={50}
                  className="h-7 w-auto"
                />
              </a>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 hover:bg-slate-100"
                aria-label="ANPC SOL (ODR)"
              >
                <Image
                  src="/250x50_icon_ANPC-SOL.webp"
                  alt="ANPC SOL"
                  width={250}
                  height={50}
                  className="h-7 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

