import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
    "Caterpi11ar AI builds products that solve real problems: Locusify for smart travel, Dentic for habit building, Viper TypeScript library, WeChat chat generator, AI System Prompts collection, and more. From idea to execution, we ship what matters.",
  keywords: [
    "Caterpi11ar AI",
    "AI products",
    "Locusify travel app",
    "smart travel route map",
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
      "Caterpi11ar AI builds products that solve real problems: Locusify for smart travel, Dentic for habit building, Viper TypeScript library, WeChat chat generator, AI System Prompts collection, and more. From idea to execution, we ship what matters.",
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
      "Caterpi11ar AI builds products that solve real problems: Locusify for smart travel, Dentic for habit building, Viper TypeScript library, WeChat chat generator, AI System Prompts collection, and more.",
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
                "Caterpi11ar AI builds intelligent products that adapt, evolve, and deliver real value — including Locusify (smart travel), Dentic (habit building), Viper (TypeScript config library), WeChat Chat Generator, Lark Imagine Robot, SRI Calculator, and AI System Prompts Playground.",
              email: "daiqin1046@gmail.com",
              foundingDate: "2025",
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
              description:
                "Caterpi11ar AI builds products that solve real problems: Locusify for smart travel, Dentic for habit building, Viper TypeScript library, WeChat chat generator, AI System Prompts collection, and more.",
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Locusify",
                applicationCategory: "TravelApplication",
                operatingSystem: "Web",
                url: "https://locusify.caterpi11ar.com/",
                description: "Locusify is a smart travel tool that lets you upload photos to auto-generate visual route maps and smooth highlight vlogs. It automatically extracts GPS data and timestamps from photos to reconstruct your journey on a map.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
                keywords: "travel route map, photo to map, travel vlog generator, trip visualization",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Dentic",
                applicationCategory: "HealthApplication",
                operatingSystem: "Web",
                url: "https://github.com/caterpi11ar/dentic",
                description: "Dentic is a habit-building app designed to help users develop a consistent, lifelong brushing routine using scientifically-backed habit formation techniques.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
                keywords: "habit app, brushing habit, dental hygiene, habit tracker",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Viper",
                applicationCategory: "DeveloperApplication",
                operatingSystem: "Web",
                url: "https://viper.caterpi11ar.com/",
                description: "Viper is a minimal, Viper-inspired configuration library for TypeScript, built with Zod validation and JSON5 support. It provides type-safe config management for Node.js applications.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
                keywords: "TypeScript config library, Zod config, JSON5, type-safe configuration, Node.js config",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "WeChat Chat Generator",
                applicationCategory: "UtilitiesApplication",
                operatingSystem: "Web",
                url: "https://wechat.caterpi11ar.com/",
                description: "WeChat Chat Generator is a free online tool that creates realistic WeChat chat screenshots. Generate custom WeChat conversation screenshots instantly — no app required.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
                keywords: "WeChat chat screenshot generator, fake WeChat chat, WeChat screenshot maker, 微信聊天截图生成器",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Lark Imagine Robot",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                url: "https://github.com/caterpi11ar/lark-imagine-robot",
                description: "Lark Imagine Robot is an open-source Lark (Feishu) bot for AI-powered image generation and artistic creation. Bring AI image generation directly into your Lark workspace.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
                keywords: "Lark bot, Feishu bot, AI image generation, 飞书机器人, AI绘图",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "SRI Calculator",
                applicationCategory: "HealthApplication",
                operatingSystem: "Web",
                url: "https://sexual.caterpi11ar.com/",
                description: "SRI Calculator (Sexual Repression Index Calculator) is a professional mental health assessment tool for measuring and evaluating sexual repression levels.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
                keywords: "SRI calculator, sexual repression index, mental health assessment tool",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "AI System Prompts Playground",
                applicationCategory: "DeveloperApplication",
                operatingSystem: "Web",
                url: "https://ai.caterpi11ar.com/",
                description: "A curated collection of 30+ AI coding tools' system prompts — including Claude Code, Cursor, Devin AI, Windsurf, Replit, v0, Perplexity, and more. Searchable, SEO-friendly, and open for exploration.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
                keywords: "AI system prompts, Claude Code system prompt, Cursor system prompt, Devin AI prompt, AI coding tools, system prompt collection",
              },
            ]),
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
                    text: "Caterpi11ar AI is a software studio that builds intelligent tools, bots, and libraries. Our products include Locusify (smart travel route generator), Dentic (habit-building app), Viper (TypeScript config library), WeChat Chat Generator, Lark Imagine Robot, SRI Calculator, and AI System Prompts Playground.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Locusify?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Locusify is a smart travel tool that automatically generates visual route maps and highlight vlogs from your travel photos. Upload your photos and Locusify extracts GPS data to reconstruct your journey on an interactive map.",
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
                    text: "Caterpi11ar AI 是一个 AI 产品工作室，专注于构建智能工具、机器人和开源库。旗下产品包括：Locusify（智能旅行路线图生成器）、Dentic（习惯养成应用）、Viper（TypeScript 配置库）、微信聊天截图生成器、飞书 AI 绘图机器人、SRI 评估工具和 AI System Prompts Playground（AI 编程工具系统提示词合集）。",
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
