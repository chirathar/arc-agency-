import type { Metadata } from "next"
import { CirclePattern, Dots, WavyLine } from "@/components/decorative-elements"
import { GridPattern } from "@/components/illustrations"
import { GradientOrb, GeometricCluster, FloatingShapes3D } from "@/components/abstract-visuals"
import { Search, ArrowRight, BarChart, Settings, Globe, FileText, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Search Engine Optimization Services for India | Arc Agency",
  description:
    "From technical SEO audits to high-quality backlinks, our strategies are designed to push your site up the rankings and generate long-term traffic growth across India.",
  keywords:
    "SEO, search engine optimization, India, technical SEO, on-page SEO, off-page SEO, backlinks, keyword research, local SEO",
  alternates: {
    canonical: "/seo",
  },
  openGraph: {
    title: "Search Engine Optimization Services for India | Arc Agency",
    description:
      "From technical SEO audits to high-quality backlinks, our strategies are designed to push your site up the rankings and generate long-term traffic growth across India.",
    url: "https://arcagency.in/seo",
    siteName: "Arc Agency",
    locale: "en_US",
    type: "website",
  },
}

export default function SEOPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-br from-purple-950 via-slate-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <GridPattern />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10"></div>

        {/* Decorative elements */}
        <CirclePattern className="text-purple-600/20 top-0 right-0 transform translate-x-1/2 -translate-y-1/4 hidden md:block" />
        <Dots className="text-purple-600/20 bottom-20 left-10 hidden md:block" />

        {/* Abstract visual elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 hidden lg:block">
          <GradientOrb className="w-full h-full opacity-30" />
        </div>

        <div className="absolute bottom-0 left-0 w-96 h-96 hidden lg:block">
          <GeometricCluster className="w-full h-full opacity-20" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-800/50 text-purple-300 text-sm font-medium mb-6">
              <Search className="h-4 w-4 mr-2" />
              Search Engine Optimization
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300">
                Search Engine Optimization
              </span>
              <span className="block mt-2">Services for India</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8 max-w-3xl">
              From technical SEO audits to high-quality backlinks, our strategies are designed to push your site up the
              rankings and generate long-term traffic growth across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <span className="relative z-10 flex items-center">
                  Get a Free SEO Audit
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"></span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 dark:border-purple-700 text-purple-400 dark:text-purple-300 hover:bg-purple-950/30"
              >
                View SEO Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingShapes3D className="w-full h-full opacity-10" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Our Comprehensive SEO Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We provide end-to-end SEO solutions tailored to the unique needs of businesses in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Technical SEO</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We optimize your website's technical foundation to ensure search engines can crawl, index, and rank your
                content effectively.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Site architecture optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Page speed improvements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Mobile optimization</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">On-Page SEO</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We optimize your content and HTML source code to improve relevance and visibility for targeted keywords.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Keyword optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Content enhancement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Meta tag optimization</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <LinkIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Off-Page SEO</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We build your site's authority through high-quality backlinks and strategic digital PR.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Link building campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Brand mentions & citations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Social signals optimization</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Local SEO</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We help your business dominate local search results and attract more customers from your target areas in
                India.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Google Business Profile optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Local citation building</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Location-specific content</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Search className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Keyword Research</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We identify high-value keywords that your target audience is searching for in India.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Competitor keyword analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Search intent mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Long-tail keyword opportunities</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">SEO Analytics & Reporting</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We provide transparent reporting on your SEO performance and continuous optimization recommendations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Ranking progress tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Traffic & conversion analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Competitor benchmarking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="w-full py-16 md:py-24 bg-purple-50 dark:bg-slate-900 relative overflow-hidden">
        <WavyLine className="text-purple-600/20 bottom-0 left-0 hidden md:block" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
              <Search className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Our SEO Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We follow a proven methodology to improve your search engine rankings and drive sustainable organic
              traffic.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-purple-200 dark:bg-purple-800 transform md:translate-x-[-50%]"></div>

              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16">
                <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                  <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                    Comprehensive SEO Audit
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We analyze your website's current SEO performance, identify issues, and uncover opportunities for
                    improvement.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold transform md:translate-x-[-50%] z-10 order-1 md:order-2">
                  1
                </div>
                <div className="flex-1 md:pl-12 order-3"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16">
                <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1"></div>
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold transform md:translate-x-[-50%] z-10 order-1 md:order-2">
                  2
                </div>
                <div className="flex-1 md:pl-12 order-3 mt-6 md:mt-0">
                  <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Strategy Development</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We create a customized SEO strategy based on your business goals, target audience, and competitive
                    landscape in India.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16">
                <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                  <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                    On-Page & Technical Optimization
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We implement technical fixes and optimize your content to improve search engine visibility and user
                    experience.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold transform md:translate-x-[-50%] z-10 order-1 md:order-2">
                  3
                </div>
                <div className="flex-1 md:pl-12 order-3"></div>
              </div>

              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-16">
                <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1"></div>
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold transform md:translate-x-[-50%] z-10 order-1 md:order-2">
                  4
                </div>
                <div className="flex-1 md:pl-12 order-3 mt-6 md:mt-0">
                  <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                    Content Creation & Optimization
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We develop and optimize high-quality, relevant content that satisfies user intent and targets
                    valuable keywords.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1 mt-6 md:mt-0">
                  <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                    Monitoring & Continuous Improvement
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We track your SEO performance, provide regular reports, and continuously refine our strategy to
                    maximize results.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold transform md:translate-x-[-50%] z-10 order-1 md:order-2">
                  5
                </div>
                <div className="flex-1 md:pl-12 order-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Why Choose Arc Agency for SEO
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We deliver results-driven SEO services tailored to the unique needs of businesses in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-slate-800/50 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">India-Focused Expertise</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We understand the unique challenges and opportunities of the Indian search landscape, including local
                search behaviors and regional nuances.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-slate-800/50 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Results-Driven Approach</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We focus on metrics that matter—traffic, leads, and revenue—not just rankings. Our strategies are
                designed to deliver measurable business results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-slate-800/50 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Transparent Reporting</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We provide clear, jargon-free reports that show exactly how your SEO campaign is performing and the
                impact on your business.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-slate-800/50 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">White Hat Techniques Only</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We only use ethical, sustainable SEO practices that comply with search engine guidelines, ensuring
                long-term success and avoiding penalties.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-slate-800/50 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Dedicated SEO Team</h3>
              <p className="text-slate-600 dark:text-slate-400">
                You'll work with a team of experienced SEO specialists who are committed to your success and stay
                up-to-date with the latest search engine algorithms and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
            <p className="text-lg text-white/80 mb-8">
              Let's create an SEO strategy that drives sustainable organic traffic and growth for your business in
              India.
            </p>
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-100 shadow-lg hover:shadow-xl transition-all"
              >
                Get Your Free SEO Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
