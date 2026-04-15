"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";

const images = [
  "/06-5.jpg",
  "/IMG-20240209-WA0116.jpg",
  "/IMG-20240319-WA0014.jpg",
  "/izolatie-cu-spuma-poliuretanica-cu-celula-inchisa-4-min.jpg",
  "/izolatie-cu-spuma-poliuretanica.jpg",
  "/izolatie-exterioara-acoperis-si-pereti-cu-spuma-poliuretanica-1-min.jpg",
  "/izolatie-fonica-pentru-cluburi-baruri-restaurante-si-spatii-comerciale-5-min.jpg",
  "/izolatie-poduri-si-mansarde-cu-spuma-poliuretanica-3-min.jpg",
  "/izolatie-poduri-si-mansarde-cu-spuma-poliuretanica-4-min.jpg",
  "/izolatie-poduri-si-mansarde-cu-spuma-poliuretanica-5-min.jpg",
  "/izolatie-poduri-si-mansarde-cu-spuma-poliuretanica-5-min (1).jpg",
  "/poza-16.jpg",
];

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.7 6.3 13.3 4.9 6.2 12l7.1 7.1 1.4-1.4L9 12l5.7-5.7Z" />
    </svg>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9.3 17.7 10.7 19.1 17.8 12 10.7 4.9 9.3 6.3 15 12l-5.7 5.7Z" />
    </svg>
  );
}

export function PortfolioStrip() {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);

  function scrollByCard(dir: -1 | 1) {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.max(280, Math.floor(el.clientWidth * 0.85));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section className="bg-white">
      <Container className="py-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              Portofoliu
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
              Câteva poze din portofoliu
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
              Glisează stânga/dreapta (sau folosește săgețile) ca să vezi rapid
              lucrările.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="grid size-11 place-items-center rounded-2xl border border-black/10 bg-white text-zinc-900 hover:bg-zinc-50"
              aria-label="Derulează la stânga"
            >
              <ArrowLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="grid size-11 place-items-center rounded-2xl border border-black/10 bg-white text-zinc-900 hover:bg-zinc-50"
              aria-label="Derulează la dreapta"
            >
              <ArrowRight className="size-6" />
            </button>
            <Link
              href="/portofoliu"
              className="hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:from-emerald-700 hover:to-sky-700 sm:inline-flex"
            >
              Vezi tot →
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {images.map((src, idx) => (
              <Link
                key={`${src}-${idx}`}
                href="/portofoliu"
                className="group relative h-[220px] w-[320px] flex-none overflow-hidden rounded-[28px] border border-black/5 bg-zinc-100 shadow-sm sm:h-[240px] sm:w-[360px]"
              >
                <Image
                  src={src}
                  alt="Poză din portofoliu Izotehno"
                  fill
                  sizes="360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <div className="mt-4 sm:hidden">
            <Link
              href="/portofoliu"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm"
            >
              Vezi tot portofoliul →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

