import Link from "next/link";
import { Container } from "@/components/container";
import { CONTACT_NUMBERS, whatsappHref } from "@/components/whatsapp";
import { LOCATIONS } from "@/components/locations";

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
    </svg>
  );
}

function BoltIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M11 21h-1l1-7H7.5a1 1 0 0 1-.8-1.6l7-10A1 1 0 0 1 15.5 3L14 10h3.5a1 1 0 0 1 .8 1.6l-7 9.8A1 1 0 0 1 11 21Z" />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2 4 5v6c0 5.55 3.84 10.74 8 11 4.16-.26 8-5.45 8-11V5l-8-3Zm0 17.8c-2.9-.74-6-4.92-6-8.8V6.3l6-2.25 6 2.25V11c0 3.88-3.1 8.06-6 8.8Z" />
    </svg>
  );
}

export const metadata = {
  title: "Servicii",
  description:
    "Servicii de izolații cu spumă poliuretanică: celulă deschisă/închisă, consultanță, ofertare rapidă și execuție profesionistă.",
};

export default function ServiciiPage() {
  const text =
    "Bună! Vreau o ofertă pentru izolație cu spumă poliuretanică. Suprafața este aproximativ ___ m², grosime ___ cm, locația ___.";

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-500 to-sky-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 -top-24 size-[360px] rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 size-[420px] rounded-full bg-white/25 blur-3xl" />
        </div>
        <Container className="relative py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                <ShieldIcon className="size-4" />
                Izolații cu spumă poliuretanică
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Ce facem (pe scurt)
              </h1>
              <p className="mt-3 max-w-xl text-base leading-7 text-white/90">
                Aplicăm spumă poliuretanică cu celulă deschisă sau închisă pentru
                izolare termică și etanșare. Te ajutăm să alegi varianta potrivită
                și îți facem ofertă rapidă.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-white/90"
                >
                  Calculator de preț
                </Link>
                <Link
                  href={whatsappHref(CONTACT_NUMBERS[0].e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Cere ofertă (WhatsApp)
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/20 bg-white/10 p-6 text-white shadow-sm backdrop-blur">
              <div className="text-sm font-semibold">Avantaje</div>
              <div className="mt-4 grid gap-2 text-sm text-white/90">
                <div className="inline-flex items-center gap-2">
                  <CheckIcon className="size-5" /> Aplicare rapidă
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckIcon className="size-5" /> Etanșare fără rosturi
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckIcon className="size-5" /> Pierderi termice reduse
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckIcon className="size-5" /> Estimare transparentă
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  href={whatsappHref(CONTACT_NUMBERS[0].e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-black/20 px-4 py-3 text-sm font-semibold hover:bg-black/25"
                >
                  Marian
                </Link>
                <Link
                  href={whatsappHref(CONTACT_NUMBERS[1].e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-black/20 px-4 py-3 text-sm font-semibold hover:bg-black/25"
                >
                  Ana
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-12">
        <div className="grid gap-10">
          <section className="grid gap-4 lg:grid-cols-3 lg:items-start">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Tipuri de spumă
            </h2>
            <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
              <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                  Celulă deschisă
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Recomandată pentru interior: mai moale, respiră, bună pentru
                  confort termic și fonic.
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                  <li className="inline-flex items-center gap-2">
                    <CheckIcon className="size-5 text-emerald-600" /> Interior (pereți/planșeu)
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CheckIcon className="size-5 text-emerald-600" /> Izolare fonică bună
                  </li>
                </ul>
              </div>
              <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-800">
                  Celulă închisă
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Densă și rigidă. Poate funcționa și ca hidroizolație și oferă
                  rezistență structurală în anumite aplicații.
                </p>
                <ul className="mt-4 grid gap-2 text-sm text-zinc-700">
                  <li className="inline-flex items-center gap-2">
                    <CheckIcon className="size-5 text-sky-600" /> Densă, rigidă
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <CheckIcon className="size-5 text-sky-600" /> Barieră suplimentară la apă
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-3 lg:items-start">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Unde aplicăm
            </h2>
            <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
              {[
                {
                  title: "Pereți interiori/exteriori",
                  desc: "Etanșare și confort termic, reducere infiltrații de aer.",
                },
                {
                  title: "Structuri din lemn",
                  desc: "Umplere uniformă între montanți/rigle, fără rosturi.",
                },
                {
                  title: "Planșee / tavane",
                  desc: "Strat continuu, ajută la eliminarea punților termice.",
                },
                {
                  title: "Zone greu accesibile",
                  desc: "Spuma se mulează pe suport, ideală pentru detalii.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-[28px] border border-black/5 bg-gradient-to-br from-zinc-50 to-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                    <BoltIcon className="size-5 text-emerald-600" />
                    {x.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{x.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-3 lg:items-start">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Proces (simplu)
            </h2>
            <div className="lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    step: "1",
                    title: "Discutăm & estimăm",
                    desc: "Tip spumă, grosime, m², locație, poze dacă ai.",
                  },
                  {
                    step: "2",
                    title: "Măsurăm & pregătim",
                    desc: "Confirmăm suprafața și condițiile de lucru.",
                  },
                  {
                    step: "3",
                    title: "Aplicăm & predăm",
                    desc: "Aplicare rapidă, verificări, recomandări.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm"
                  >
                    <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 text-sm font-semibold text-white">
                      {s.step}
                    </div>
                    <div className="mt-4 text-sm font-semibold text-zinc-900">
                      {s.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-black/5 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-7 shadow-sm">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  Vrei ofertă rapidă?
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Trimite pe WhatsApp: suprafață (m²), grosime (cm), locație și 2–3
                  poze. Primești răspuns cât mai repede.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50"
                >
                  Calculator
                </Link>
                <Link
                  href={whatsappHref(CONTACT_NUMBERS[0].e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-3 text-sm font-semibold text-white hover:from-emerald-700 hover:to-sky-700"
                >
                  Marian
                </Link>
                <Link
                  href={whatsappHref(CONTACT_NUMBERS[1].e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  Ana
                </Link>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm">
            <div className="grid gap-4 lg:grid-cols-3 lg:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  Zone acoperite
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Lucrăm frecvent în zonele de mai jos și ne deplasăm și în alte județe,
                  în funcție de proiect.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="flex flex-wrap gap-2">
                  {LOCATIONS.map((l) => (
                    <Link
                      key={l.slug}
                      href={`/zone/${l.slug}`}
                      className="rounded-full border border-black/10 bg-zinc-50 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}

