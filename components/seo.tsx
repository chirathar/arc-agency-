"use client"

import Head from "next/head"
import { useRouter } from "next/router"

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: "website" | "article"
  twitterHandle?: string
}

export default function SEO({
  title = "Arc Agency | Web Development & Performance Marketing",
  description = "Arc is a digital agency specializing in web development and performance marketing, delivering impactful websites and results-driven ad campaigns.",
  canonical,
  ogImage = "/og-image.jpg", // Default OG image
  ogType = "website",
  twitterHandle = "@arcagency",
}: SEOProps) {
  const router = useRouter()
  const siteUrl = "https://arcagency.in"
  const pageUrl = canonical || `${siteUrl}${router.asPath}`
  const fullTitle = title.includes("Arc Agency") ? title : `${title} | Arc Agency`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="Arc Agency" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#7c3aed" />
    </Head>
  )
}
