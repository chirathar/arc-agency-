import { Zap, Target, Lightbulb, MessageSquare } from "lucide-react"
import { WavyLine, Dots } from "./decorative-elements"
import { GridPattern, GeometricShapes } from "./illustrations"
import { FloatingShapes3D, GlowingDots } from "./abstract-visuals"

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <GridPattern />

      {/* Decorative elements */}
      <WavyLine className="text-purple-600 dark:text-purple-400 top-10 right-0 transform rotate-180 hidden md:block" />
      <Dots className="text-purple-600 dark:text-purple-400 bottom-10 left-10 hidden md:block" />
      <GeometricShapes className="inset-0" />

      {/* Abstract visual elements */}
      <div className="absolute inset-0">
        <FloatingShapes3D className="w-full h-full" />
      </div>

      <div className="absolute top-0 right-0 w-full h-full">
        <GlowingDots className="w-full h-full" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-md">
            <div className="h-6 w-6 rounded-full bg-white"></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
              Why Choose Us
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              We bring a unique blend of creativity, technical expertise, and business acumen to every project we
              undertake.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 pt-12">
            <div className="flex flex-col items-center space-y-2 border border-purple-100 dark:border-purple-900 rounded-lg p-4 bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-slate-900 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 mb-2 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Fast Delivery</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                We work efficiently to deliver projects on time without compromising quality.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-purple-100 dark:border-purple-900 rounded-lg p-4 bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-slate-900 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 mb-2 text-white">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">ROI Focus</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                Every decision we make is guided by the goal of maximizing your return on investment.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-purple-100 dark:border-purple-900 rounded-lg p-4 bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-slate-900 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 mb-2 text-white">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Creative Tech</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                We blend innovative design with cutting-edge technology to create standout digital experiences.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-purple-100 dark:border-purple-900 rounded-lg p-4 bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-slate-900 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
              <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 mb-2 text-white">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Clear Communication</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 text-center">
                We maintain transparent and consistent communication throughout the project lifecycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
