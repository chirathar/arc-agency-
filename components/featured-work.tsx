"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Pulse Ecommerce",
    description: "A modern shopping experience with AI-powered recommendations",
    category: "Web Development",
    image: "/amethyst-avenue.png",
    color: "from-pink-500 to-purple-600",
  },
  {
    id: 2,
    title: "Wavelength App",
    description: "Music streaming platform with social features",
    category: "Web App",
    image: "/amethyst-beats.png",
    color: "from-purple-500 to-blue-600",
  },
  {
    id: 3,
    title: "Eco Warriors",
    description: "Digital presence for environmental organization",
    category: "Branding & Web",
    image: "/eco-harmony.png",
    color: "from-green-500 to-purple-600",
  },
]

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(projects[0])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-br from-white to-purple-50 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-100 to-transparent dark:from-purple-900/20 dark:to-transparent"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Latest Projects
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-4"
          >
            Our Featured Work
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[700px] text-slate-600 dark:text-slate-400 mb-12"
          >
            Check out some of our recent projects that showcase our expertise in creating stunning digital experiences.
          </motion.p>

          {/* Project display area */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 w-full max-w-6xl">
            {/* Project selector sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + project.id * 0.1 }}
                  className={`
                    cursor-pointer p-6 rounded-xl border transition-all duration-300
                    ${
                      activeProject.id === project.id
                        ? "border-purple-300 dark:border-purple-700 bg-white dark:bg-slate-800 shadow-lg scale-105"
                        : "border-transparent bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm hover:border-purple-200 dark:hover:border-purple-800"
                    }
                  `}
                  onClick={() => setActiveProject(project)}
                >
                  <div className="text-xs font-medium text-purple-600 dark:text-purple-400 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{project.description}</p>

                  <div
                    className={`mt-4 flex items-center text-xs text-transparent bg-clip-text bg-gradient-to-r ${project.color}`}
                  >
                    <span>View project</span>
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Project image display */}
            <motion.div
              className="lg:col-span-3 relative rounded-2xl overflow-hidden aspect-video bg-purple-100 dark:bg-purple-900/20"
              initial={{ opacity: 0, x: 20 }}
              animate={isLoaded ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              key={activeProject.id}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
              <img
                src={activeProject.image || "/placeholder.svg"}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 rounded-lg shadow-lg border border-purple-100 dark:border-purple-900">
                  <h3 className="font-bold text-lg mb-1">{activeProject.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{activeProject.description}</p>
                  <div className="flex items-center text-xs text-purple-600 dark:text-purple-400 font-medium cursor-pointer hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
                    <span>View case study</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
