export type FoamType = "open" | "closed";

export type ThicknessOption = {
  cm: number;
  minRonPerM2: number;
  maxRonPerM2: number;
};

export const PRICING: Record<
  FoamType,
  { title: string; subtitle: string; options: ThicknessOption[] }
> = {
  open: {
    title: "Spumă poliuretanică — celulă deschisă",
    subtitle:
      "Mai moale, respiră, excelentă pentru izolare fonică și termică la interior.",
    options: [
      { cm: 10, minRonPerM2: 50, maxRonPerM2: 85 },
      { cm: 15, minRonPerM2: 60, maxRonPerM2: 85 },
      { cm: 20, minRonPerM2: 75, maxRonPerM2: 95 },
      { cm: 25, minRonPerM2: 85, maxRonPerM2: 105 },
    ],
  },
  closed: {
    title: "Spumă poliuretanică — celulă închisă",
    subtitle:
      "Densă, rigidă, acționează și ca hidroizolație, adaugă rezistență structurală.",
    options: [
      { cm: 3, minRonPerM2: 45, maxRonPerM2: 60 },
      { cm: 5, minRonPerM2: 65, maxRonPerM2: 85 },
      { cm: 7, minRonPerM2: 85, maxRonPerM2: 110 },
      { cm: 10, minRonPerM2: 110, maxRonPerM2: 145 },
    ],
  },
};

export function formatRon(n: number) {
  return new Intl.NumberFormat("ro-RO", { maximumFractionDigits: 0 }).format(n);
}

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

