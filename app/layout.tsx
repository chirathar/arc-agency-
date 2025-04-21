import type React from "react"
import "@/app/globals.css"
import { Inter, Montserrat } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import StructuredData from "@/components/structured-data"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

export const metadata = {
  title: "Arc Agency | Web Development & Performance Marketing",
  description:
    "Arc is a digital agency specializing in web development and performance marketing, delivering impactful websites and results-driven ad campaigns.",
  keywords: "web development, performance marketing, SEO, Meta ads, digital agency, website design",
  authors: [{ name: "Arc Agency" }],
  creator: "Arc Agency",
  publisher: "Arc Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://arcagency.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Arc Agency | Web Development & Performance Marketing",
    description:
      "Arc is a digital agency specializing in web development and performance marketing, delivering impactful websites and results-driven ad campaigns.",
    url: "https://arcagency.in",
    siteName: "Arc Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arc Agency - Web Development & Performance Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arc Agency | Web Development & Performance Marketing",
    description:
      "Arc is a digital agency specializing in web development and performance marketing, delivering impactful websites and results-driven ad campaigns.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationData = {
    name: "Arc Agency",
    url: "https://arcagency.in",
    logo: "https://arcagency.in/logo-light.png",
    sameAs: ["https://www.instagram.com/arcagency.in", "https://www.linkedin.com/company/arcagency-in/"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8015117945",
      contactType: "customer service",
      email: "hello@arcagency.in",
    },
  }

  const websiteData = {
    name: "Arc Agency",
    url: "https://arcagency.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://arcagency.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <StructuredData type="Organization" data={organizationData} />
          <StructuredData type="WebSite" data={websiteData} />
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
