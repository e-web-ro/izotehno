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
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-500 to-sky-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 -top-24 size-[360px] rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 size-[420px] rounded-full bg-white/25 blur-3xl" />
        </div>
        <Container className="relative py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                <SparkIcon className="size-4" />
                Ofertă rapidă pe WhatsApp (Marian / Ana)
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                Izolații cu spumă poliuretanică, fără bătăi de cap
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/90">
                Alegi tipul (celulă deschisă/închisă), grosimea și suprafața. Îți dăm
                estimare instant și oferte rapide.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-white/90"
                >
                  Calculator de preț
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Contact rapid
                </Link>
              </div>

              <div className="mt-8 grid gap-2 text-sm text-white/90 sm:grid-cols-2">
                <div className="inline-flex items-center gap-2">
                  <CheckIcon className="size-5" /> Aplicare rapidă
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckIcon className="size-5" /> Etanșare excelentă
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckIcon className="size-5" /> Pierderi termice reduse
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckIcon className="size-5" /> Estimare transparentă
                </div>
              </div>
            </div>

            <PriceEstimator compact />
          </div>
        </Container>
      </div>

      {/* Quick actions */}
      <Container className="py-12">
        <div className="grid gap-4 lg:grid-cols-3">
          <Link
            href="/calculator"
            className="rounded-[28px] border border-black/5 bg-gradient-to-br from-emerald-50 to-white p-6 shadow-sm hover:shadow-md"
          >
            <div className="text-sm font-semibold text-zinc-900">
              Calculator de preț
            </div>
            <div className="mt-1 text-sm text-zinc-600">
              Estimare instant minim/maxim.
            </div>
            <div className="mt-4 text-sm font-semibold text-emerald-700">
              Deschide →
            </div>
          </Link>

          <Link
            href="/contact"
            className="rounded-[28px] border border-black/5 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm hover:shadow-md"
          >
            <div className="text-sm font-semibold text-zinc-900">Contact rapid</div>
            <div className="mt-1 text-sm text-zinc-600">
              Marian sau Ana, direct pe WhatsApp.
            </div>
            <div className="mt-4 text-sm font-semibold text-sky-700">
              Contactează →
            </div>
          </Link>

          <Link
            href="/portofoliu"
            className="rounded-[28px] border border-black/5 bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm hover:shadow-md"
          >
            <div className="text-sm font-semibold text-zinc-900">Portofoliu</div>
            <div className="mt-1 text-sm text-zinc-600">
              Exemple (demo acum, înlocuim cu ale tale).
            </div>
            <div className="mt-4 text-sm font-semibold text-teal-700">
              Vezi →
            </div>
          </Link>
        </div>
      </Container>

      <PortfolioStrip />
    </div>
  );
}
