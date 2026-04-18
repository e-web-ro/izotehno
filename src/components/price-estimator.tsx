"use client";

import * as React from "react";
import Link from "next/link";
import { CONTACT_NUMBERS, whatsappHref } from "@/components/whatsapp";
import { clamp, type FoamType, formatRon, PRICING } from "@/components/pricing";

function calc(ronPerM2: number, area: number) {
  return ronPerM2 * area;
}

export function PriceEstimator({ compact }: { compact?: boolean }) {
  const [foamType, setFoamType] = React.useState<FoamType>("open");
  const [areaText, setAreaText] = React.useState<string>("100");
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

  const area = React.useMemo(() => {
    const normalized = areaText.replace(",", ".").trim();
    const value = Number.parseFloat(normalized);
    if (!Number.isFinite(value)) return 0;
    return clamp(value, 0, 100000);
  }, [areaText]);

  const selected = options.find((o) => o.cm === thickness) ?? options[0];
  const minTotal = selected ? calc(selected.minRonPerM2, area) : 0;
  const maxTotal = selected ? calc(selected.maxRonPerM2, area) : 0;

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
        `Total: ${formatRon(minTotal)}–${formatRon(maxTotal)} RON\n`
      : "") +
    `Județ: ${county || "___"}\n` +
    `Localitate: ${locality || "___"}\n` +
    "Tip lucrare (pereți/interior/exterior etc.): ___\n" +
    "Poze (dacă ai): ___";

  return (
    <div
      className={[
        "min-w-0 w-full rounded-[28px] border border-black/5 bg-white text-zinc-900 shadow-xl shadow-black/10",
        compact ? "p-4 sm:p-6" : "p-6",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            Preț estimativ
            <span className="text-emerald-700/70">•</span>
            {PRICING[foamType].subtitle}
          </div>
        </div>
        <Link
          href="/calculator"
          className="rounded-2xl border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-zinc-900 hover:bg-zinc-50"
        >
          Detaliat →
        </Link>
      </div>

      <div className="mt-4 grid min-w-0 grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setFoamType("open")}
          className={[
            "rounded-2xl border px-4 py-3 text-left transition",
            foamType === "open"
              ? "border-emerald-200 bg-emerald-50"
              : "border-black/10 bg-white hover:bg-zinc-50",
          ].join(" ")}
        >
          <div className="text-sm font-semibold">Celulă deschisă</div>
          <div className="mt-1 text-xs text-zinc-600">Interior, respiră</div>
        </button>
        <button
          type="button"
          onClick={() => setFoamType("closed")}
          className={[
            "rounded-2xl border px-4 py-3 text-left transition",
            foamType === "closed"
              ? "border-sky-200 bg-sky-50"
              : "border-black/10 bg-white hover:bg-zinc-50",
          ].join(" ")}
        >
          <div className="text-sm font-semibold">Celulă închisă</div>
          <div className="mt-1 text-xs text-zinc-600">Densă, rigidă</div>
        </button>
      </div>

      <div className="mt-4 grid min-w-0 grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2">
        <label className="grid min-w-0 gap-2">
          <span className="text-xs font-semibold text-zinc-800 break-words">Suprafață (m²)</span>
          <input
            inputMode="decimal"
            value={areaText}
            onChange={(e) => setAreaText(e.target.value)}
            placeholder="ex: 120"
            className="h-11 w-full min-w-0 rounded-2xl border border-black/10 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
          />
        </label>

        <label className="grid min-w-0 gap-2">
          <span className="text-xs font-semibold text-zinc-800 break-words">Grosime</span>
          <select
            value={String(thickness)}
            onChange={(e) => setThickness(Number(e.target.value))}
            className="h-11 w-full min-w-0 max-w-full rounded-2xl border border-black/10 bg-white px-3 text-xs sm:px-4 sm:text-sm text-zinc-900 outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
          >
            {options.map((o) => (
              <option key={o.cm} value={o.cm}>
                {o.cm} cm ({formatRon(o.minRonPerM2)}–{formatRon(o.maxRonPerM2)} RON/mp)
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-3 grid min-w-0 grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2">
        <label className="grid min-w-0 gap-2">
          <span className="text-xs font-semibold text-zinc-800 break-words">Județ</span>
          <input
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            placeholder="ex: Bihor"
            className="h-11 w-full min-w-0 rounded-2xl border border-black/10 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
          />
        </label>
        <label className="grid min-w-0 gap-2">
          <span className="text-xs font-semibold text-zinc-800 break-words">Localitate</span>
          <input
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            placeholder="ex: Oradea"
            className="h-11 w-full min-w-0 rounded-2xl border border-black/10 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-300 focus:ring-4 focus:ring-emerald-100"
          />
        </label>
      </div>

      <div className="mt-5 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-zinc-50 p-4">
          <div className="text-xs font-semibold text-zinc-700 break-words">RON/mp</div>
          <div className="mt-2 text-lg sm:text-2xl font-semibold tracking-tight text-zinc-900 break-words">
            {selected
              ? `${formatRon(selected.minRonPerM2)}–${formatRon(selected.maxRonPerM2)}`
              : "—"}
          </div>
        </div>
        <div className="rounded-2xl bg-zinc-50 p-4">
          <div className="text-xs font-semibold text-zinc-700 break-words">Total (RON)</div>
          <div className="mt-2 text-lg sm:text-2xl font-semibold tracking-tight text-zinc-900 break-words">
            {selected ? `${formatRon(minTotal)}–${formatRon(maxTotal)}` : "—"}
          </div>
        </div>
      </div>

      <div className="mt-5 grid min-w-0 grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2">
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
    </div>
  );
}

