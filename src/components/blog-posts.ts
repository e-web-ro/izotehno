export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  dateISO: string;
  tags: string[];
  content: string; // markdown-like plain text
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "colaborare-shopprint-productie-publicitara",
    title: "Colaborare cu shopprint.ro (producție publicitară) — plus servicii Izotehno",
    excerpt:
      "Colaborarea cu shopprint.ro ne ajută să livrăm proiecte mai bine organizate: semnalizare, autocolante și materiale promo. Iar Izotehno se ocupă de izolații cu spumă poliuretanică (celulă deschisă/închisă) cu ofertare rapidă.",
    dateISO: "2026-04-15",
    tags: ["spumă poliuretanică", "izolații", "shopprint.ro", "producție publicitară"],
    content:
      "## Colaborare: Izotehno × shopprint.ro\n" +
      "În proiectele noastre, contează două lucruri: **lucrarea executată corect** și **comunicarea clară** cu clientul. De aceea, pentru partea de producție publicitară colaborăm cu **shopprint.ro**, iar noi ne ocupăm de **izolații cu spumă poliuretanică**.\n" +
      "Link: https://shopprint.ro\n\n" +
      "## Serviciile Izotehno (spumă poliuretanică)\n" +
      "- izolații cu spumă poliuretanică **cu celulă deschisă** (uzual interior)\n" +
      "- izolații cu spumă poliuretanică **cu celulă închisă** (densă/rigidă, poate funcționa ca barieră suplimentară la apă)\n" +
      "- aplicare pentru **pereți**, **planșee/tavane**, **structuri din lemn** și zone greu accesibile (etanșare)\n" +
      "- **ofertare rapidă** pe baza suprafeței (m²) și grosimii (cm)\n\n" +
      "## Ce facem împreună cu shopprint.ro (producție publicitară)\n" +
      "- autocolante pentru utilaje/echipamente (identitate vizuală)\n" +
      "- bannere / mesh-uri pentru șantier (vizibilitate)\n" +
      "- panouri informative și plăcuțe (organizare)\n" +
      "- materiale tipărite pentru prezentare (broșuri/fișe)\n\n" +
      "## De ce ajută clientul\n" +
      "Un proiect bine prezentat este mai ușor de urmărit: **știi cine execută lucrarea, cum iei legătura rapid** și ce opțiuni ai (tip spumă, grosime, estimare). În plus, echipa lucrează mai organizat.\n\n" +
      "## Cum ceri ofertă rapid\n" +
      "1) Intră în **Calculator** și alege: tip spumă (celulă deschisă/închisă), grosime și m².\n" +
      "2) Completează **județul** și **localitatea**.\n" +
      "3) Trimite pe WhatsApp către Marian sau Ana (mesajul se completează automat).\n\n" +
      "Vezi și: Servicii, Portofoliu, Calculator, Contact.",
  },
  {
    slug: "3dview-ai-image-text-to-3d-models",
    title: "3DView.ai: Create 3D models from image or text (AI)",
    excerpt:
      "A quick overview of 3DView.ai — an AI tool that turns an image or a text prompt into a downloadable 3D model (GLB) for Blender, Unity, Unreal, Web and AR.",
    dateISO: "2026-04-15",
    tags: ["3D", "AI", "text-to-3d", "image-to-3d", "GLB"],
    content:
      "## What is 3DView.ai?\n" +
      "3DView.ai is an AI-powered 3D generator that can turn a text description or an input image into a 3D model you can download and use.\n\n" +
      "## Two ways to generate\n" +
      "- Text-to-3D: describe what you need (object, style, details)\n" +
      "- Image-to-3D: upload an image and generate a 3D version\n\n" +
      "## Output format (GLB)\n" +
      "Models can be downloaded in GLB format — commonly used across modern 3D pipelines.\n\n" +
      "## Where you can use it\n" +
      "- Blender\n" +
      "- Unity\n" +
      "- Unreal Engine\n" +
      "- Web / AR experiences\n\n" +
      "## Why it’s useful\n" +
      "It helps creators prototype faster, iterate on ideas, and generate assets without starting from a blank 3D scene.\n\n" +
      "Try it here: https://3dview.ai/",
  },
  {
    slug: "prynt-ro-tipografie-online-bannere-autocolante-canvas",
    title: "Prynt.ro — tipografie online pentru bannere, autocolante și canvas (livrare națională)",
    excerpt:
      "Prynt.ro este o tipografie online cu configuratoare de preț instant pentru bannere PVC, autocolante, afișe și canvas. În articol: ce poți comanda, când e util și cum completează proiectele de șantier (panouri, semnalizare, branding).",
    dateISO: "2026-04-15",
    tags: ["print digital", "bannere", "autocolante", "canvas", "Prynt.ro"],
    content:
      "## Ce este Prynt.ro\n" +
      "Prynt.ro este o **tipografie online** gândită ca un atelier de print: configuratoare profesionale, preț instant și producție rapidă pentru produse de publicitate și decor.\n" +
      "Link: https://www.prynt.ro/\n\n" +
      "## Ce poți comanda (print digital / producție publicitară)\n" +
      "- **Bannere PVC** (frontlit, blockout, inclusiv față-verso)\n" +
      "- **Autocolante** (ex. vinyl, pentru vitrine, echipamente, semnalizare)\n" +
      "- **Afișe, flyere, pliante, cărți de vizită**\n" +
      "- **Roll-up** și soluții pentru evenimente\n" +
      "- **Window graphics** (folii pentru geamuri/vitrine)\n" +
      "- **Canvas / tablouri** și produse pentru decor\n" +
      "- Materiale rigide: **PVC Forex**, **plexiglas**, **alucobond**, etc.\n\n" +
      "## De ce e util pentru firme (și pentru șantier)\n" +
      "Pe teren, lucrurile trebuie să fie clare: cine execută lucrarea, unde e accesul, cum te contactează clientul. Materialele de print ajută la:\n" +
      "- **semnalizare** (panouri cu date de contact)\n" +
      "- **organizare** (marcaje, etichete, avertizări)\n" +
      "- **branding** (autocolante pentru utilaje, bannere, mesh-uri)\n\n" +
      "## Exemple de utilizare\n" +
      "- panou \"Lucrare în execuție\" + date de contact\n" +
      "- autocolante pentru utilaje/echipamente\n" +
      "- bannere pentru șantier, gard sau fațadă\n" +
      "- materiale pentru campanii și promovare locală\n\n" +
      "## Cum completează proiectele Izotehno\n" +
      "Izotehno se ocupă de **izolații cu spumă poliuretanică** (celulă deschisă / celulă închisă), iar partea de materiale tipărite și semnalizare te ajută să ai un proiect mai bine organizat și mai ușor de urmărit.\n\n" +
      "## Recomandare practică\n" +
      "Dacă ai o lucrare în derulare și vrei să arate profesionist, merită să pregătești din timp: un banner, un panou cu datele de contact și autocolante pentru echipamente.\n\n" +
      "Vrei ofertă pentru izolație cu spumă poliuretanică? Intră în Calculator și trimite detaliile pe WhatsApp (Marian/Ana).",
  },
  {
    slug: "euprint-ro-productie-publicitara-bannere-autocolante-canvas",
    title:
      "EuPrint.ro — producție publicitară și print digital (bannere, autocolante, canvas)",
    excerpt:
      "EuPrint.ro oferă print digital și producție publicitară cu prețuri instant pentru bannere, autocolante, afișe și canvas. În articol: ce produse găsești, cum te ajută la vizibilitate și când merită pentru proiecte în teren.",
    dateISO: "2026-04-15",
    tags: ["EuPrint.ro", "producție publicitară", "print digital", "bannere", "autocolante"],
    content:
      "## Ce este EuPrint.ro\n" +
      "EuPrint.ro este o platformă de **producție publicitară** și **print digital** care pune accent pe configuratoare profesionale (preț instant) și livrare rapidă.\n" +
      "Link: https://www.euprint.ro/\n\n" +
      "## Produse populare (print publicitar)\n" +
      "- **Bannere PVC** (frontlit / blockout, inclusiv față-verso)\n" +
      "- **Autocolante vinyl** (pentru vitrine, echipamente, semnalistică)\n" +
      "- **Afișe**, **flyere**, **pliante**, **cărți de vizită**\n" +
      "- **Roll-up** și materiale pentru evenimente\n" +
      "- **Window graphics** (folii pentru geam)\n" +
      "- **Canvas** / tablouri și produse pentru decor\n" +
      "- Materiale rigide: PVC Forex, plexiglas, alucobond etc.\n\n" +
      "## Când e o alegere bună\n" +
      "Dacă ai nevoie de materiale de promovare sau semnalizare cu termene scurte, configuratoarele de preț și fluxul online te ajută să comanzi rapid și să standardizezi materialele (dimensiuni, finisaje, culori).\n\n" +
      "## Exemple concrete pentru proiecte în teren\n" +
      "- banner cu date de contact și serviciile oferite\n" +
      "- autocolante pentru utilaje/mașini (branding)\n" +
      "- panou de șantier / semnalistică (acces, avertizări)\n" +
      "- materiale pentru campanii locale (afișe, flyere)\n\n" +
      "## Legătura cu lucrările Izotehno\n" +
      "La izolații cu spumă poliuretanică (celulă deschisă/închisă), o comunicare bună și o prezentare clară ajută clientul să știe rapid ce primește și cum ne contactează. Materialele tipărite completează partea de execuție.\n\n" +
      "## Recomandare\n" +
      "Dacă pregătești o lucrare, pune pe listă și partea de semnalizare/branding (banner + date de contact). Pentru ofertă de izolație, intră în Calculator și trimite detaliile pe WhatsApp (Marian/Ana).",
  },
  {
    slug: "adbanner-ro-print-digital-bannere-autocolante-canvas",
    title:
      "AdBanner.ro — print digital & producție publicitară (bannere, autocolante, roll-up)",
    excerpt:
      "AdBanner.ro oferă configuratoare de preț instant pentru bannere PVC, autocolante, roll-up și materiale pentru evenimente. În articol: ce poți comanda, cum ajută în proiecte și idei de semnalizare/branding.",
    dateISO: "2026-04-15",
    tags: ["AdBanner.ro", "print digital", "producție publicitară", "bannere", "roll-up"],
    content:
      "## Ce este AdBanner.ro\n" +
      "AdBanner.ro este o platformă de **print digital** și **producție publicitară** cu configuratoare profesionale și prețuri instant pentru produse populare (bannere, autocolante, afișe, roll-up).\n" +
      "Link: https://www.adbanner.ro/\n\n" +
      "## Ce poți comanda\n" +
      "- **Bannere PVC** (frontlit / blockout, inclusiv față-verso)\n" +
      "- **Autocolante** (vitrine, echipamente, semnalistică)\n" +
      "- **Afișe**, **flyere**, **pliante**, **cărți de vizită**\n" +
      "- **Roll-up** pentru evenimente și prezentări\n" +
      "- **Window graphics** (folii pentru geam)\n" +
      "- **Canvas** / produse de decor\n" +
      "- materiale rigide (PVC Forex, plexiglas, alucobond etc.)\n\n" +
      "## Pentru cine e util\n" +
      "E o soluție bună pentru firme care vor să comande rapid materiale standardizate: aceleași dimensiuni, aceleași finisaje, aceeași identitate vizuală. Ajută mult când ai nevoie de livrare rapidă și comenzi repetabile.\n\n" +
      "## Idei rapide (semnalizare + vizibilitate)\n" +
      "- banner cu serviciile oferite + date de contact\n" +
      "- autocolante pentru utilaje/mașini\n" +
      "- panouri informative pentru lucrări (acces, avertizări)\n" +
      "- roll-up pentru prezentări și întâlniri\n\n" +
      "## Legătura cu lucrările Izotehno\n" +
      "În proiectele de izolații cu spumă poliuretanică (celulă deschisă/închisă), comunicarea clară ajută clientul: unde se lucrează, cum ne contactează și ce primește. Materialele de print completează partea de execuție.\n\n" +
      "Vrei ofertă pentru izolație? Intră în Calculator și trimite detaliile pe WhatsApp (Marian/Ana).",
  },
  {
    slug: "e-web-ro-agentie-web-nextjs-magazine-online-automatizari-ai",
    title:
      "e-web.ro — agenție web pentru site-uri premium, aplicații Next.js, e-commerce și automatizări AI",
    excerpt:
      "e-web.ro dezvoltă site-uri de prezentare moderne, aplicații web custom (Next.js), magazine online rapide și automatizări AI. În articol: ce servicii oferă, când merită și cum te ajută să scalezi.",
    dateISO: "2026-04-15",
    tags: ["e-web.ro", "Next.js", "aplicații web", "magazine online", "automatizări AI"],
    content:
      "## Ce este e-web.ro\n" +
      "e-web.ro este o agenție digitală care construiește produse web moderne: site-uri premium, aplicații custom și magazine online optimizate pentru viteză și conversii.\n" +
      "Link: https://e-web.ro/\n\n" +
      "## Servicii (pe scurt)\n" +
      "- **Site-uri de prezentare premium** (performanță + design modern)\n" +
      "- **Aplicații web custom** dezvoltate de la zero (Next.js)\n" +
      "- **E-commerce / magazine online** rapide și scalabile\n" +
      "- **Automatizări & AI** (chatboți, fluxuri automate, integrări)\n" +
      "- Suport și mentenanță (în funcție de proiect)\n\n" +
      "## De ce contează tehnologia (Next.js)\n" +
      "Pentru business, un site rapid înseamnă experiență mai bună pentru client, SEO mai bun și conversii mai mari. Next.js ajută la performanță, structură clară și scalare pe termen lung.\n\n" +
      "## Pentru cine e potrivit\n" +
      "- firme care vor un site modern (nu template-uri vechi)\n" +
      "- proiecte care au nevoie de funcționalități custom (conturi, dashboard, integrări)\n" +
      "- magazine online care au nevoie de viteză și UX bun\n" +
      "- companii care vor automatizări (WhatsApp, facturare, suport)\n\n" +
      "## Exemplu practic\n" +
      "Dacă vrei o prezență online care arată premium și se încarcă instant, e-web.ro poate livra design + dezvoltare, apoi optimizare și suport.\n\n" +
      "Vezi mai multe aici: https://e-web.ro/",
  },
  {
    slug: "branding-pe-santier-cum-ajuta-clientul",
    title: "Branding pe șantier: organizare, siguranță și ofertare mai rapidă",
    excerpt:
      "Semnalizarea, panourile și autocolantele reduc confuziile, cresc siguranța și fac comunicarea mai rapidă. În articol explicăm ce folosim în lucrările de izolații cu spumă poliuretanică și cum ne ajută shopprint.ro (producție publicitară).",
    dateISO: "2026-04-15",
    tags: ["șantier", "organizare", "siguranță", "shopprint.ro"],
    content:
      "## De ce contează branding-ul pe șantier\n" +
      "La o lucrare de **izolație cu spumă poliuretanică**, timpul și claritatea sunt esențiale. Un șantier bine semnalizat transmite profesionalism, reduce confuziile și ajută clientul să știe rapid **cum ia legătura** pentru ofertă și programare.\n\n" +
      "## Ce servicii oferim (Izotehno)\n" +
      "- aplicare spumă poliuretanică **celulă deschisă** / **celulă închisă**\n" +
      "- lucrări pentru pereți, planșee/tavane, structuri din lemn, etanșări\n" +
      "- estimare rapidă (RON/mp și total) + ofertă finală după detalii\n\n" +
      "## Elemente utile pe șantier (producție publicitară)\n" +
      "- panou cu date de contact (WhatsApp Marian/Ana)\n" +
      "- marcaje pentru zone de acces și avertizare\n" +
      "- etichete și autocolante pentru echipamente\n" +
      "- banner/mesh pentru identificare și informare\n\n" +
      "## Partener: shopprint.ro\n" +
      "Pentru aceste materiale colaborăm cu **shopprint.ro** (producție publicitară), ca să avem livrare rapidă și calitate constantă.\n\n" +
      "## Cum ceri ofertă rapid\n" +
      "Intră în **Calculator**, completează tipul, grosimea și m², adaugă județ/localitate și trimite pe WhatsApp către Marian sau Ana.",
  },
  {
    slug: "cum-soliciti-oferta-rapid-pe-whatsapp",
    title: "Cum soliciți oferta rapid pe WhatsApp (Marian/Ana) — checklist complet",
    excerpt:
      "Checklist simplu: ce informații să trimiți ca să primești răspuns rapid și o ofertă corectă.",
    dateISO: "2026-04-15",
    tags: ["ofertă", "WhatsApp", "calculator", "spumă poliuretanică"],
    content:
      "## Oferta rapidă pentru izolații cu spumă poliuretanică\n" +
      "Ca să îți dăm o ofertă corectă (și repede), avem nevoie de câteva informații. Cu cât mesajul e mai complet, cu atât răspunsul e mai rapid.\n\n" +
      "## Checklist (trimite pe WhatsApp)\n" +
      "- suprafață (m²)\n" +
      "- grosime (cm)\n" +
      "- tip spumă: **celulă deschisă** / **celulă închisă**\n" +
      "- județ\n" +
      "- localitate\n" +
      "- tip lucrare: pereți interior/exterior, planșeu/tavan, structură lemn etc.\n" +
      "- 2–3 poze cu zona (dacă ai)\n\n" +
      "## Cel mai rapid mod (recomandat)\n" +
      "Intră în **Calculator**, completează datele (inclusiv județ + localitate) și apasă:\n" +
      "- \"Trimite (Marian)\" sau\n" +
      "- \"Trimite (Ana)\"\n" +
      "Mesajul se completează automat cu estimarea.\n\n" +
      "## Ce servicii oferim\n" +
      "- izolații cu spumă poliuretanică (celulă deschisă/închisă)\n" +
      "- etanșare și izolare pentru pereți/planșee/structuri\n" +
      "- consultanță pentru alegerea grosimii potrivite\n\n" +
      "## Extra: producție publicitară\n" +
      "Pentru materiale promoționale și semnalizare (banner, autocolante, panouri) colaborăm cu **shopprint.ro**.",
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

