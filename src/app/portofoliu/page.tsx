import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { CONTACT_NUMBERS, whatsappHref } from "@/components/whatsapp";

type Project = {
  title: string;
  location: string;
  category: string;
  imageUrl: string;
  note: string;
};

const projects: Project[] = [
  {
    title: "Izolație pereți — lucrare #1",
    location: "—",
    category: "Lucrare",
    imageUrl: "/06-5.jpg",
    note: "Poză reală (din portofoliu).",
  },
  {
    title: "Izolație pereți — lucrare #2",
    location: "—",
    category: "Lucrare",
    imageUrl: "/IMG-20240209-WA0116.jpg",
    note: "Poză reală (din portofoliu).",
  },
  {
    title: "Izolație pereți — lucrare #3",
    location: "—",
    category: "Lucrare",
    imageUrl: "/IMG-20240319-WA0014.jpg",
    note: "Poză reală (din portofoliu).",
  },
  {
    title: "Izolație — celulă închisă (exemplu)",
    location: "—",
    category: "Celulă închisă",
    imageUrl: "/izolatie-cu-spuma-poliuretanica-cu-celula-inchisa-4-min.jpg",
    note: "Poză reală (din portofoliu).",
  },
  {
    title: "Izolație — lucrare (exemplu)",
    location: "—",
    category: "Lucrare",
    imageUrl: "/izolatie-cu-spuma-poliuretanica.jpg",
    note: "Poză reală (din portofoliu).",
  },
  {
    title: "Izolație exterioară — acoperiș/pereți",
    location: "—",
    category: "Exterior",
    imageUrl:
      "/izolatie-exterioara-acoperis-si-pereti-cu-spuma-poliuretanica-1-min.jpg",
    note: "Poză reală (din portofoliu).",
  },
  {
    title: "Izolație fonică — spații comerciale",
    location: "—",
    category: "Fonic",
    imageUrl:
      "/izolatie-fonica-pentru-cluburi-baruri-restaurante-si-spatii-comerciale-5-min.jpg",
    note: "Poză reală (din portofoliu).",
  },
  {
    title: "Izolație poduri & mansarde — #1",
    location: "—",
    category: "Mansardă/Pod",
    imageUrl: "/izolatie-poduri-si-mansarde-cu-spuma-poliuretanica-3-min.jpg",
    note: "Poză reală (din portofoliu).",
  },
  {
    title: "Izolație poduri & mansarde — #2",
    location: "—",
    category: "Mansardă/Pod",
    imageUrl: "/izolatie-poduri-si-mansarde-cu-spuma-poliuretanica-4-min.jpg",
    note: "Poză reală (din portofoliu).",
  },
  {
    title: "Izolație poduri & mansarde — #3",
    location: "—",
    category: "Mansardă/Pod",
    imageUrl: "/izolatie-poduri-si-mansarde-cu-spuma-poliuretanica-5-min.jpg",
    note: "Poză reală (din portofoliu).",
  },
  {
    title: "Izolație poduri & mansarde — #4",
    location: "—",
    category: "Mansardă/Pod",
    imageUrl: "/izolatie-poduri-si-mansarde-cu-spuma-poliuretanica-5-min (1).jpg",
    note: "Poză reală (din portofoliu).",
  },
  {
    title: "Lucrare — #12",
    location: "—",
    category: "Lucrare",
    imageUrl: "/poza-16.jpg",
    note: "Poză reală (din portofoliu).",
  },
];

export const metadata = {
  title: "Portofoliu",
  description:
    "Lucrări de izolații cu spumă poliuretanică: mansarde, poduri, acoperișuri și spații industriale.",
};

export default function PortfolioPage() {
  const text =
    "Bună! Vreau o ofertă pentru izolație cu spumă poliuretanică. Suprafața este aproximativ ___ m², grosime ___ cm, locația ___.";
  return (
    <div className="bg-zinc-50">
      <Container className="py-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Portofoliu
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
              Mai jos sunt imagini reale din portofoliu. Pentru ofertă rapidă, dă
              click pe “Cere ofertă” și trimite detaliile pe WhatsApp.
            </p>
          </div>
          <Link
            href={whatsappHref(CONTACT_NUMBERS[0].e164, text)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            Cere ofertă
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {idx === 0 ? (
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full bg-gradient-to-t from-black/70 via-black/25 to-transparent p-4">
                      <div className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
                        CÂTEVA POZE DIN PORTOFOLIU
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
                    {p.category}
                  </span>
                  <span className="text-xs text-zinc-500">{p.location}</span>
                </div>
                <h2 className="mt-3 text-base font-semibold leading-6 text-zinc-900">
                  {p.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-zinc-500">{p.note}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}

