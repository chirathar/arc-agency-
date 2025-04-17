"use client"

import { scrollToSection } from "@/lib/scroll-utils"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Star } from "lucide-react"
import { motion } from "framer-motion"
import { CirclePattern, AbstractShape, FloatingShapes } from "./decorative-elements"
import { GridPattern } from "./illustrations"
import { GradientOrb, GeometricCluster, FloatingShapes3D } from "./abstract-visuals"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-purple-100 via-white to-purple-50 dark:from-purple-950 dark:via-slate-900 dark:to-purple-950 relative overflow-hidden">
      {/* Background grid pattern */}
      <GridPattern />

      {/* Additional dynamic background elements */}
      <div className="absolute inset-0 bg-[url('/subtle-dots.svg')] opacity-20"></div>

      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-300/30 dark:bg-purple-700/20 blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 rounded-full bg-pink-300/20 dark:bg-pink-700/10 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-300/20 dark:bg-blue-700/10 blur-3xl animate-blob animation-delay-4000"></div>

      {/* Decorative elements */}
      <CirclePattern className="text-purple-600 dark:text-purple-400 top-0 right-0 transform translate-x-1/2 -translate-y-1/4 hidden md:block" />
      <AbstractShape className="text-purple-600 dark:text-purple-400 bottom-0 left-0 transform -translate-x-1/2 translate-y-1/4 hidden md:block" />
      <FloatingShapes className="inset-0" />

      {/* Accent light effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

      {/* Abstract visual elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 hidden lg:block">
        <GradientOrb className="w-full h-full" />
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 hidden lg:block">
        <GeometricCluster className="w-full h-full" />
      </div>

      <div className="absolute top-1/3 left-1/4 w-full h-full opacity-30 hidden lg:block">
        <FloatingShapes3D className="w-full h-full" />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center gap-4 text-center max-w-3xl mx-auto">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 bg-white dark:bg-slate-800 border border-purple-200 dark:border-purple-800 rounded-full px-4 py-1.5 mb-4 shadow-md backdrop-blur-md bg-opacity-80 dark:bg-opacity-80"
          >
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium">Innovative Digital Experiences</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-heading"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 dark:from-purple-400 dark:via-pink-400 dark:to-purple-500">
                Building digital vibes,
              </span>
              <span className="block mt-2 relative">
                creating real impact
                <span className="absolute -top-5 right-10 text-2xl rotate-12">✨</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-[700px] text-slate-700 dark:text-slate-300 md:text-xl"
            >
              Arc is a digital agency that specializes in creating stunning websites and running campaigns that actually
              work. Let's build something awesome together.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mt-6"
          >
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <span className="relative z-10 flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"></span>
            </Button>

            <Button
              onClick={() => scrollToSection("services")}
              size="lg"
              variant="outline"
              className="border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 relative overflow-hidden group"
            >
              <span className="relative z-10">Our Services</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </motion.div>

          {/* Social proof or tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-xs font-medium text-purple-800 dark:text-purple-300 shadow-sm border border-purple-100 dark:border-purple-800/50">
              <Star className="h-3 w-3 fill-current text-yellow-500" />
              Web Development
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-xs font-medium text-purple-800 dark:text-purple-300 shadow-sm border border-purple-100 dark:border-purple-800/50">
              <Star className="h-3 w-3 fill-current text-yellow-500" />
              SEO
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-xs font-medium text-purple-800 dark:text-purple-300 shadow-sm border border-purple-100 dark:border-purple-800/50">
              <Star className="h-3 w-3 fill-current text-yellow-500" />
              Meta Ads
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-xs font-medium text-purple-800 dark:text-purple-300 shadow-sm border border-purple-100 dark:border-purple-800/50">
              <Star className="h-3 w-3 fill-current text-yellow-500" />
              UX Design
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
