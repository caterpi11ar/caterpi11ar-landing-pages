import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { products } from "@/lib/products"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata: Metadata = {
  metadataBase: new URL("https://caterpi11ar.com"),
  title: {
    default: "CATERPI11AR — AI That Evolves",
    template: "%s | CATERPI11AR",
  },
  description:
    "Caterpi11ar AI builds products that solve real problems: Locusify for privacy-first photo maps & journey replay, GIClaw for Genshin Impact automation, Dentic for habit building, Viper TypeScript library, WeChat chat generator, AI System Prompts collection, and more. From idea to execution, we ship what matters.",
  keywords: [
    "Caterpi11ar AI",
    "AI products",
    "Locusify travel app",
    "GPS photo map",
    "journey replay",
    "privacy travel app",
    "on-device photo processing",
    "GIClaw Genshin Impact agent",
    "Dentic habit app",
    "Viper TypeScript config library",
    "WeChat chat screenshot generator",
    "Lark image generation bot",
    "SRI Calculator",
    "AI system prompts",
    "AI coding tools system prompts",
    "Claude Code system prompt",
    "Cursor system prompt",
    "artificial intelligence tools",
    "open source AI",
  ],
  authors: [{ name: "Caterpi11ar AI", url: "https://caterpi11ar.com" }],
  creator: "Caterpi11ar AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    url: "https://caterpi11ar.com",
    siteName: "CATERPI11AR",
    title: "CATERPI11AR — AI That Evolves",
    description:
      "Caterpi11ar AI builds products that solve real problems: Locusify for privacy-first photo maps & journey replay, GIClaw for Genshin Impact automation, Dentic for habit building, Viper TypeScript library, WeChat chat generator, AI System Prompts collection, and more. From idea to execution, we ship what matters.",
    images: [
      {
        url: "/caterpi11ar.jpg",
        width: 1200,
        height: 630,
        alt: "CATERPI11AR — AI That Evolves",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CATERPI11AR — AI That Evolves",
    description:
      "Caterpi11ar AI builds products that solve real problems: Locusify for privacy-first photo maps & journey replay, GIClaw for Genshin Impact automation, Dentic for habit building, Viper TypeScript library, WeChat chat generator, AI System Prompts collection, and more.",
    images: ["/caterpi11ar.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Caterpi11ar AI",
              alternateName: "caterpi11ar",
              url: "https://caterpi11ar.com",
              logo: "https://caterpi11ar.com/caterpi11ar.jpg",
              description:
                "Caterpi11ar AI builds intelligent products that adapt, evolve, and deliver real value — including Locusify (privacy-first photo maps & journey replay), GIClaw (Genshin Impact AI agent), Dentic (habit building), Viper (TypeScript config library), WeChat Chat Generator, Lark Imagine Robot, SRI Calculator, and AI System Prompts Playground.",
              email: "daiqin1046@gmail.com",
              foundingDate: "2025",
              founder: {
                "@type": "Person",
                name: "Qin Dai",
              },
              sameAs: [
                "https://github.com/caterpi11ar",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CATERPI11AR",
              url: "https://caterpi11ar.com",
              datePublished: "2025-10-01",
              dateModified: "2026-03-01",
              description:
                "Caterpi11ar AI builds products that solve real problems: Locusify for privacy-first photo maps & journey replay, GIClaw for Genshin Impact automation, Dentic for habit building, Viper TypeScript library, WeChat chat generator, AI System Prompts collection, and more.",
              publisher: {
                "@type": "Organization",
                name: "Caterpi11ar AI",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": products.map((p) => ({
                "@type": "SoftwareApplication",
                name: p.title,
                applicationCategory: p.category,
                operatingSystem: "Web",
                url: `https://caterpi11ar.com/products/${p.slug}`,
                description: p.longDescription,
                datePublished: "2025-10-01",
                dateModified: "2026-03-01",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
                keywords: p.keywords,
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Caterpi11ar AI?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Caterpi11ar AI is a software studio that builds intelligent tools, bots, and libraries. Our products include Locusify (privacy-first photo map & journey replay app), GIClaw (Genshin Impact visual AI agent), Dentic (habit-building app), Viper (TypeScript config library), WeChat Chat Generator, Lark Imagine Robot, SRI Calculator, and AI System Prompts Playground.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Locusify?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Locusify is a privacy-first travel app that transforms GPS photos into interactive route maps and animated journey replays. All processing happens 100% on-device — no server uploads, no data collection. Close the app and data is gone.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Viper TypeScript library?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Viper is a minimal TypeScript configuration library inspired by Go's Viper. It provides type-safe config management using Zod for validation and JSON5 for flexible config files, making it easy to manage environment-specific configurations in Node.js applications.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is WeChat Chat Generator?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "WeChat Chat Generator (微信聊天截图生成器) is a free online tool for creating realistic WeChat chat screenshots. You can customize the sender, messages, and timestamps to generate authentic-looking WeChat conversation images instantly.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is AI System Prompts Playground?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "AI System Prompts Playground is a curated collection of 30+ AI coding tools' system prompts. It includes full system prompts from Claude Code, Cursor, Devin AI, Windsurf, Replit, v0, Perplexity, Xcode AI, and many more — all searchable and browsable at ai.caterpi11ar.com.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Caterpi11ar AI open source?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, several Caterpi11ar AI products are open source. Viper (TypeScript config library), Dentic (habit app), and Lark Imagine Robot are all available on GitHub at github.com/caterpi11ar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Caterpi11ar AI 是什么？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Caterpi11ar AI 是一个 AI 产品工作室，专注于构建智能工具、机器人和开源库。旗下产品包括：Locusify（隐私优先的照片地图与旅程回放应用）、GIClaw（原神视觉AI代理）、Dentic（习惯养成应用）、Viper（TypeScript 配置库）、微信聊天截图生成器、飞书 AI 绘图机器人、SRI 评估工具和 AI System Prompts Playground（AI 编程工具系统提示词合集）。",
                  },
                },
                {
                  "@type": "Question",
                  name: "微信聊天截图生成器怎么用？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "访问 wechat.caterpi11ar.com，输入发送者名称、聊天内容和时间，即可生成逼真的微信聊天截图。完全免费，无需安装任何软件。",
                  },
                },
              ],
            }),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0M8C71QELX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0M8C71QELX');
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4002926826632458"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
