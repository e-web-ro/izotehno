import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { CONTACT_NUMBERS, whatsappHref } from "@/components/whatsapp";
import { LOCATIONS, getLocationBySlug } from "@/components/locations";

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return {};

  const title = `Izolații spumă poliuretanică ${loc.name}`;
  const description =
    `${loc.shortIntro} ` +
    `Calculator estimativ, contact rapid pe WhatsApp (${CONTACT_NUMBERS[0].label}/${CONTACT_NUMBERS[1].label}) și ofertă în funcție de m² și grosime.`;

  return {
    title,
    description,
    alternates: { canonical: `/zone/${loc.slug}` },
    openGraph: {
      title,
      description,
      url: `/zone/${loc.slug}`,
      locale: "ro_RO",
      type: "website",
    },
  };
}

export default async function ZonaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return notFound();

  const text =
    `Bună! Vreau o ofertă pentru izolație cu spumă poliuretanică în ${loc.name}. ` +
    "Suprafața este aproximativ ___ m², grosime ___ cm, județ/localitate: ___/___, tip lucrare: ___.";

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-zinc-50 to-white">
        <Container className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              Lucrăm în zona ta
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              Izolații cu spumă poliuretanică în {loc.name}
            </h1>
            <p className="mt-3 text-base leading-7 text-zinc-600">
              {loc.shortIntro}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:from-emerald-700 hover:to-sky-700"
              >
                Calculator de preț
              </Link>
              <Link
                href={whatsappHref(CONTACT_NUMBERS[0].e164, text)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                WhatsApp {CONTACT_NUMBERS[0].label}
              </Link>
              <Link
                href={whatsappHref(CONTACT_NUMBERS[1].e164, text)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                WhatsApp {CONTACT_NUMBERS[1].label}
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-zinc-900">
                  Pentru ce lucrări?
                </div>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-zinc-600">
                  <li>- pereți interiori / exteriori</li>
                  <li>- planșee / tavane</li>
                  <li>- structuri din lemn</li>
                  <li>- zone greu accesibile (etanșare)</li>
                </ul>
              </div>
              <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-zinc-900">
                  Ce ne trimiți pentru ofertă rapidă?
                </div>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-zinc-600">
                  <li>- suprafață (m²) + grosime (cm)</li>
                  <li>- județ + localitate</li>
                  <li>- tip lucrare (pereți, interior/exterior)</li>
                  <li>- 2–3 poze (dacă ai)</li>
                </ul>
              </div>
            </div>

            {loc.nearby?.length ? (
              <div className="mt-10 rounded-[28px] border border-black/5 bg-zinc-50 p-6">
                <div className="text-sm font-semibold text-zinc-900">
                  Zone apropiate
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {loc.nearby.map((x) => (
                    <span
                      key={x}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-700 border border-black/5"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-10 text-sm text-zinc-500">
              <Link className="hover:text-black" href="/servicii">
                Vezi servicii
              </Link>
              {" · "}
              <Link className="hover:text-black" href="/portofoliu">
                Vezi portofoliu
              </Link>
              {" · "}
              <Link className="hover:text-black" href="/contact">
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

