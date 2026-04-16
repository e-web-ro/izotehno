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
    <footer className="border-t border-black/5 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="text-lg font-semibold tracking-tight">Izotehno</div>
            <p className="text-sm leading-6 text-zinc-600">
              Izolații cu spumă poliuretanică pentru locuințe și industrial. Ofertă
              rapidă, consultanță și execuție profesionistă.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Pagini</div>
            <ul className="grid gap-2 text-sm text-zinc-600">
              <li>
                <Link className="hover:text-black" href="/servicii">
                  Servicii
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/portofoliu">
                  Portofoliu
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/calculator">
                  Calculator estimativ
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold">Contact</div>
            <ul className="grid gap-2 text-sm text-zinc-600">
              <li>
                <span className="font-medium text-zinc-900">Telefon:</span>{" "}
                <a className="hover:text-black" href="tel:+40763889348">
                  0763 889 348
                </a>
                {" · "}
                <a className="hover:text-black" href="tel:+40762710101">
                  0762 710 101
                </a>
              </li>
              <li>
                <span className="font-medium text-zinc-900">Email:</span>{" "}
                <a className="hover:text-black" href="mailto:oferta@izotehno.ro">
                  oferta@izotehno.ro
                </a>
              </li>
              <li className="pt-1">
                <span className="font-medium text-zinc-900">WhatsApp:</span>{" "}
                <a
                  className="hover:text-black"
                  href={whatsappHref(CONTACT_NUMBERS[0].e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_NUMBERS[0].raw}
                </a>
                {" · "}
                <a
                  className="hover:text-black"
                  href={whatsappHref(CONTACT_NUMBERS[1].e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT_NUMBERS[1].raw}
                </a>
              </li>
              <li className="pt-1">
                <span className="font-medium text-zinc-900">Facebook:</span>{" "}
                <a
                  className="hover:text-black"
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

        <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>
            © {year} Izotehno. Toate drepturile rezervate.{" "}
            <span className="text-zinc-400">•</span>{" "}
            <a
              className="font-semibold text-zinc-600 hover:text-black"
              href="https://e-web.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Site realizat de e-web.ro
            </a>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <div className="flex gap-4">
              <Link className="hover:text-black" href="/politica-confidentialitate">
                Politica de confidențialitate
              </Link>
              <Link className="hover:text-black" href="/termeni">
                Termeni
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://anpc.ro/ce-este-sal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-black/10 bg-white px-3 py-2 hover:bg-zinc-50"
                aria-label="ANPC SAL"
              >
                <Image
                  src="/250x50_icon_ANPC-SAL.webp"
                  alt="ANPC SAL"
                  width={250}
                  height={50}
                  className="h-6 w-auto sm:h-7"
                />
              </a>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl border border-black/10 bg-white px-3 py-2 hover:bg-zinc-50"
                aria-label="ANPC SOL (ODR)"
              >
                <Image
                  src="/250x50_icon_ANPC-SOL.webp"
                  alt="ANPC SOL"
                  width={250}
                  height={50}
                  className="h-6 w-auto sm:h-7"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

