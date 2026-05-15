import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { BgImage } from "@/components/ui/BgImage";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { journal, getPost, getRelatedPosts, type JournalBlock } from "@/lib/journal";
import { site } from "@/lib/site";
import { breadcrumbLd, jsonLd } from "@/lib/seo";

type Params = { slug: string };

export async function generateStaticParams() {
  return journal.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Note not found" };

  const url = `${site.url}/journal/${post.slug}`;
  return {
    title: post.metaTitle ?? post.title,
    description: post.description,
    keywords: [...post.keywords],
    alternates: { canonical: `/journal/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.metaTitle ?? post.title,
      description: post.description,
      publishedTime: post.dateISO,
      authors: [post.author],
      tags: [...post.keywords],
      images: [{ url: post.image, width: 1600, height: 1067, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle ?? post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function Block({ block }: { block: JournalBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-16 font-display text-3xl italic text-ink md:text-4xl">
          {block.value}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-10 font-display text-2xl italic text-ink/95 md:text-3xl">
          {block.value}
        </h3>
      );
    case "p":
      return (
        <p className="mt-6 text-lg leading-[1.85] text-ink/80 md:text-[1.18rem]">
          {block.value}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-6 space-y-3 border-l border-gilded/40 pl-6 text-lg leading-[1.8] text-ink/80 md:text-[1.12rem]">
          {block.value.map((v, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[1.65rem] top-3 h-px w-3 bg-gold-flow" />
              {v}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-10 border-l-2 border-gilded pl-8 font-display text-2xl italic leading-relaxed text-ink/85 md:text-3xl">
          “{block.value}”
        </blockquote>
      );
  }
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug);

  const wordCount = post.body.reduce((n, b) => {
    if (b.type === "ul") return n + b.value.join(" ").split(/\s+/).length;
    return n + b.value.split(/\s+/).length;
  }, 0);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [post.image],
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { "@type": "Organization", name: post.author, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: site.logo },
    },
    mainEntityOfPage: `${site.url}/journal/${post.slug}`,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    wordCount,
    inLanguage: site.locale,
  };

  const breadcrumbs = breadcrumbLd([
    { name: "Home", url: "/" },
    { name: "Journal", url: "/journal" },
    { name: post.title, url: `/journal/${post.slug}` },
  ]);

  return (
    <>
      <PageHero
        eyebrow={`${post.category} · ${formatDate(post.dateISO)} · ${post.readMinutes} min read`}
        title={post.title}
        description={post.description}
      />

      {/* Hero plate */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-card border border-ink/10">
              <BgImage
                src={post.image}
                alt={`${post.title} — Regalia Vows journal`}
                priority
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,11,13,0.45)_100%)]" />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Article body */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_3fr_1fr]">
            {/* Left rail — meta */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6 text-sm text-ink/70">
                <div>
                  <span className="text-eyebrow uppercase tracking-widest2 text-gilded-800">
                    Filed under
                  </span>
                  <p className="mt-2 font-display text-xl italic text-ink">
                    {post.category}
                  </p>
                </div>
                <div>
                  <span className="text-eyebrow uppercase tracking-widest2 text-gilded-800">
                    Published
                  </span>
                  <p className="mt-2">{formatDate(post.dateISO)}</p>
                </div>
                <div>
                  <span className="text-eyebrow uppercase tracking-widest2 text-gilded-800">
                    Reading time
                  </span>
                  <p className="mt-2">{post.readMinutes} minutes</p>
                </div>
                <div>
                  <span className="text-eyebrow uppercase tracking-widest2 text-gilded-800">
                    Studio note
                  </span>
                  <p className="mt-2">{post.author}</p>
                </div>
              </div>
            </aside>

            {/* Article */}
            <article className="max-w-[68ch]">
              <Reveal>
                <p className="font-display text-2xl italic leading-relaxed text-ink/90 md:text-3xl">
                  {post.excerpt}
                </p>
                <div className="mt-10 h-px w-24 bg-gold-flow" />
              </Reveal>

              <Reveal delay={0.05}>
                <div>
                  {post.body.map((b, i) => (
                    <Block key={i} block={b} />
                  ))}
                </div>
              </Reveal>

              {/* Tags */}
              <div className="mt-16 border-t border-ink/10 pt-8">
                <span className="text-eyebrow uppercase tracking-widest2 text-gilded-800">
                  Keywords
                </span>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.keywords.map((k) => (
                    <span
                      key={k}
                      className="rounded-full border border-ink/15 bg-cream-100 px-3 py-1 text-xs uppercase tracking-widest2 text-ink/70"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Right rail — share / CTA */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 rounded-card border border-ink/10 bg-cream-100 p-6">
                <span className="text-eyebrow uppercase tracking-widest2 text-gilded-800">
                  The Studio
                </span>
                <p className="mt-3 font-display text-xl italic text-ink">
                  Begin a private enquiry.
                </p>
                <p className="mt-3 text-sm text-ink/70">
                  If this note resonated, our director would be glad to hear from you.
                </p>
                <Button href="/contact" className="mt-5 w-full justify-center" data-cursor="link">
                  Enquire
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section theme="pearl" className="!pt-0">
          <Container>
            <div className="hairline mb-16" />
            <Eyebrow className="!text-gilded-800">Continue reading</Eyebrow>
            <h2 className="mt-3 font-display text-display-sm italic text-ink md:text-display-md">
              More notes from the studio.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.06}>
                  <Link
                    href={`/journal/${r.slug}`}
                    data-cursor="view"
                    data-cursor-label="Read"
                    className="group flex h-full flex-col"
                  >
                    <div className="relative aspect-[5/4] overflow-hidden rounded-card border border-ink/10">
                      <BgImage
                        src={r.image}
                        alt={`${r.title} — Regalia Vows journal`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="transition-transform duration-[1200ms] ease-silk group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-5 text-eyebrow uppercase tracking-widest2 text-gilded-800">
                      {formatDate(r.dateISO)} · {r.readMinutes} min
                    </span>
                    <h3 className="mt-3 font-display text-xl italic text-ink transition-colors duration-500 ease-silk group-hover:text-gilded-700 md:text-2xl">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-sm text-ink/70">{r.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-eyebrow uppercase tracking-widest2 text-gilded-700">
                      Read
                      <ArrowUpRight size={14} strokeWidth={1.5} />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Closing CTA */}
      <Section theme="pearl" className="!pt-0">
        <Container>
          <div className="hairline" />
          <div className="mt-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-xl font-display text-display-sm italic text-ink md:text-display-md">
              A wedding takes a year. The year is the thing worth designing.
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" data-cursor="link">
                Begin a private enquiry
              </Button>
              <Link href="/journal" className="text-eyebrow uppercase tracking-widest2 text-gilded-700 hover:text-gilded">
                ← All notes
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(articleLd)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbs)}
      />
    </>
  );
}
