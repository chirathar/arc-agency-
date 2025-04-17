"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, BarChart, Search, Smartphone, Palette, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { CirclePattern, FloatingShapes } from "./decorative-elements"
import { GeometricShapes, GridPattern } from "./illustrations"

interface ServiceItem {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const services: ServiceItem[] = [
  {
    id: "web-dev",
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description:
      "We build fast, responsive, and user-friendly websites that drive conversions and enhance your brand's online presence.",
    features: [
      "Custom website design and development",
      "Responsive and mobile-optimized interfaces",
      "Performance-focused architecture",
      "User experience optimization",
      "Content management systems",
    ],
  },
  {
    id: "seo",
    icon: <Search className="h-6 w-6" />,
    title: "Search Engine Optimization",
    description:
      "Our SEO strategies help your business rank higher in search results, driving organic traffic and increasing visibility.",
    features: [
      "Keyword research and analysis",
      "On-page and off-page optimization",
      "Technical SEO audits",
      "Content strategy development",
      "Performance tracking and reporting",
    ],
  },
  {
    id: "meta-ads",
    icon: <BarChart className="h-6 w-6" />,
    title: "Meta Advertising",
    description:
      "We create and manage high-performing ad campaigns on Facebook and Instagram to reach your target audience effectively.",
    features: [
      "Campaign strategy and planning",
      "Audience targeting and segmentation",
      "Ad creative development",
      "Budget optimization",
      "Performance analysis and optimization",
    ],
  },
  {
    id: "mobile",
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Optimization",
    description:
      "We ensure your digital presence is fully optimized for mobile users, providing a seamless experience across all devices.",
    features: [
      "Mobile-first design approach",
      "Touch-friendly interfaces",
      "Fast loading on mobile networks",
      "Progressive web app development",
      "Mobile user experience testing",
    ],
  },
  {
    id: "ui-design",
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description:
      "Our design team creates intuitive, engaging user interfaces that enhance user experience and drive conversions.",
    features: [
      "User research and persona development",
      "Wireframing and prototyping",
      "Visual design and branding",
      "Interaction design",
      "Usability testing",
    ],
  },
  {
    id: "performance",
    icon: <Zap className="h-6 w-6" />,
    title: "Performance Optimization",
    description:
      "We optimize your website's performance to ensure fast loading times, smooth interactions, and high conversion rates.",
    features: [
      "Page speed optimization",
      "Core Web Vitals improvement",
      "Server response time optimization",
      "Asset optimization",
      "Caching strategies",
    ],
  },
]

export default function ServiceExplorer() {
  const [activeService, setActiveService] = useState<string>(services[0].id)

  const activeServiceData = services.find((service) => service.id === activeService)

  return (
    <section
      id="service-explorer"
      className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <GridPattern />

      {/* Decorative elements */}
      <CirclePattern className="text-purple-600 dark:text-purple-400 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 hidden md:block" />
      <FloatingShapes className="inset-0" />
      <GeometricShapes className="inset-0" />

      {/* Floating shapes */}
      <div className="absolute top-1/4 right-10 w-32 h-32 transform rotate-12 hidden lg:block">
        <img
          src="/floating-shapes.png"
          alt="Floating geometric shapes"
          className="w-full h-full object-contain opacity-70"
        />
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Our Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Discover how our specialized services can help your business grow in the digital landscape.
            </p>
          </div>

          <div className="w-full max-w-5xl">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeService === service.id
                      ? "bg-purple-600 text-white shadow-md"
                      : "bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:hover:bg-purple-900/50",
                  )}
                >
                  <span className="flex items-center gap-2">
                    {service.icon}
                    {service.title}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeServiceData && (
                <motion.div
                  key={activeServiceData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-purple-100 dark:border-purple-900 p-6 md:p-8 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-50 dark:opacity-10"></div>
                  <div className="flex flex-col md:flex-row gap-6 text-left relative z-10">
                    <div className="md:w-1/2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900">
                          {activeServiceData.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          {activeServiceData.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">{activeServiceData.description}</p>
                    </div>
                    <div className="md:w-1/2">
                      <h4 className="font-semibold mb-3 text-slate-800 dark:text-slate-200">Key Features:</h4>
                      <ul className="space-y-2">
                        {activeServiceData.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="mr-2 text-purple-500">•</span>
                            <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
