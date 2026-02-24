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
    "Caterpi11ar AI builds products that solve real problems: Locusify for smart travel, Dentic for habit building, Viper TypeScript library, WeChat chat generator, and more. From idea to execution, we ship what matters.",
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
    url: "https://caterpi11ar.com",
    siteName: "CATERPI11AR",
    title: "CATERPI11AR — AI That Evolves",
    description:
      "Caterpi11ar AI builds products that solve real problems: Locusify for smart travel, Dentic for habit building, Viper TypeScript library, WeChat chat generator, and more. From idea to execution, we ship what matters.",
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
      "Caterpi11ar AI builds products that solve real problems: Locusify for smart travel, Dentic for habit building, Viper TypeScript library, WeChat chat generator, and more.",
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
              url: "https://caterpi11ar.com",
              logo: "https://caterpi11ar.com/caterpi11ar.jpg",
              description:
                "Building intelligent AI products that adapt, evolve, and deliver real value.",
              email: "hello@caterpi11ar.com",
              sameAs: ["https://github.com/caterpi11ar"],
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
                "Caterpi11ar AI builds products that solve real problems: Locusify for smart travel, Dentic for habit building, Viper TypeScript library, WeChat chat generator, and more.",
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
                description: "Upload photos to auto-generate visual route maps and smooth highlight vlogs.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Dentic",
                applicationCategory: "HealthApplication",
                operatingSystem: "Web",
                url: "https://github.com/caterpi11ar/dentic",
                description: "Build a lifelong brushing habit the scientific way.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Viper",
                applicationCategory: "DeveloperApplication",
                operatingSystem: "Web",
                url: "https://viper.caterpi11ar.com/",
                description: "Minimal Viper-inspired configuration library for TypeScript, built with Zod and JSON5.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "WeChat Chat Generator",
                applicationCategory: "UtilitiesApplication",
                operatingSystem: "Web",
                url: "https://wechat.caterpi11ar.com/",
                description: "Online WeChat chat screenshot generator. Fast, realistic, and easy to use.",
                offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
                author: { "@type": "Organization", name: "Caterpi11ar AI" },
              },
            ]),
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
