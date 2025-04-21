"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Logo() {
  const { theme, resolvedTheme } = useTheme()
  const [currentTheme, setCurrentTheme] = useState("light")

  useEffect(() => {
    setCurrentTheme(resolvedTheme || theme || "light")
  }, [theme, resolvedTheme])

  const logoSrc = currentTheme === "dark" ? "/logo-dark.png" : "/logo-light.png"

  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src={logoSrc}
        alt="Arc Agency Logo"
        width={36}
        height={36}
        className="h-9 w-9 object-contain"
      />
      <span className="text-lg font-semibold whitespace-nowrap">Arc Agency</span>
    </Link>
  )
}
