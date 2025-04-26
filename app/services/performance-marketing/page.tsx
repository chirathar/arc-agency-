import type { Metadata } from "next"
import { CirclePattern, Dots, WavyLine } from "@/components/decorative-elements"
import { GridPattern } from "@/components/illustrations"
import { GradientOrb, GeometricCluster, FloatingShapes3D } from "@/components/abstract-visuals"
import { BarChart, Target, TrendingUp, PieChart, ArrowRight, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "ROI-Focused Performance Marketing Services | Arc Agency",
  description:
    "Our team runs performance-driven ad campaigns across platforms like Google, Facebook, and Instagram. We optimize for results, not just clicks—so your brand gets real ROI and visibility.",
  keywords:
    "performance marketing, ROI, digital advertising, Google Ads, Facebook Ads, Instagram Ads, PPC, social media marketing",
  alternates: {
    canonical: "/performance-marketing",
  },
  openGraph: {
    title: "ROI-Focused Performance Marketing Services | Arc Agency",
    description:
      "Our team runs performance-driven ad campaigns across platforms like Google, Facebook, and Instagram. We optimize for results, not just clicks—so your brand gets real ROI and visibility.",
    url: "https://arcagency.in/performance-marketing",
    siteName: "Arc Agency",
    locale: "en_US",
    type: "website",
  },
}

export default function PerformanceMarketingPage() {
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
              <BarChart className="h-4 w-4 mr-2" />
              Performance Marketing
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300">
                ROI-Focused Performance
              </span>
              <span className="block mt-2">Marketing Services</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8 max-w-3xl">
              Our team runs performance-driven ad campaigns across platforms like Google, Facebook, and Instagram. We
              optimize for results, not just clicks—so your brand gets real ROI and visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <FloatingShapes3D className="w-full h-full opacity-10" />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Platforms We Specialize In
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We create and manage high-performing campaigns across the most effective advertising platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Platform 1 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.54 7.6C22.4 7.1 22.2 6.6 21.9 6.1C21.6 5.6 21.2 5.2 20.8 4.8C20.4 4.4 19.9 4 19.4 3.7C18.9 3.4 18.4 3.2 17.9 3.1C17.4 3 16.9 2.9 16.4 2.9C15.9 2.9 15.4 3 14.9 3.1C14.4 3.2 13.9 3.4 13.4 3.7C12.9 4 12.4 4.4 12 4.8C11.6 5.2 11.2 5.6 10.9 6.1C10.6 6.6 10.4 7.1 10.3 7.6C10.2 8.1 10.1 8.6 10.1 9.1C10.1 9.6 10.2 10.1 10.3 10.6C10.4 11.1 10.6 11.6 10.9 12.1C11.2 12.6 11.6 13 12 13.4C12.4 13.8 12.9 14.2 13.4 14.5C13.9 14.8 14.4 15 14.9 15.1C15.4 15.2 15.9 15.3 16.4 15.3C16.9 15.3 17.4 15.2 17.9 15.1C18.4 15 18.9 14.8 19.4 14.5C19.9 14.2 20.4 13.8 20.8 13.4C21.2 13 21.6 12.6 21.9 12.1C22.2 11.6 22.4 11.1 22.5 10.6C22.6 10.1 22.7 9.6 22.7 9.1C22.7 8.6 22.6 8.1 22.54 7.6ZM16.4 13.8C15.1 13.8 13.8 13.3 12.9 12.4C12 11.5 11.5 10.2 11.5 8.9C11.5 7.6 12 6.3 12.9 5.4C13.8 4.5 15.1 4 16.4 4C17.7 4 19 4.5 19.9 5.4C20.8 6.3 21.3 7.6 21.3 8.9C21.3 10.2 20.8 11.5 19.9 12.4C19 13.3 17.7 13.8 16.4 13.8Z"
                    fill="currentColor"
                  />
                  <path d="M9 8.9V15.7H7V8.9H4.5V7H11.5V8.9H9Z" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Google Ads</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We create and optimize search, display, and video campaigns that target users actively searching for
                your products or services.
              </p>
            </div>

            {/* Platform 2 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Facebook & Instagram Ads</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We leverage Meta's powerful targeting capabilities to reach your ideal audience with visually compelling
                ads that drive engagement and conversions.
              </p>
            </div>

            {/* Platform 3 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">LinkedIn Ads</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We create targeted B2B campaigns that reach decision-makers and professionals in your industry,
                generating high-quality leads for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full py-16 md:py-24 bg-purple-50 dark:bg-slate-900 relative overflow-hidden">
        <WavyLine className="text-purple-600/20 bottom-0 left-0 hidden md:block" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
              <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Our ROI-Focused Approach
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We don't just run ads—we implement a strategic methodology designed to maximize your return on investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white mr-4">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Data-Driven Strategy</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We analyze your industry, competitors, and target audience to develop a customized strategy that
                delivers results.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Comprehensive market analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Competitor benchmarking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Audience segmentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white mr-4">
                  <PieChart className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Continuous Optimization</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We constantly monitor and refine your campaigns to improve performance and maximize your advertising
                budget.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">A/B testing of ad creative and copy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Bid strategy optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Weekly performance analysis</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-purple-600 dark:text-purple-400">Transparent Reporting</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Clear, jargon-free reports that show exactly how your campaigns are performing and the ROI they're
                generating.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2 text-purple-600 dark:text-purple-400">Conversion Tracking</h4>
              <p className="text-slate-600 dark:text-slate-400">
                We implement robust tracking to measure real business outcomes like leads, sales, and revenue—not just
                clicks.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
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
              <h4 className="text-lg font-bold mb-2 text-purple-600 dark:text-purple-400">Scalable Growth</h4>
              <p className="text-slate-600 dark:text-slate-400">
                We identify what's working and scale your campaigns strategically to grow your business without wasting
                your budget.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Boost Your Marketing ROI?</h2>
            <p className="text-lg text-white/80 mb-8">
              Let's create a performance marketing strategy that drives real business results for your brand.
            </p>
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-100 shadow-lg hover:shadow-xl transition-all"
              >
                Get Your Free Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
