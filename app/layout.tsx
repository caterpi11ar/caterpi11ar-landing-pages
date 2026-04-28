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
    "Caterpi11ar AI builds products that solve real problems: Locusify for privacy-first photo maps & journey replay, Dentic for habit building, CC Notify for AI CLI notifications, LingoBar for macOS clipboard translation, and WeChat Chat Generator. From idea to execution, we ship what matters.",
  keywords: [
    "Caterpi11ar AI",
    "AI products",
    "Locusify travel app",
    "GPS photo map",
    "journey replay",
    "privacy travel app",
    "on-device photo processing",
    "Dentic habit app",
    "CC Notify",
    "AI CLI notification manager",
    "Claude Code hooks",
    "LingoBar",
    "macOS clipboard translator",
    "WeChat chat screenshot generator",
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
      "Caterpi11ar AI builds products that solve real problems: Locusify for privacy-first photo maps & journey replay, Dentic for habit building, CC Notify for AI CLI notifications, LingoBar for macOS clipboard translation, and WeChat Chat Generator. From idea to execution, we ship what matters.",
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
      "Caterpi11ar AI builds products that solve real problems: Locusify for privacy-first photo maps & journey replay, Dentic for habit building, CC Notify for AI CLI notifications, LingoBar for macOS clipboard translation, and WeChat Chat Generator.",
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
                "Caterpi11ar AI builds intelligent products that adapt, evolve, and deliver real value — including Locusify (privacy-first photo maps & journey replay), Dentic (habit building), CC Notify (AI CLI notification manager), LingoBar (macOS clipboard translator), and WeChat Chat Generator.",
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
                "Caterpi11ar AI builds products that solve real problems: Locusify for privacy-first photo maps & journey replay, Dentic for habit building, CC Notify for AI CLI notifications, LingoBar for macOS clipboard translation, and WeChat Chat Generator.",
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
                    text: "Caterpi11ar AI is a software studio that builds intelligent tools and apps. Our current lineup includes Locusify (privacy-first photo map & journey replay app), Dentic (habit-building app), CC Notify (notification manager for AI CLI tools), LingoBar (macOS menu bar clipboard translator), and WeChat Chat Generator.",
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
                  name: "What is CC Notify?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CC Notify is a cross-platform notification manager for AI CLI tools like Claude Code, Codex, and Gemini CLI. It captures hook events from long-running tasks and routes them to native notifications, Slack, Discord, Telegram, Feishu, sound, voice, or tray badges. Built with Tauri and Rust, it also ships a standalone CLI for headless and SSH workflows.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is LingoBar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "LingoBar is a macOS menu bar clipboard translator built with SwiftUI and AppKit. It listens for clipboard changes, translates copied text instantly, and previews the result in the menu bar — with optional auto write-back and local translation statistics.",
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
                  name: "Is Caterpi11ar AI open source?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, several Caterpi11ar AI products are open source. Dentic (habit app), CC Notify (AI CLI notification manager), and LingoBar (macOS clipboard translator) are all available on GitHub at github.com/caterpi11ar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Caterpi11ar AI 是什么？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Caterpi11ar AI 是一个 AI 产品工作室，专注于构建智能工具与应用。当前在线产品包括：Locusify（隐私优先的照片地图与旅程回放应用）、Dentic（习惯养成应用）、CC Notify（AI CLI 通知管理器）、LingoBar（macOS 菜单栏剪贴板翻译工具）和微信聊天截图生成器。",
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
