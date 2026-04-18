import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PriceEstimator } from "@/components/price-estimator";
import { PortfolioStrip } from "@/components/portfolio-strip";

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
    </svg>
  );
}

function SparkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5 2l1.5 5L12 9l-5.5 2L5 16l-1.5-5L-2 9l5.5-2L5 2Zm14 6 1.1 3.7L24 13l-3.9 1.3L19 18l-1.1-3.7L14 13l3.9-1.3L19 8ZM10 12l1.6 5.3L17 19l-5.4 1.7L10 26l-1.6-5.3L3 19l5.4-1.7L10 12Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-500 to-sky-600 opacity-95" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-24 -top-24 h-[360px] w-[360px] rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 h-[420px] w-[420px] rounded-full bg-white/15 blur-3xl" />
        </div>

        <Container className="relative py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                <SparkIcon className="h-4 w-4" />
                Ofertă rapidă pe WhatsApp (Marian / Ana)
              </div>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Izolații cu spumă poliuretanică, moderne și profesionale
              </h1>
              <p className="mt-5 text-base leading-7 text-white/85 sm:text-lg">
                Alege tipul de spumă, grosimea și suprafața, iar noi îți livrăm o estimare transparentă și ofertă rapidă pe WhatsApp.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-600/10 transition hover:bg-slate-100"
                >
                  Calculator de preț
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                >
                  Contact rapid
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Aplicare rapidă",
                  "Etanșare fără rosturi",
                  "Estimare transparentă",
                  "Echipă cu experiență",
                ].map((label) => (
                  <div key={label} className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/90">
                    <CheckIcon className="h-5 w-5" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 rounded-[32px] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/10 backdrop-blur-sm">
              <PriceEstimator compact />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-3">
          <Link
            href="/calculator"
            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-sm font-semibold text-slate-900">Calculator de preț</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">Vezi estimare minim/maxim instant.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">Deschide →</div>
          </Link>

          <Link
            href="/contact"
            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-sm font-semibold text-slate-900">Contact rapid</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">Marian sau Ana, direct pe WhatsApp.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">Contactează →</div>
          </Link>

          <Link
            href="/portofoliu"
            className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="text-sm font-semibold text-slate-900">Portofoliu</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">Vezi lucrările noastre reale.</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">Vezi →</div>
          </Link>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">Despre noi</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Izolații cu spumă poliuretanică, făcute corect</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Suntem o echipă cu experiență în izolații spumă poliuretanică (celulă deschisă și închisă). Ne concentrăm pe execuție curată, etanșare eficientă și comunicare rapidă cu clientul.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Acoperim frecvent zona <span className="font-semibold text-slate-900">Buzău</span>, <span className="font-semibold text-slate-900">Vrancea</span> și localități din jur, dar ne deplasăm și în toată țara pentru proiecte potrivite.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/servicii" className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50">Vezi servicii</Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-emerald-700 hover:to-sky-700">Contact rapid</Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/poza-16.jpg"
                  alt="Izolație cu spumă poliuretanică — Izotehno"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-5">
                <div className="text-sm font-semibold text-white">Lucrări reale din portofoliu</div>
                <div className="mt-1 text-xs text-white/80">Vezi mai multe în secțiunea Portofoliu.</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <PortfolioStrip />
    </div>
  );
}