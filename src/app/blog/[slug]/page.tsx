import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/container";
import { BLOG_POSTS, getPostBySlug } from "@/components/blog-posts";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      locale: "ro_RO",
      type: "article",
    },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("ro-RO", { dateStyle: "long" }).format(d);
}

function renderSimpleMarkdown(text: string) {
  // Minimal renderer for our simple content (headings + paragraphs + bullet lists).
  const lines = text.split("\n");
  const blocks: Array<
    | { type: "h2"; text: string }
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
  > = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i]?.trimEnd() ?? "";
    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i++;
      continue;
    }

    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i]?.trim() ?? "").startsWith("- ")) {
        items.push((lines[i] ?? "").trim().slice(2));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // paragraph: merge until blank
    const parts: string[] = [];
    while (i < lines.length && (lines[i]?.trim() ?? "") !== "") {
      parts.push((lines[i] ?? "").trim());
      i++;
    }
    blocks.push({ type: "p", text: parts.join(" ") });
  }

  return blocks;
}

function linkify(text: string) {
  const parts: Array<{ type: "text" | "link"; value: string }> = [];
  const re = /(https?:\/\/[^\s)]+)|(www\.[^\s)]+)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push({ type: "text", value: text.slice(last, m.index) });
    const raw = m[0];
    const href = raw.startsWith("http") ? raw : `https://${raw}`;
    parts.push({ type: "link", value: href });
    last = m.index + raw.length;
  }
  if (last < text.length) parts.push({ type: "text", value: text.slice(last) });
  return parts;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const blocks = renderSimpleMarkdown(post.content);

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-zinc-50 to-white">
        <Container className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="text-sm font-semibold text-emerald-700 hover:underline"
            >
              ← Înapoi la blog
            </Link>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
              {post.title}
            </h1>
            <div className="mt-2 text-xs text-zinc-500">{formatDate(post.dateISO)}</div>

            <div className="mt-8 space-y-6 rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
              {blocks.map((b, idx) => {
                if (b.type === "h2") {
                  return (
                    <h2 key={idx} className="text-base font-semibold text-zinc-900">
                      {b.text}
                    </h2>
                  );
                }
                if (b.type === "ul") {
                  return (
                    <ul key={idx} className="list-disc pl-5 text-sm leading-6 text-zinc-600">
                      {b.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="text-sm leading-6 text-zinc-600">
                    {linkify(b.text).map((p, i) =>
                      p.type === "link" ? (
                        <a
                          key={`${p.value}-${i}`}
                          href={p.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-emerald-700 hover:underline"
                        >
                          {p.value}
                        </a>
                      ) : (
                        <span key={i}>{p.value}</span>
                      ),
                    )}
                  </p>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:from-emerald-700 hover:to-sky-700"
              >
                Calculator de preț
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Contact rapid
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

