"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterHandle?: string;
}

export default function SEO({
  title = "arcagency | Web Development & Marketing Experts in India",
  description = "arcagency is a leading web development and marketing agency in India. We create stunning websites, build brands, and drive growth for startups, local businesses, and corporates.",
  canonical,
  ogImage = "/og-image.jpg", // Default OG image path (should be inside /public folder)
  ogType = "website",
  twitterHandle = "@arcagency", // If you don't have a Twitter yet, we can update later
}: SEOProps) {
  const pathname = usePathname();
  const siteUrl = "https://arcagency.in"; // <-- Your live domain here
  const pageUrl = canonical || `${siteUrl}${pathname}`;

  // Ensure brand consistency in title
  const fullTitle = title.includes("arcagency") ? title : `${title} | arcagency`;

  return (
    <Head>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="arcagency" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Favicon + Theme */}
      <meta name="theme-color" content="#7c3aed" />
    </Head>
  );
}
