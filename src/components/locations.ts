export type LocationPage = {
  slug: string;
  name: string;
  county?: string;
  nearby?: string[];
  shortIntro: string;
};

export const LOCATIONS: LocationPage[] = [
  {
    slug: "ramnicu-sarat",
    name: "Râmnicu Sărat",
    county: "Buzău",
    nearby: ["Buzău", "Focșani", "Brăila", "Galați"],
    shortIntro:
      "Izolații cu spumă poliuretanică în Râmnicu Sărat: ofertă rapidă, execuție profesionistă și consultanță pentru alegerea tipului de spumă și a grosimii.",
  },
  {
    slug: "buzau",
    name: "Buzău",
    county: "Buzău",
    nearby: ["Râmnicu Sărat", "Focșani", "Brăila"],
    shortIntro:
      "Izolații cu spumă poliuretanică în Buzău pentru pereți, planșee și spații rezidențiale/industriale. Estimare minim–maxim și ofertare rapidă.",
  },
  {
    slug: "vrancea",
    name: "Vrancea",
    county: "Vrancea",
    nearby: ["Focșani", "Adjud", "Buzău"],
    shortIntro:
      "Izolații cu spumă poliuretanică în județul Vrancea: celulă deschisă/închisă, recomandări tehnice și ofertă rapidă pe WhatsApp.",
  },
  {
    slug: "focsani",
    name: "Focșani",
    county: "Vrancea",
    nearby: ["Adjud", "Buzău", "Galați"],
    shortIntro:
      "Aplicare spumă poliuretanică în Focșani pentru izolație termică și etanșare. Calculezi estimarea și trimiți detaliile direct pentru ofertă.",
  },
  {
    slug: "adjud",
    name: "Adjud",
    county: "Vrancea",
    nearby: ["Focșani", "Bacău", "Galați"],
    shortIntro:
      "Izolații cu spumă poliuretanică în Adjud: soluții pentru interior/exterior, strat continuu și ofertare rapidă în funcție de m² și grosime.",
  },
  {
    slug: "galati",
    name: "Galați",
    county: "Galați",
    nearby: ["Brăila", "Focșani", "Tecuci"],
    shortIntro:
      "Izolații cu spumă poliuretanică în Galați pentru lucrări rezidențiale și industriale. Estimare transparentă și contact rapid pe WhatsApp.",
  },
  {
    slug: "braila",
    name: "Brăila",
    county: "Brăila",
    nearby: ["Galați", "Buzău", "Râmnicu Sărat"],
    shortIntro:
      "Izolații cu spumă poliuretanică în Brăila: confort termic, etanșare și ofertare rapidă pe baza suprafeței și a grosimii.",
  },
];

export function getLocationBySlug(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug) ?? null;
}

