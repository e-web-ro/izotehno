"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/container";
import { CONTACT_NUMBERS, whatsappHref } from "@/components/whatsapp";
import { clamp, type FoamType, formatRon, PRICING } from "@/components/pricing";

function calc(ronPerM2: number, area: number) {
  const total = ronPerM2 * area;
  return {
    ronPerM2,
    total,
  };
}

function SparkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5 2l1.5 5L12 9l-5.5 2L5 16l-1.5-5L-2 9l5.5-2L5 2Zm14 6 1.1 3.7L24 13l-3.9 1.3L19 18l-1.1-3.7L14 13l3.9-1.3L19 8ZM10 12l1.6 5.3L17 19l-5.4 1.7L10 26l-1.6-5.3L3 19l5.4-1.7L10 12Z" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
    </svg>
  );
}

function parseArea(areaText: string) {
  const normalized = areaText.replace(",", ".").trim();
  const value = Number.parseFloat(normalized);
  if (!Number.isFinite(value)) return 0;
  return clamp(value, 0, 100000);
}

export default function CalculatorPage() {
  const [foamType, setFoamType] = React.useState<FoamType>("open");
  const [areaText, setAreaText] = React.useState<string>("100");
  const area = React.useMemo(() => parseArea(areaText), [areaText]);
  const [county, setCounty] = React.useState<string>("");
  const [locality, setLocality] = React.useState<string>("");

  const options = PRICING[foamType].options;
  const [thickness, setThickness] = React.useState<number>(options[0]?.cm ?? 10);

  React.useEffect(() => {
    const nextOptions = PRICING[foamType].options;
    if (!nextOptions.some((o) => o.cm === thickness)) {
      setThickness(nextOptions[0]?.cm ?? thickness);
    }
  }, [foamType, thickness]);

  const selected = options.find((o) => o.cm === thickness) ?? options[0];

  const min = selected ? calc(selected.minRonPerM2, area) : null;
  const max = selected ? calc(selected.maxRonPerM2, area) : null;

  const summaryLine = selected
    ? `${foamType === "open" ? "Celulă deschisă" : "Celulă închisă"}, ${selected.cm} cm, ${area || 0} m²`
    : "";

  const message =
    "Bună! Vreau o ofertă pentru izolație cu spumă poliuretanică.\n" +
    `Calculator: ${summaryLine}\n` +
    (selected
      ? `Estimare: ${formatRon(selected.minRonPerM2)}–${formatRon(
          selected.maxRonPerM2,
        )} RON/mp\n` +
        `Total: ${formatRon(min?.total ?? 0)}–${formatRon(max?.total ?? 0)} RON\n`
      : "") +
    `Județ: ${county || "___"}\n` +
    `Localitate: ${locality || "___"}\n` +
    "Tip lucrare (pereți/interior/exterior etc.): ___\n" +
    "Poze (dacă ai): ___";

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-500 to-sky-600">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 -top-24 size-[360px] rounded-full bg-white/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-24 size-[420px] rounded-full bg-white/25 blur-3xl" />
        </div>
        <Container className="relative py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                <SparkIcon className="size-4" />
                Preț estimativ rapid
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Calculator de preț (RON/mp & total)
              </h1>
              <p className="mt-3 max-w-xl text-base leading-7 text-white/90">
                Selectezi tipul de spumă, grosimea și suprafața. Vezi imediat un
                interval minim–maxim și poți trimite rezultatul direct pe WhatsApp.
              </p>

              <div className="mt-6 grid gap-2 text-sm text-white/90 sm:grid-cols-2">
                <div className="inline-flex items-center gap-2">
                  <CheckIcon className="size-5" /> Estimare instant
                </div>
                <div className="inline-flex items-center gap-2">
                  <CheckIcon className="size-5" /> Preț minim/maxim
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/20 bg-white/10 p-5 text-white shadow-sm backdrop-blur">
              <div className="text-sm font-semibold">Rezumat</div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-black/20 p-4">
                  <div className="text-xs font-semibold text-white/85">RON/mp</div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight">
                    {selected
                      ? `${formatRon(selected.minRonPerM2)}–${formatRon(
                          selected.maxRonPerM2,
                        )}`
                      : "—"}
                  </div>
                </div>
                <div className="rounded-2xl bg-black/20 p-4">
                  <div className="text-xs font-semibold text-white/85">Total (RON)</div>
                  <div className="mt-2 text-2xl font-semibold tracking-tight">
                    {selected
                      ? `${formatRon(min?.total ?? 0)}–${formatRon(max?.total ?? 0)}`
                      : "—"}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-white/85">
                {summaryLine || "—"}
              </div>
              <div className="mt-4 flex gap-3">
                <Link
                  href={whatsappHref(CONTACT_NUMBERS[0].e164, message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-white/90"
                >
                  Marian
                </Link>
                <Link
                  href={whatsappHref(CONTACT_NUMBERS[1].e164, message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/15"
                >
                  Ana
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Inputs */}
          <div className="lg:col-span-7">
            <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Completează opțiunile
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Alege tipul, grosimea și suprafața (m²).
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  Contact
                </Link>
              </div>

              <div className="mt-6 grid gap-6">
                {/* Foam type */}
                <div>
                  <div className="text-sm font-semibold text-zinc-900">Tip spumă</div>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setFoamType("open")}
                      className={[
                        "rounded-2xl border px-4 py-4 text-left transition",
                        foamType === "open"
                          ? "border-emerald-200 bg-emerald-50"
                          : "border-black/10 bg-white hover:bg-zinc-50",
                      ].join(" ")}
                    >
                      <div className="text-sm font-semibold text-zinc-900">
                        Celulă deschisă
                      </div>
                      <div className="mt-1 text-xs leading-5 text-zinc-600">
                        Interior, respiră, fonic + termic
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFoamType("closed")}
                      className={[
                        "rounded-2xl border px-4 py-4 text-left transition",
                        foamType === "closed"
                          ? "border-sky-200 bg-sky-50"
                          : "border-black/10 bg-white hover:bg-zinc-50",
                      ].join(" ")}
                    >
                      <div className="text-sm font-semibold text-zinc-900">
                        Celulă închisă
                      </div>
                      <div className="mt-1 text-xs leading-5 text-zinc-600">
                        Densă, rigidă, hidroizolație
                      </div>
                    </button>
                  </div>
                  <div className="mt-3 text-xs text-zinc-500">
                    {PRICING[foamType].subtitle}
                  </div>
                </div>

                {/* Thickness */}
                <div>
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">
                        Grosime strat
                      </div>
                      <div className="mt-1 text-xs text-zinc-500">
                        Alege una dintre grosimile disponibile.
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-zinc-900">
                      {thickness} cm
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {options.map((o) => {
                      const active = o.cm === thickness;
                      return (
                        <button
                          key={o.cm}
                          type="button"
                          onClick={() => setThickness(o.cm)}
                          className={[
                            "rounded-2xl border px-3 py-3 text-left transition",
                            active
                              ? "border-black/10 bg-gradient-to-r from-emerald-600 to-sky-600 text-white"
                              : "border-black/10 bg-white hover:bg-zinc-50",
                          ].join(" ")}
                        >
                          <div className="text-sm font-semibold">{o.cm} cm</div>
                          <div className={active ? "text-xs text-white/85" : "text-xs text-zinc-500"}>
                            {formatRon(o.minRonPerM2)}–{formatRon(o.maxRonPerM2)} RON/mp
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Area */}
                <div className="rounded-[24px] border border-black/5 bg-zinc-50 p-5">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">
                        Suprafață (m²)
                      </div>
                      <div className="mt-1 text-xs text-zinc-500">
                        Poți scrie și cu virgulă (ex: 120,5).
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-zinc-900">
                      {area || 0} m²
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[1fr_160px] sm:items-center">
                    <input
                      type="range"
                      min={0}
                      max={2000}
                      step={1}
                      value={Math.min(2000, Math.max(0, Math.round(area)))}
                      onChange={(e) => setAreaText(String(e.target.value))}
                      className="w-full accent-emerald-600"
                      aria-label="Suprafață în metri pătrați"
                    />
                    <input
                      inputMode="decimal"
                      value={areaText}
                      onChange={(e) => setAreaText(e.target.value)}
                      placeholder="ex: 120"
                      className="h-11 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-zinc-900">
                      Județ
                    </span>
                    <input
                      value={county}
                      onChange={(e) => setCounty(e.target.value)}
                      placeholder="ex: Bihor"
                      className="h-11 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-zinc-900">
                      Localitate
                    </span>
                    <input
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      placeholder="ex: Oradea"
                      className="h-11 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Result sticky */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-zinc-900">
                  Rezultat estimativ
                </div>
                <div className="mt-1 text-sm text-zinc-600">
                  {PRICING[foamType].title}
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-5">
                    <div className="text-xs font-semibold text-zinc-700">
                      Total (RON)
                    </div>
                    <div className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
                      {selected
                        ? `${formatRon(min?.total ?? 0)}–${formatRon(max?.total ?? 0)}`
                        : "—"}
                    </div>
                    <div className="mt-2 text-sm text-zinc-700">
                      <span className="font-semibold text-zinc-900">RON/mp:</span>{" "}
                      {selected
                        ? `${formatRon(selected.minRonPerM2)}–${formatRon(
                            selected.maxRonPerM2,
                          )}`
                        : "—"}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-zinc-700">
                    <div className="text-xs font-semibold text-zinc-700">
                      Detalii
                    </div>
                    <div className="mt-2">
                      <span className="font-semibold text-zinc-900">Tip:</span>{" "}
                      {foamType === "open" ? "Celulă deschisă" : "Celulă închisă"}
                      {" · "}
                      <span className="font-semibold text-zinc-900">Grosime:</span>{" "}
                      {thickness} cm
                      {" · "}
                      <span className="font-semibold text-zinc-900">Suprafață:</span>{" "}
                      {area || 0} m²
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Link
                    href={whatsappHref(CONTACT_NUMBERS[0].e164, message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:from-emerald-700 hover:to-sky-700"
                  >
                    Trimite (Marian)
                  </Link>
                  <Link
                    href={whatsappHref(CONTACT_NUMBERS[1].e164, message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                  >
                    Trimite (Ana)
                  </Link>
                </div>

                <p className="mt-4 text-xs leading-5 text-zinc-500">
                  Estimarea este orientativă. Prețul final depinde de acces, pregătirea
                  suportului, geometrie, consum și condiții de șantier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

