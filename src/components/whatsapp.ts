export const CONTACT_NUMBERS = [
  { label: "Marian", raw: "0763889348", e164: "40763889348" },
  { label: "Ana", raw: "0762710101", e164: "40762710101" },
] as const;

export function whatsappHref(e164: string, text?: string) {
  const base = `https://wa.me/${e164}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

