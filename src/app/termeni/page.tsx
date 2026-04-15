import Link from "next/link";
import { Container } from "@/components/container";

export const metadata = {
  title: "Termeni și condiții",
  description: "Termeni și condiții pentru utilizarea site-ului Izotehno.",
};

export default function TermeniPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-zinc-50 to-white">
        <Container className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              Legal
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              Termeni și condiții
            </h1>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Această pagină are rol informativ. Pentru întrebări, folosește pagina{" "}
              <Link className="font-semibold text-emerald-700 hover:underline" href="/contact">
                Contact
              </Link>
              .
            </p>

            <div className="mt-10 space-y-8 rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  1. Informații generale
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Site-ul `izotehno.ro` prezintă servicii de izolații cu spumă
                  poliuretanică și permite solicitarea unei estimări/orientări de preț
                  și contactarea rapidă (telefon/WhatsApp).
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  2. Estimări de preț
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Calculatorul de preț afișează valori estimative (minim/maxim).
                  Prețul final poate varia în funcție de acces, suprafețe reale,
                  pregătirea suportului, geometrie, consum și condiții de șantier.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  3. Programări și ofertare
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Ofertele și programările se stabilesc în urma unei discuții și, după
                  caz, a măsurătorilor. Trimiterea unui mesaj pe WhatsApp nu garantează
                  disponibilitatea imediată.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  4. Drepturi de autor (imagini/texte)
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Conținutul (texte, fotografii, elemente vizuale) aparține Izotehno
                  sau este utilizat cu drept de folosință. Este interzisă copierea sau
                  reutilizarea fără acord.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  5. Limitarea răspunderii
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Informațiile sunt furnizate “ca atare”. Nu ne asumăm răspunderea
                  pentru eventuale erori/omisiuni sau pentru decizii luate exclusiv pe
                  baza informațiilor din site.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  6. Confidențialitate
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Pentru detalii despre prelucrarea datelor, consultă{" "}
                  <Link
                    className="font-semibold text-emerald-700 hover:underline"
                    href="/politica-confidentialitate"
                  >
                    Politica de confidențialitate
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  7. Modificări
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Ne rezervăm dreptul de a actualiza această pagină oricând, fără
                  notificare prealabilă.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

