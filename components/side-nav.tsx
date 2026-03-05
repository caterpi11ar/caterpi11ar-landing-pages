"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Home, Newspaper, Package, Compass, Info } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "signals", label: "Updates", icon: Newspaper },
  { id: "work", label: "Products", icon: Package },
  { id: "principles", label: "Principles", icon: Compass },
  { id: "colophon", label: "About", icon: Info },
]

export function SideNav() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Desktop side nav */}
      <nav aria-label="Main navigation" className="fixed left-0 top-0 z-50 h-screen w-16 md:w-20 hidden md:flex flex-col border-r border-border/30 bg-background/80 backdrop-blur-sm">
        <div className="flex justify-center pt-5">
          <a href="#hero" className="block">
            <Image
              src="/caterpi11ar.jpg"
              alt="Caterpi11ar AI logo"
              width={32}
              height={32}
              className="rounded-sm"
            />
          </a>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-6 px-4">
          {navItems.map(({ id, label }) => (
            <button key={id} onClick={() => scrollToSection(id)} className="group relative flex items-center gap-3" aria-label={`Navigate to ${label}`}>
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-all duration-300",
                  activeSection === id ? "bg-accent scale-125" : "bg-muted-foreground/40 group-hover:bg-foreground/60",
                )}
              />
              <span
                className={cn(
                  "absolute left-6 font-mono text-[10px] uppercase tracking-widest opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:left-8 whitespace-nowrap",
                  activeSection === id ? "text-accent" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav aria-label="Mobile navigation" className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-around border-t border-border/30 bg-background/80 backdrop-blur-sm px-2 py-2">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="flex flex-col items-center gap-1 py-1 px-3"
          >
            <Icon
              className={cn(
                "h-4 w-4 transition-colors duration-200",
                activeSection === id ? "text-accent" : "text-muted-foreground",
              )}
            />
            <span
              className={cn(
                "font-mono text-[8px] uppercase tracking-widest transition-colors duration-200",
                activeSection === id ? "text-accent" : "text-muted-foreground",
              )}
            >
              {label}
            </span>
          </button>
        ))}
      </nav>
    </>
  )
}
