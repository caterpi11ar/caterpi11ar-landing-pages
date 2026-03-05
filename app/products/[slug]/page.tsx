import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { products, getProductBySlug, getAllProductSlugs } from "@/lib/products"

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  return {
    title: `${product.title} — ${product.tagline}`,
    description: product.longDescription,
    keywords: product.keywords,
    openGraph: {
      title: `${product.title} — ${product.tagline} | CATERPI11AR`,
      description: product.longDescription,
      url: `https://caterpi11ar.com/products/${product.slug}`,
      images: [
        {
          url: product.logo || "/caterpi11ar.jpg",
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} — ${product.tagline}`,
      description: product.description,
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const statusLabel = {
    live: "Live",
    beta: "Beta",
    "coming-soon": "Coming Soon",
  }
  const statusColor = {
    live: "bg-accent/20 text-accent border-accent/40",
    beta: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
    "coming-soon":
      "bg-muted-foreground/20 text-muted-foreground border-muted-foreground/40",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: product.title,
            applicationCategory: product.category,
            operatingSystem: "Web",
            url: `https://caterpi11ar.com/products/${product.slug}`,
            description: product.longDescription,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            author: { "@type": "Organization", name: "Caterpi11ar AI" },
            keywords: product.keywords,
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Top nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-sm">
          <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back
            </Link>
            <Link href="/" className="block">
              <Image
                src="/caterpi11ar.jpg"
                alt="Caterpi11ar"
                width={28}
                height={28}
                className="rounded-sm"
              />
            </Link>
          </div>
        </nav>

        {/* Content */}
        <main className="mx-auto max-w-5xl px-6 pt-28 pb-24">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              {product.logo && (
                <Image
                  src={product.logo}
                  alt={product.title}
                  width={48}
                  height={48}
                  className="rounded-sm"
                />
              )}
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
                    {product.title}
                  </h1>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 border font-mono text-[10px] uppercase tracking-widest ${statusColor[product.status]}`}
                  >
                    {statusLabel[product.status]}
                  </span>
                </div>
                <p className="font-mono text-sm text-muted-foreground mt-1">
                  {product.tagline}
                </p>
              </div>
            </div>

            <p className="max-w-2xl font-mono text-sm text-foreground/80 leading-relaxed">
              {product.longDescription}
            </p>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-accent bg-accent/10 px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent hover:bg-accent/20 transition-colors"
              >
                {product.url.includes("github.com")
                  ? "View on GitHub"
                  : "Visit App"}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Features + Tech Stack grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Features */}
            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
                Features
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 font-mono text-sm text-foreground/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border/60 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Other products */}
          <div className="mt-24 pt-12 border-t border-border/30">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">
              Other Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {products
                .filter((p) => p.slug !== product.slug)
                .slice(0, 6)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="group border border-border/40 p-4 hover:border-accent/60 transition-colors"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {p.tagline}
                    </span>
                    <h3 className="mt-2 font-[var(--font-bebas)] text-xl tracking-tight group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/20 px-6 py-8">
          <div className="mx-auto max-w-5xl flex items-center justify-between">
            <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              &copy; 2026 Caterpi11ar. All rights reserved.
            </p>
            <Link
              href="/"
              className="font-mono text-[10px] text-muted-foreground hover:text-accent uppercase tracking-widest transition-colors"
            >
              caterpi11ar.com
            </Link>
          </div>
        </footer>
      </div>
    </>
  )
}
