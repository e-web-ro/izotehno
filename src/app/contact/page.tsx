import Link from "next/link";
import { Container } from "@/components/container";
import { CONTACT_NUMBERS, whatsappHref } from "@/components/whatsapp";

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.92a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.63 2.2Z" />
    </svg>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46 0 .12 5.34.12 11.94c0 2.1.54 4.14 1.56 5.94L0 24l6.3-1.62a11.9 11.9 0 0 0 5.76 1.47h.01c6.6 0 11.94-5.34 11.94-11.94 0-3.18-1.24-6.17-3.49-8.43ZM12.07 21.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.96.99-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.29C2.14 6.44 6.57 2.01 12.07 2.01c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.5-4.39 9.41-9.89 9.41Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.66-1.6-.9-2.2-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.52.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8Zm.75-12h-1.5v5.25l4.5 2.7.75-1.23-3.75-2.22Z" />
    </svg>
  );
}

function PinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z" />
    </svg>
  );
}

export const metadata = {
  title: "Contact",
  description:
    "Contact rapid pentru ofertă izolație cu spumă poliuretanică. Trimite mesaj pe WhatsApp sau sună direct.",
};

export default function ContactPage() {
  const text =
    "Bună! Vreau o ofertă pentru izolație cu spumă poliuretanică. Suprafața este aproximativ ___ m², grosime ___ cm, locația ___.";

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-500 to-sky-600 opacity-90" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-24 -top-24 h-[320px] w-[320px] rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 h-[380px] w-[380px] rounded-full bg-white/15 blur-3xl" />
        </div>

        <Container className="relative py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                <WhatsAppIcon className="h-4 w-4" />
                Răspuns rapid pe WhatsApp
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Contact rapid și ofertă personalizată
              </h1>
              <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg">
                Alege Marian sau Ana și trimite detaliile pe WhatsApp. Suntem gata să îți răspundem rapid și să îți oferim estimare clară.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={whatsappHref(CONTACT_NUMBERS[0].e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-600/10 transition hover:bg-slate-100"
                >
                  Scrie lui Marian
                </Link>
                <Link
                  href={whatsappHref(CONTACT_NUMBERS[1].e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Scrie Anei
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm">
              <div className="space-y-4 text-sm text-white/90">
                <div className="rounded-3xl bg-white/10 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <ClockIcon className="h-5 w-5 text-emerald-200" />
                    Program
                  </div>
                  <p className="mt-2 text-sm text-white/80">Luni–Sâmbătă: 08:00–19:00</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <PinIcon className="h-5 w-5 text-emerald-200" />
                    Zonă
                  </div>
                  <p className="mt-2 text-sm text-white/80">România (detalii exacte la telefon)</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Ce să ne trimiți pentru o ofertă exactă</h2>
              <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-600">
                <li>
                  <span className="font-semibold text-slate-900">Suprafața</span> (m²) și <span className="font-semibold text-slate-900">grosimea</span> (cm)
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Locația</span> (oraș/județ)
                </li>
                <li>
                  <span className="font-semibold text-slate-900">Tip lucrare</span> (pereți interior/exterior, structură lemn, zidărie etc.)
                </li>
                <li>
                  2–3 <span className="font-semibold text-slate-900">poze</span> cu zona de aplicare
                </li>
              </ul>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">Mesaj rapid (copy/paste)</div>
              <div className="mt-3 whitespace-pre-wrap rounded-3xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                {text}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href={whatsappHref(CONTACT_NUMBERS[0].e164, text)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Trimite (Marian)
              </Link>
              <Link
                href={whatsappHref(CONTACT_NUMBERS[1].e164, text)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                <WhatsAppIcon className="h-5 w-5 text-emerald-700" />
                Trimite (Ana)
              </Link>
            </div>

            <Link
              href="/calculator"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
            >
              Calculator estimativ
            </Link>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Alege una dintre opțiuni</div>
            <div className="mt-5 space-y-3">
              <div className="rounded-3xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                Trimite măsurători și poze pentru ofertă mai rapidă.
              </div>
              <div className="rounded-3xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                Preferi telefonul? Sună și stabilim detaliile pe loc.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

