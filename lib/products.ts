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
    tagline: "Smart Travel",
    description:
      "Upload photos to auto-generate visual route maps and smooth highlight vlogs.",
    longDescription:
      "Locusify is a smart travel tool that lets you upload photos to auto-generate visual route maps and smooth highlight vlogs. It automatically extracts GPS data and timestamps from photos to reconstruct your journey on an interactive map. Whether you're documenting a weekend getaway or a months-long backpacking trip, Locusify turns your photo collection into a beautiful, shareable travel story.",
    url: "https://locusify.caterpi11ar.com/",
    logo: "/locusify.png",
    category: "TravelApplication",
    features: [
      "Auto-extract GPS data from photos",
      "Interactive route map generation",
      "Highlight vlog creation",
      "Timeline-based journey reconstruction",
      "Shareable travel stories",
      "Multi-format photo support",
    ],
    techStack: ["Next.js", "React", "Mapbox", "FFmpeg", "EXIF.js"],
    keywords:
      "travel route map, photo to map, travel vlog generator, trip visualization",
    status: "live",
    span: "col-span-2 row-span-2",
  },
  {
    slug: "giclaw",
    title: "GIClaw",
    tagline: "Gaming AI Agent",
    description:
      "LLM-driven Genshin Impact agent — automates daily tasks via cloud gaming with visual AI.",
    longDescription:
      "GIClaw (Genshin Impact Claw) is an open-source visual AI agent that automates repetitive daily tasks in Genshin Impact through cloud gaming. Instead of hardcoded coordinates or selectors, GIClaw uses vision-capable AI models to understand game screenshots and decide actions autonomously. It handles login, Welkin Moon claims, mail collection, and more — all without requiring a local game client. Define new skills by writing a Markdown file, no code required. Inspired by OpenClaw.",
    url: "https://giclaw.cn",
    category: "GameApplication",
    features: [
      "Vision AI-driven game automation",
      "File-driven Markdown skill system",
      "Multi-model support (Gemini, OpenAI, Doubao)",
      "Cloud gaming optimized — no local client",
      "Daemon mode with TUI dashboard",
      "Open source & extensible",
    ],
    techStack: ["TypeScript", "Node.js", "Playwright", "Gemini API"],
    keywords:
      "genshin impact agent, AI game agent, cloud gaming automation, 原神自动化, giclaw, visual AI agent",
    status: "live",
    span: "col-span-1 row-span-1",
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
    slug: "viper",
    title: "Viper",
    tagline: "Open Source Library",
    description:
      "Minimal Viper-inspired configuration library for TypeScript, built with Zod and JSON5.",
    longDescription:
      "Viper is a minimal, Viper-inspired configuration library for TypeScript, built with Zod validation and JSON5 support. It provides type-safe config management for Node.js applications, making it easy to handle environment-specific configurations with strong runtime validation. Inspired by Go's popular Viper library, it brings the same ergonomic config management to the TypeScript ecosystem.",
    url: "https://viper.caterpi11ar.com/",
    category: "DeveloperApplication",
    features: [
      "Type-safe configuration with Zod",
      "JSON5 config file support",
      "Environment variable binding",
      "Hierarchical config merging",
      "Minimal API surface",
      "Zero dependencies beyond Zod",
    ],
    techStack: ["TypeScript", "Zod", "JSON5", "Node.js"],
    keywords:
      "TypeScript config library, Zod config, JSON5, type-safe configuration, Node.js config",
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
    span: "col-span-1 row-span-2",
  },
  {
    slug: "lark-imagine-robot",
    title: "Lark Imagine Robot",
    tagline: "AI Bot",
    description:
      "Lark/Feishu bot for AI-powered image generation and artistic creation.",
    longDescription:
      "Lark Imagine Robot is an open-source Lark (Feishu) bot for AI-powered image generation and artistic creation. Bring AI image generation directly into your Lark workspace — team members can generate images, illustrations, and creative artwork using natural language prompts without leaving the collaboration platform.",
    url: "https://github.com/caterpi11ar/lark-imagine-robot",
    category: "BusinessApplication",
    features: [
      "Natural language image generation",
      "Direct Lark/Feishu integration",
      "Team-wide access in workspace",
      "Multiple AI model support",
      "Artistic style customization",
      "Open source & self-hostable",
    ],
    techStack: ["Node.js", "Lark SDK", "OpenAI API", "TypeScript"],
    keywords: "Lark bot, Feishu bot, AI image generation, 飞书机器人, AI绘图",
    status: "live",
    span: "col-span-1 row-span-1",
  },
  {
    slug: "sri-calculator",
    title: "SRI Calculator",
    tagline: "Assessment Tool",
    description:
      "Sexual Repression Index Calculator — a professional mental health assessment tool.",
    longDescription:
      "SRI Calculator (Sexual Repression Index Calculator) is a professional mental health assessment tool for measuring and evaluating sexual repression levels. It provides a structured, research-informed questionnaire with detailed scoring and interpretation to help individuals better understand their psychological patterns around sexuality.",
    url: "https://sexual.caterpi11ar.com/",
    category: "HealthApplication",
    features: [
      "Research-informed questionnaire",
      "Detailed scoring algorithm",
      "Comprehensive result interpretation",
      "Privacy-first design",
      "Multi-language support",
      "Anonymous assessment",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    keywords:
      "SRI calculator, sexual repression index, mental health assessment tool",
    status: "live",
    span: "col-span-2 row-span-1",
  },
  {
    slug: "ai-system-prompts",
    title: "AI System Prompts",
    tagline: "AI Research",
    description:
      "Full system prompts from 30+ AI coding tools — Claude Code, Cursor, Devin, Windsurf, v0 & more.",
    longDescription:
      "AI System Prompts Playground is a curated collection of 30+ AI coding tools' system prompts — including Claude Code, Cursor, Devin AI, Windsurf, Replit, v0, Perplexity, and more. Searchable, SEO-friendly, and open for exploration. Compare how different AI tools are instructed, study prompt engineering patterns, and gain insights into the design of AI coding assistants.",
    url: "https://ai.caterpi11ar.com/",
    category: "DeveloperApplication",
    features: [
      "30+ AI tool system prompts",
      "Full-text search",
      "Side-by-side comparison",
      "Regular updates with new tools",
      "SEO-friendly pages",
      "Open for exploration",
    ],
    techStack: ["Next.js", "React", "MDX", "Tailwind CSS"],
    keywords:
      "AI system prompts, Claude Code system prompt, Cursor system prompt, Devin AI prompt, AI coding tools, system prompt collection",
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
