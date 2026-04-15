"use client";

import Link from "next/link";
import * as React from "react";
import { CONTACT_NUMBERS, whatsappHref } from "@/components/whatsapp";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46 0 .12 5.34.12 11.94c0 2.1.54 4.14 1.56 5.94L0 24l6.3-1.62a11.9 11.9 0 0 0 5.76 1.47h.01c6.6 0 11.94-5.34 11.94-11.94 0-3.18-1.24-6.17-3.49-8.43ZM12.07 21.3h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.96.99-3.66-.24-.38a9.86 9.86 0 0 1-1.52-5.29C2.14 6.44 6.57 2.01 12.07 2.01c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.98c0 5.5-4.39 9.41-9.89 9.41Zm5.43-7.41c-.3-.15-1.76-.87-2.03-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.66-1.6-.9-2.2-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.52.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function QuickContact() {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);
  const text =
    "Bună! Vreau o ofertă pentru izolație cu spumă poliuretanică. Suprafața este aproximativ ___ m², grosime ___ cm, locația ___.";

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onPointerDown(e: PointerEvent) {
      if (!open) return;
      const target = e.target as Node | null;
      const btn = buttonRef.current;
      if (!btn || !target) return;
      // close if click is outside button + menu container
      const wrapper = btn.parentElement;
      if (wrapper && !wrapper.contains(target)) setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="relative">
        {open ? (
          <div className="absolute bottom-14 right-0 w-64 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
            <div className="px-4 py-3 text-xs font-semibold text-zinc-700">
              Alege reprezentantul
            </div>
            <div className="grid gap-1 p-2">
              {CONTACT_NUMBERS.map((n) => (
                <Link
                  key={n.e164}
                  href={whatsappHref(n.e164, text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="grid size-8 place-items-center rounded-xl bg-emerald-600 text-white">
                      <WhatsAppIcon className="size-4" />
                    </span>
                    {n.label}
                  </span>
                  <span className="text-xs font-medium text-zinc-500">
                    {n.raw}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        <button
          ref={buttonRef}
          type="button"
          aria-label="Contact rapid pe WhatsApp"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-12 place-items-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700"
        >
          <WhatsAppIcon className="size-6" />
        </button>
      </div>
    </div>
  );
}

