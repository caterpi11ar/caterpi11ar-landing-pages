export type ProductStatus = "live" | "beta" | "coming-soon"

export interface Product {
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string
  url: string
  logo?: string
  category: string
  features: string[]
  techStack: string[]
  keywords: string
  status: ProductStatus
  span: string
}

export const products: Product[] = [
  {
    slug: "locusify",
    title: "Locusify",
    tagline: "Photo Maps & Journey Replay",
    description:
      "Privacy-first travel app that turns GPS photos into interactive route maps and animated journey replays. 100% on-device processing.",
    longDescription:
      "Locusify is a privacy-first travel app that transforms GPS photos into interactive route maps and animated journey replays. Upload your travel photos and Locusify automatically extracts GPS coordinates, pins your footprints on an interactive map, and replays your complete journey with animations. All processing happens 100% on-device — no server uploads, no data collection. Close the app and data is gone.",
    url: "https://locusify.cn",
    logo: "/locusify.png",
    category: "TravelApplication",
    features: [
      "GPS photo location extraction",
      "Animated journey replay",
      "Video export & sharing",
      "100% on-device processing",
      "Photo clustering on map",
      "Multi-format photo support",
    ],
    techStack: ["Next.js", "React", "Mapbox", "FFmpeg", "EXIF.js"],
    keywords:
      "travel route map, photo to map, GPS photo map, journey replay, trip visualization, privacy travel app, on-device processing, 照片定位, 轨迹回放",
    status: "live",
    span: "col-span-2 row-span-2",
  },
  {
    slug: "dentic",
    title: "Dentic",
    tagline: "Health & Habits",
    description: "Build a lifelong brushing habit the scientific way.",
    longDescription:
      "Dentic is a habit-building app designed to help users develop a consistent, lifelong brushing routine using scientifically-backed habit formation techniques. Based on research in behavioral psychology, Dentic uses progressive reinforcement, streak tracking, and gentle reminders to transform dental hygiene from a chore into an automatic habit.",
    url: "https://github.com/caterpi11ar/dentic",
    category: "HealthApplication",
    features: [
      "Science-backed habit formation",
      "Progressive streak tracking",
      "Gentle smart reminders",
      "Behavioral psychology insights",
      "Progress visualization",
      "Open source",
    ],
    techStack: ["React Native", "TypeScript", "Expo"],
    keywords: "habit app, brushing habit, dental hygiene, habit tracker",
    status: "live",
    span: "col-span-1 row-span-1",
  },
  {
    slug: "cc-notify",
    title: "CC Notify",
    tagline: "AI CLI Notification Manager",
    description:
      "Cross-platform notification manager for AI CLI tools with hooks, multi-channel routing, and standalone CLI delivery.",
    longDescription:
      "CC Notify is an open-source notification manager for AI CLI tools like Claude Code, Codex, and Gemini CLI. It captures long-running task events through hooks and routes them to the channels you actually use, including native notifications, Slack, Discord, Telegram, Feishu webhooks, sound, voice, and tray badges. Built with Tauri and Rust, it ships with a standalone cc-notify CLI for headless and SSH workflows while sharing the same local SQLite-backed configuration.",
    url: "https://github.com/caterpi11ar/cc-notify",
    category: "DeveloperApplication",
    features: [
      "Hook integration for Claude Code, Codex, and Gemini CLI",
      "Event-based routing to multi-channel notifications",
      "Built-in webhook templates including Feishu/Lark",
      "Custom rules with keyword, regex, and file-change triggers",
      "Standalone cc-notify CLI for headless and SSH workflows",
      "Cross-platform desktop app with local SQLite storage",
    ],
    techStack: ["Tauri 2", "React", "TypeScript", "Rust", "SQLite"],
    keywords:
      "ai cli notification manager, claude code hooks, codex hooks, gemini cli hooks, tauri notifier, cc-notify",
    status: "live",
    span: "col-span-1 row-span-1",
  },
  {
    slug: "lingobar",
    title: "LingoBar",
    tagline: "Clipboard Translator",
    description:
      "A macOS menu bar clipboard translator — copy text, get instant translations with zero interruption.",
    longDescription:
      "LingoBar is a macOS menu bar translation tool that listens for clipboard text changes and delivers translations with minimal disruption. Copy any text and LingoBar automatically translates it, previews the result in a menu bar popover, and optionally writes it back to the clipboard. Designed as a native Swift app with SwiftUI and AppKit, it offers a lightweight, system-integrated experience. Local translation statistics help you track usage, and all settings are auto-saved for instant effect.",
    url: "https://github.com/caterpi11ar/lingobar",
    category: "UtilitiesApplication",
    features: [
      "macOS 15+ menu bar resident translator",
      "Auto clipboard listening and translation",
      "Real-time menu bar status and preview",
      "Optional auto clipboard write-back",
      "Local translation statistics",
      "Customizable settings with auto-save",
    ],
    techStack: ["Swift", "SwiftUI", "AppKit", "XcodeGen"],
    keywords:
      "macos translator, menu bar translator, clipboard translation, swiftui, macos utility, lingobar, 剪贴板翻译",
    status: "live",
    span: "col-span-1 row-span-1",
  },
  {
    slug: "wechat-chat-generator",
    title: "WeChat Chat Generator",
    tagline: "Utility",
    description:
      "Online WeChat chat screenshot generator. Fast, realistic, and easy to use.",
    longDescription:
      "WeChat Chat Generator is a free online tool that creates realistic WeChat chat screenshots. Generate custom WeChat conversation screenshots instantly — no app required. Customize sender names, avatars, message content, timestamps, and more to create authentic-looking WeChat conversation images for presentations, social media, or creative projects.",
    url: "https://wechat.caterpi11ar.com/",
    category: "UtilitiesApplication",
    features: [
      "Realistic WeChat UI recreation",
      "Custom sender names and avatars",
      "Multiple message types support",
      "Timestamp customization",
      "One-click screenshot export",
      "No installation required",
    ],
    techStack: ["Next.js", "React", "Canvas API", "Tailwind CSS"],
    keywords:
      "WeChat chat screenshot generator, fake WeChat chat, WeChat screenshot maker, 微信聊天截图生成器",
    status: "live",
    span: "col-span-1 row-span-1",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug)
}
