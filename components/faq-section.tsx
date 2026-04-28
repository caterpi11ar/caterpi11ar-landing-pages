"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    id: "what-is-caterpi11ar",
    question: "What is Caterpi11ar AI?",
    answer:
      "Caterpi11ar AI is a software studio that builds intelligent tools and apps. Our current lineup includes Locusify (privacy-first photo map & journey replay app), Dentic (habit-building app), CC Notify (notification manager for AI CLI tools), LingoBar (macOS menu bar clipboard translator), and WeChat Chat Generator.",
  },
  {
    question: "What is Locusify?",
    id: "what-is-locusify",
    answer:
      "Locusify is a privacy-first travel app that transforms GPS photos into interactive route maps and animated journey replays. All processing happens 100% on-device — no server uploads, no data collection. Close the app and data is gone.",
  },
  {
    id: "what-is-cc-notify",
    question: "What is CC Notify?",
    answer:
      "CC Notify is a cross-platform notification manager for AI CLI tools like Claude Code, Codex, and Gemini CLI. It captures long-running task events through hooks and routes them to native notifications, Slack, Discord, Telegram, Feishu, sound, voice, or tray badges. Built with Tauri and Rust, it also ships a standalone CLI for headless and SSH workflows.",
  },
  {
    id: "what-is-lingobar",
    question: "What is LingoBar?",
    answer:
      "LingoBar is a macOS menu bar clipboard translator built with SwiftUI and AppKit. Copy any text and LingoBar translates it instantly, previews the result in the menu bar, and can optionally write the translation back to your clipboard — all with local stats and zero interruption to your workflow.",
  },
  {
    id: "what-is-wechat-gen",
    question: "What is WeChat Chat Generator?",
    answer:
      "WeChat Chat Generator is a free online tool for creating realistic WeChat chat screenshots. Customize sender names, messages, and timestamps to generate authentic-looking WeChat conversation images instantly — no app required.",
  },
  {
    id: "is-open-source",
    question: "Is Caterpi11ar AI open source?",
    answer:
      "Yes, several products are open source. Dentic (habit app), CC Notify (AI CLI notification manager), and LingoBar (macOS clipboard translator) are all available on GitHub at github.com/caterpi11ar.",
  },
]

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !listRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      const items = listRef.current?.querySelectorAll("[data-faq-item]")
      if (items) {
        gsap.from(items, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / FAQ</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          FREQUENTLY ASKED
        </h2>
      </div>

      <div ref={listRef} className="max-w-3xl space-y-0">
        {faqs.map((faq) => (
          <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div data-faq-item className="border-b border-border/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-mono text-sm text-foreground/90 group-hover:text-accent transition-colors duration-200 pr-4">
          {question}
        </span>
        <span
          className={cn(
            "font-mono text-lg text-muted-foreground transition-transform duration-300 flex-shrink-0",
            isOpen && "rotate-45",
          )}
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          isOpen ? "max-h-96 pb-6" : "max-h-0",
        )}
      >
        <p className="font-mono text-xs text-muted-foreground leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  )
}
