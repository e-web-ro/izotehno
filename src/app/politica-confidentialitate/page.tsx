import Link from "next/link";
import { Container } from "@/components/container";

export const metadata = {
  title: "Politica de confidențialitate",
  description:
    "Politica de confidențialitate pentru site-ul Izotehno (izotehno.ro).",
};

export default function PoliticaConfidentialitatePage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-zinc-50 to-white">
        <Container className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              Legal
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              Politica de confidențialitate
            </h1>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Această pagină descrie, pe scurt, cum sunt folosite datele atunci când
              ne contactezi sau folosești calculatorul estimativ. Pentru orice
              întrebări, folosește pagina{" "}
              <Link
                className="font-semibold text-emerald-700 hover:underline"
                href="/contact"
              >
                Contact
              </Link>
              .
            </p>

            <div className="mt-10 space-y-8 rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  1. Ce date putem primi
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  În funcție de cum ne contactezi, putem primi: nume (dacă îl
                  furnizezi), număr de telefon, județ/localitate, detalii despre
                  lucrare (suprafață, grosime, tip spumă), fotografii trimise pe
                  WhatsApp și orice alte informații pe care ni le transmiți.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  2. Cum sunt folosite datele
                </h2>
                <ul className="grid gap-2 text-sm leading-6 text-zinc-600">
                  <li>
                    - pentru a răspunde solicitărilor și a oferi estimări/ofertare
                  </li>
                  <li>- pentru programări, măsurători și comunicare</li>
                  <li>- pentru îmbunătățirea serviciilor și a experienței pe site</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  3. Calculatorul estimativ
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Calculatorul afișează o estimare pe baza informațiilor introduse.
                  Datele introduse nu sunt salvate automat în site; ele ajung la noi
                  doar dacă alegi să trimiți mesajul pe WhatsApp sau să ne contactezi.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  4. WhatsApp / Facebook
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Când apeși butoanele de WhatsApp, mesajul se deschide în aplicația
                  WhatsApp (serviciu terț). Prelucrarea datelor în WhatsApp se face
                  și conform politicilor acestuia. Link-urile către Facebook deschid
                  o platformă terță, care are propriile politici de confidențialitate.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  5. Stocare și securitate
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Păstrăm datele strict cât este necesar pentru comunicare și
                  ofertare. Luăm măsuri rezonabile pentru protejarea informațiilor,
                  însă niciun sistem nu poate garanta securitate absolută.
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  6. Drepturile tale
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Poți solicita clarificări, actualizarea sau ștergerea datelor
                  furnizate, printr-un mesaj pe{" "}
                  <Link
                    className="font-semibold text-emerald-700 hover:underline"
                    href="/contact"
                  >
                    Contact
                  </Link>
                  .
                </p>
              </section>

              <section className="space-y-2">
                <h2 className="text-base font-semibold text-zinc-900">
                  7. Modificări
                </h2>
                <p className="text-sm leading-6 text-zinc-600">
                  Putem actualiza această politică periodic. Versiunea curentă este
                  cea afișată pe această pagină.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

