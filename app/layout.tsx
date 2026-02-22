import type React from "react"
import type { Metadata } from "next"
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
    "Building intelligent AI products that adapt, evolve, and deliver real value. From idea to execution, we ship what matters.",
  keywords: ["AI products", "artificial intelligence", "smart travel app", "TypeScript library", "AI tools", "WeChat generator", "Caterpi11ar AI"],
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
      "Building intelligent AI products that adapt, evolve, and deliver real value. From idea to execution, we ship what matters.",
    images: [
      {
        url: "/caterpi11ar.jpg",
        alt: "CATERPI11AR — AI That Evolves",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CATERPI11AR — AI That Evolves",
    description:
      "Building intelligent AI products that adapt, evolve, and deliver real value. From idea to execution, we ship what matters.",
    images: ["/caterpi11ar.jpg"],
  },
  icons: {
    icon: "/caterpi11ar.jpg",
    apple: "/caterpi11ar.jpg",
  },
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
