"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, BarChart, Search, Smartphone, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SquareGrid, CodeBrackets } from "./decorative-elements"
import { GeometricShapes, GridPattern } from "./illustrations"
import { WavePattern, GeometricCluster } from "./abstract-visuals"

const services = [
  {
    id: "web-dev",
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description:
      "We build fast, responsive, and user-friendly websites that drive conversions and enhance your brand's online presence.",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "performance",
    icon: <BarChart className="h-6 w-6" />,
    title: "Performance Marketing",
    description: "Data-driven campaigns that deliver real results and maximize your ROI across multiple platforms.",
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    id: "seo",
    icon: <Search className="h-6 w-6" />,
    title: "SEO Optimization",
    description:
      "Boost your visibility and climb search rankings with our proven search engine optimization strategies.",
    color: "from-purple-500 to-indigo-600",
  },
  {
    id: "mobile",
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Experiences",
    description: "Create seamless mobile experiences that engage users and drive conversions on any device.",
    color: "from-indigo-500 to-blue-600",
  },
]

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null)

  return (
    <section
      id="services"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50 dark:from-slate-950 dark:to-purple-950/30 relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <GridPattern />

      {/* Decorative elements */}
      <SquareGrid className="text-purple-600 dark:text-purple-400 top-20 left-0 hidden md:block" />
      <CodeBrackets className="text-purple-600 dark:text-purple-400 bottom-20 right-10 hidden md:block" />
      <GeometricShapes className="inset-0" />

      {/* Abstract visual elements */}
      <div className="absolute bottom-0 left-0 w-full h-40">
        <WavePattern className="w-full h-full" />
      </div>

      <div className="absolute top-20 right-0 w-80 h-80 hidden lg:block">
        <GeometricCluster className="w-full h-full opacity-50" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg"
          >
            <Zap className="h-6 w-6 text-white" />
          </motion.div>

          <div className="space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600"
            >
              Our Services
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-[700px] text-slate-600 dark:text-slate-300 md:text-xl/relaxed"
            >
              Discover how our specialized services can transform your digital presence and drive real business growth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-6xl">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative group"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-white dark:from-slate-800 dark:to-slate-800 rounded-2xl transform transition-all duration-300 group-hover:scale-[0.98]"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-300`}
                ></div>

                <Card className="border-0 relative bg-white dark:bg-slate-800 overflow-hidden h-full transform transition-all duration-300 group-hover:translate-y-1 group-hover:shadow-xl">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  ></div>
                  <CardHeader className="pt-6 pb-2">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-md transform transition-transform duration-300 group-hover:scale-110`}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <CardTitle className="text-xl text-slate-800 dark:text-slate-100 mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div
                      className={`text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${service.color} flex items-center justify-start`}
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
