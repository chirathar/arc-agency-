"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import Logo from "./logo"

// Import the scroll utility at the top of the file
import { scrollToSection } from "@/lib/scroll-utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection("why-choose-us")}
            className="text-sm font-medium transition-colors hover:text-primary relative group"
          >
            Why Choose Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </button>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary relative group">
            Blog
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
          </Link>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="default"
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 text-white shadow-sm hover:shadow transition-all"
          >
            Contact Us
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          isMenuOpen ? "slide-in-from-top-2" : "hidden",
        )}
      >
        <div className="flex flex-col space-y-4">
          <button
            className="text-lg font-medium transition-colors hover:text-primary text-left"
            onClick={() => {
              scrollToSection("about")
              setIsMenuOpen(false)
            }}
          >
            About
          </button>
          <button
            className="text-lg font-medium transition-colors hover:text-primary text-left"
            onClick={() => {
              scrollToSection("services")
              setIsMenuOpen(false)
            }}
          >
            Services
          </button>
          <button
            className="text-lg font-medium transition-colors hover:text-primary text-left"
            onClick={() => {
              scrollToSection("why-choose-us")
              setIsMenuOpen(false)
            }}
          >
            Why Choose Us
          </button>
          <Link
            href="/blog"
            className="text-lg font-medium transition-colors hover:text-primary text-left"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Button
            onClick={() => {
              scrollToSection("contact")
              setIsMenuOpen(false)
            }}
            variant="default"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
}
