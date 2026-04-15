import Link from "next/link";
import { Container } from "@/components/container";
import { BLOG_POSTS } from "@/components/blog-posts";

export const metadata = {
  title: "Blog",
  description:
    "Articole Izotehno: izolații cu spumă poliuretanică, recomandări și colaborări (inclusiv shopprint.ro – producție publicitară).",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("ro-RO", { dateStyle: "long" }).format(d);
}

export default function BlogPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-zinc-50 to-white">
        <Container className="py-12 md:py-16">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              Blog
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              Articole & noutăți
            </h1>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Aici publicăm articole despre izolații cu spumă poliuretanică și
              colaborări (ex. shopprint.ro – producție publicitară).
            </p>

            <div className="mt-10 grid gap-4">
              {BLOG_POSTS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-[28px] border border-black/5 bg-white p-6 shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div className="text-sm font-semibold text-zinc-900 group-hover:text-emerald-700">
                      {p.title}
                    </div>
                    <div className="text-xs text-zinc-500">{formatDate(p.dateISO)}</div>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{p.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700 border border-black/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

