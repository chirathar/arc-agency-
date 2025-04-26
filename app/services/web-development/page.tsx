import type { Metadata } from "next"
import { CirclePattern, Dots, WavyLine } from "@/components/decorative-elements"
import { GridPattern } from "@/components/illustrations"
import { GradientOrb, GeometricCluster, FloatingShapes3D } from "@/components/abstract-visuals"
import { Code, ArrowRight, Zap, Layout, ShoppingBag, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Web Development Services in India | Arc Agency",
  description:
    "Arc Agency specializes in landing pages, business websites, e-commerce setup, and website maintenance. Get a custom website that drives real results for your business.",
  keywords: "landing pages, business websites, e-commerce setup, website maintenance, web development, India",
  alternates: {
    canonical: "/web-development",
  },
  openGraph: {
    title: "Web Development Services in India | Arc Agency",
    description:
      "Arc Agency specializes in landing pages, business websites, e-commerce setup, and website maintenance. Get a custom website that drives real results for your business.",
    url: "https://arcagency.in/web-development",
    siteName: "Arc Agency",
    locale: "en_US",
    type: "website",
  },
}

export default function WebDevelopmentPage() {
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
              <Code className="h-4 w-4 mr-2" />
              Web Development
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-purple-300">
                Professional Website
              </span>
              <span className="block mt-2">Development Services in India</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8 max-w-3xl">
              At Arc Agency, we specialize in building high-performing websites tailored to your business goals. From
              conversion-focused landing pages to complete e-commerce solutions, we deliver websites that drive real
              results.
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
              Our Web Development Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We offer end-to-end web development solutions tailored to your unique business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Layout className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Landing Pages</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We create high-converting landing pages designed to capture leads and drive specific actions from your
                visitors.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Conversion-focused design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">A/B testing ready</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Lead capture optimization</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Business Pages</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We develop professional business websites that establish credibility and effectively showcase your
                products or services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Brand-aligned design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">SEO-friendly structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Mobile-responsive layouts</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">E-Commerce Setup</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We build powerful online stores that drive sales and provide seamless shopping experiences for your
                customers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Custom e-commerce solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Inventory & order management</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-purple-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-600 dark:text-purple-400">Website Maintenance</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We provide ongoing maintenance and support to keep your website secure, up-to-date, and performing
                optimally.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Regular updates & security patches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Performance monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                  <span className="text-slate-600 dark:text-slate-400">Content updates & technical support</span>
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
              <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Our Web Development Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We follow a structured methodology to deliver high-quality websites that meet your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Discovery & Planning</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We begin by understanding your business goals, target audience, and specific requirements to create a
                tailored development plan.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Design & Prototyping</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We create wireframes and design mockups that visualize your website's layout and user experience before
                development begins.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Development & Testing</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our developers build your website with clean, efficient code and thoroughly test all functionality
                across devices and browsers.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Launch & Support</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We deploy your website, provide training on content management, and offer ongoing maintenance and
                support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Technologies We Work With
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We leverage modern technologies and frameworks to build fast, scalable, and maintainable websites.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            <div className="bg-purple-50 dark:bg-slate-800 p-4 rounded-xl border border-purple-100 dark:border-purple-900 flex flex-col items-center justify-center text-center">
              <svg
                className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.36-.82 1.82-.31 3.96a22.7 22.7 0 002.4-.36c.48-.67.99-1.31 1.51-1.9z" />
              </svg>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">React</span>
            </div>

            <div className="bg-purple-50 dark:bg-slate-800 p-4 rounded-xl border border-purple-100 dark:border-purple-900 flex flex-col items-center justify-center text-center">
              <svg
                className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.2 8.87l-1.46 1.46c.78.78.78 2.05 0 2.83-.78.77-2.05.77-2.83 0-.77-.78-.77-2.05 0-2.83.1-.1.22-.17.34-.24L5.8 8.65c-.62.45-1.16 1.03-1.52 1.72L7.71 14l5.56-5.56-2.07.43zM18.5 10c1.93 0 3.5-1.57 3.5-3.5S20.43 3 18.5 3 15 4.57 15 6.5s1.57 3.5 3.5 3.5zm0-5c.83 0 1.5.67 1.5 1.5S19.33 8 18.5 8 17 7.33 17 6.5 17.67 5 18.5 5zm-5.63 7.16l-5.56 5.56L4.5 14l5.56-5.56-2.07.43z" />
              </svg>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Next.js</span>
            </div>

            <div className="bg-purple-50 dark:bg-slate-800 p-4 rounded-xl border border-purple-100 dark:border-purple-900 flex flex-col items-center justify-center text-center">
              <svg
                className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
              </svg>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">HTML5</span>
            </div>

            <div className="bg-purple-50 dark:bg-slate-800 p-4 rounded-xl border border-purple-100 dark:border-purple-900 flex flex-col items-center justify-center text-center">
              <svg
                className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414v-.001z" />
              </svg>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">CSS3</span>
            </div>

            <div className="bg-purple-50 dark:bg-slate-800 p-4 rounded-xl border border-purple-100 dark:border-purple-900 flex flex-col items-center justify-center text-center">
              <svg
                className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z" />
              </svg>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">JavaScript</span>
            </div>

            <div className="bg-purple-50 dark:bg-slate-800 p-4 rounded-xl border border-purple-100 dark:border-purple-900 flex flex-col items-center justify-center text-center">
              <svg
                className="h-12 w-12 text-purple-600 dark:text-purple-400 mb-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M0 12v12h24V0H0v12zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 0 0 .102.45c.16.331.458.53 1.39.933 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.243-.652-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 0 0 .313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 0 1-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z" />
              </svg>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">TypeScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 md:py-24 bg-purple-50 dark:bg-slate-900 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              Why Choose Arc Agency for Web Development
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We deliver exceptional web development services that help businesses across India establish a strong
              online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Performance-Focused</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We build websites that load quickly, respond instantly, and provide smooth user experiences, which is
                crucial for both user satisfaction and search engine rankings.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
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
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Conversion-Optimized</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our websites are designed with conversion in mind, ensuring that your visitors take the desired actions,
                whether it's making a purchase, filling out a form, or contacting your business.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Secure & Reliable</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We implement robust security measures to protect your website and user data from threats, ensuring a
                safe and reliable online experience.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Customized Solutions</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We don't use templates or one-size-fits-all approaches. Each website we build is custom-designed to meet
                your specific business needs and objectives.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
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
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Dedicated Support</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We provide responsive, ongoing support to address any issues, make updates, and ensure your website
                continues to perform optimally.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-purple-100 dark:border-purple-900 shadow-md">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-400">Cost-Effective</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We deliver high-quality websites at competitive prices, ensuring you get maximum value for your
                investment and a strong return on investment.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Website?</h2>
            <p className="text-lg text-white/80 mb-8">
              Let's create a website that not only looks great but also drives real business results for your brand.
            </p>
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-100 shadow-lg hover:shadow-xl transition-all"
              >
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
