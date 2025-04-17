import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import StructuredData from "@/components/structured-data"
import { CirclePattern, Dots, WavyLine } from "@/components/decorative-elements"
import { GridPattern } from "@/components/illustrations"

export const metadata = {
  title: "Blog | Arc Agency",
  description: "Insights, tips, and trends in web development and digital marketing from Arc Agency experts.",
  keywords: "web development blog, digital marketing blog, SEO tips, web design trends, performance marketing",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Arc Agency",
    description: "Insights, tips, and trends in web development and digital marketing from Arc Agency experts.",
    url: "https://arcagency.in/blog",
    type: "website",
  },
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image?: string
}

const blogPosts: BlogPost[] = [
  {
    slug: "web-development-trends",
    title: "5 Web Development Trends That Will Dominate 2025",
    excerpt:
      "Discover the top web development trends that will shape the digital landscape in 2025 and how your business can stay ahead of the curve.",
    date: "April 15, 2025",
    readTime: "6 min",
    category: "Web Development",
    image: "/futuristic-web-trends.png",
  },
  {
    slug: "seo-strategies",
    title: "Advanced SEO Strategies to Boost Your Rankings",
    excerpt:
      "Learn proven SEO techniques that can help your website climb search engine rankings and drive more organic traffic to your business.",
    date: "April 8, 2025",
    readTime: "5 min",
    category: "SEO",
    image: "/strategic-seo-roadmap.png",
  },
  {
    slug: "meta-advertising",
    title: "Maximizing ROI with Meta Advertising in 2025",
    excerpt:
      "Explore effective strategies for Facebook and Instagram advertising that deliver measurable results and maximize your marketing budget.",
    date: "March 30, 2025",
    readTime: "7 min",
    category: "Digital Marketing",
    image: "/connected-world-advertising.png",
  },
]

export default function BlogPage() {
  const blogListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: `https://arcagency.in/blog/${post.slug}`,
        image: `https://arcagency.in${post.image}`,
        datePublished: new Date(post.date).toISOString(),
        author: {
          "@type": "Organization",
          name: "Arc Agency",
        },
      },
    })),
  }

  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      <StructuredData type="BlogPosting" data={blogListData} />

      {/* Background grid pattern */}
      <GridPattern />

      {/* Decorative elements */}
      <CirclePattern className="text-purple-600 dark:text-purple-400 top-0 right-0 transform translate-x-1/2 -translate-y-1/4 hidden md:block" />
      <Dots className="text-purple-600 dark:text-purple-400 bottom-20 left-10 hidden md:block" />
      <WavyLine className="text-purple-600 dark:text-purple-400 bottom-0 right-0 transform translate-y-1/2 hidden md:block" />

      {/* Character illustration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 transform -translate-x-1/4 hidden xl:block">
        <img
          src="/character-developer.png"
          alt="Developer character illustration"
          className="w-full h-full object-contain opacity-70"
        />
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 transform rotate-12 hidden lg:block">
        <img
          src="/floating-shapes.png"
          alt="Floating geometric shapes"
          className="w-full h-full object-contain opacity-70"
        />
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-600 dark:text-purple-400">
              Arc Agency Blog
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed">
              Insights, tips, and trends in web development and digital marketing from our experts.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="flex flex-col h-full rounded-lg border border-purple-100 dark:border-purple-900 bg-white dark:bg-slate-900 shadow-sm overflow-hidden transition-all hover:shadow-md hover:translate-y-[-4px]"
            >
              <div className="p-1">
                <div className="h-48 w-full bg-purple-100 dark:bg-purple-900/30 rounded-t-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={post.image || `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(post.title)}`}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">{post.title}</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    <span>{post.readTime} read</span>
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
