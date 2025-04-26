import type { Metadata } from "next"
import { CirclePattern, Dots, WavyLine } from "@/components/decorative-elements"
import { GridPattern } from "@/components/illustrations"
import { GradientOrb, GeometricCluster, FloatingShapes3D } from "@/components/abstract-visuals"
import { Smartphone, Zap, Layout, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mobile UX & App Design Services in India | Arc Agency",
  description:
    "We build responsive interfaces and mobile-friendly web experiences that look stunning and perform perfectly on all devices—from smartphones to tablets.",
  keywords: "mobile UX, app design, responsive design, mobile-friendly websites, UI/UX design, India",
  alternates: {
    canonical: "/mobile-ux",
  },
  openGraph: {
    title: "Mobile UX & App Design Services in India | Arc Agency",
    description:
      "We build responsive interfaces and mobile-friendly web experiences that look stunning and perform perfectly on all devices—from smartphones to tablets.",
    url: "https://arcagency.in/mobile-ux",
    siteName: "Arc Agency",
    locale: "en_US",
    type: "website",
  },
}

export default function MobileUXPage() {
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
              <Smartphone className="h-4 w-4 mr-2" />
              Mobile UX & App Design
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300">
                Mobile UX & App Design
              </span>
              <span className="block mt-2">Services in India</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8 max-w-3xl">
              We build responsive interfaces and mobile-friendly web experiences that look stunning and perform
              perfectly on all devices—from smartphones to tablets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <span className="relative z-10 flex items-center">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"></span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 dark:border-purple-700 text-purple-400 dark:text-purple-300 hover:bg-purple-950/30"
              >
                View Our Portfolio
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
              Our Mobile UX & App Design Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We create intuitive, engaging, and high-performing mobile experiences that users love and businesses rely
              on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Responsive Web Design</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We create websites that adapt seamlessly to any screen size, ensuring a consistent and optimal user
                experience across all devices.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Layout className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Mobile App UI/UX Design</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We design intuitive and visually appealing interfaces for iOS and Android applications that engage users
                and drive conversions.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">User Experience Research</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We conduct thorough research to understand your users' needs, behaviors, and pain points to create
                mobile experiences that truly resonate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 md:py-24 bg-purple-50 dark:bg-slate-900 relative overflow-hidden">
        <WavyLine className="text-purple-600/20 bottom-0 left-0 hidden md:block" />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 mb-4">
              <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Our Mobile Design Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We follow a proven methodology to create mobile experiences that are both beautiful and functional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="relative pl-12 pb-12 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="absolute left-[-18px] top-0 w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Discovery & Research</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We begin by understanding your business goals, target audience, and competitive landscape to inform
                  our design strategy.
                </p>
              </div>

              <div className="relative pl-12 pb-12 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="absolute left-[-18px] top-0 w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                  Wireframing & Prototyping
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We create low and high-fidelity wireframes to establish the structure and flow of your mobile
                  experience before moving to visual design.
                </p>
              </div>
            </div>

            <div>
              <div className="relative pl-12 pb-12 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="absolute left-[-18px] top-0 w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Visual Design</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We craft visually stunning interfaces that align with your brand identity while prioritizing usability
                  and accessibility.
                </p>
              </div>

              <div className="relative pl-12 pb-12 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="absolute left-[-18px] top-0 w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Testing & Refinement</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We conduct usability testing to identify and address any issues, ensuring your mobile experience is
                  intuitive and enjoyable for all users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create an Amazing Mobile Experience?</h2>
            <p className="text-lg text-white/80 mb-8">
              Let's work together to build a mobile experience that delights your users and drives your business
              forward.
            </p>
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-100 shadow-lg hover:shadow-xl transition-all"
              >
                Get in Touch Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

