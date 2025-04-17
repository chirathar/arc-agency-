"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import StructuredData from "./structured-data"

interface BlogPostProps {
  title: string
  date: string
  author: string
  readTime: string
  content: React.ReactNode
  excerpt?: string
  slug: string
  image?: string
}

export default function BlogPost({
  title,
  date,
  author,
  readTime,
  content,
  excerpt = "",
  slug,
  image = "/writing-desk-inspiration.png",
}: BlogPostProps) {
  // Format date for structured data
  const isoDate = new Date(date).toISOString()

  // Extract text content for description if excerpt is not provided
  const contentText = excerpt || "Read our latest blog post on Arc Agency's website."

  const articleData = {
    headline: title,
    description: contentText,
    image: `https://arcagency.in${image}`,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Arc Agency",
      logo: {
        "@type": "ImageObject",
        url: "https://arcagency.in/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://arcagency.in/blog/${slug}`,
    },
  }

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950">
      <StructuredData type="Article" data={articleData} />

      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Back button */}
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="text-purple-600 dark:text-purple-400 p-0 hover:bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Blog header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-purple-600 dark:text-purple-400 mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                <time dateTime={isoDate}>{date}</time>
              </div>
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                <span>{readTime} read</span>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-md">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-auto object-cover"
              width={1200}
              height={630}
            />
          </div>

          {/* Blog content */}
          <article className="prose prose-purple dark:prose-invert max-w-none">{content}</article>

          {/* Call to action */}
          <div className="mt-16 p-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800">
            <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">
              Ready to elevate your digital presence?
            </h3>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Our team of experts can help you implement the strategies discussed in this article and take your online
              presence to the next level.
            </p>
            <Button
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Get in Touch
            </Button>
          </div>

          {/* Share buttons */}
          <div className="mt-10 flex items-center justify-between border-t border-purple-100 dark:border-purple-900 pt-6">
            <div className="text-sm text-slate-600 dark:text-slate-400">Share this article:</div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-purple-200 dark:border-purple-800">
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="border-purple-200 dark:border-purple-800">
                LinkedIn
              </Button>
              <Button variant="outline" size="sm" className="border-purple-200 dark:border-purple-800">
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
