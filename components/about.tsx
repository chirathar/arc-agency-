import { Dots, WavyLine } from "./decorative-elements"
import { GridPattern, GeometricShapes } from "./illustrations"
import { GlowingDots, PerspectiveGrid, GradientOrb } from "./abstract-visuals"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background grid pattern */}
      <GridPattern />

      {/* Decorative elements */}
      <Dots className="text-purple-600 dark:text-purple-400 top-10 left-10 hidden md:block" />
      <WavyLine className="text-purple-600 dark:text-purple-400 bottom-10 right-0 hidden md:block" />
      <GeometricShapes className="inset-0" />

      {/* Abstract visual elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-50">
        <PerspectiveGrid className="w-full h-full" />
      </div>

      <div className="absolute bottom-0 right-0 w-80 h-80 hidden lg:block">
        <GradientOrb className="w-full h-full opacity-30" />
      </div>

      <div className="absolute top-1/4 left-10 w-full h-full hidden lg:block">
        <GlowingDots className="w-full h-full" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg">
            <div className="h-8 w-8 rounded-full bg-white"></div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
              About Arc
            </h2>
            <p className="mx-auto max-w-[800px] text-slate-700 dark:text-slate-300 md:text-xl/relaxed lg:text-2xl/relaxed">
              We're a digital agency driven by results and powered by creativity. Our mission is to help businesses grow
              through impactful websites and data-driven marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-slate-800/50 p-8 rounded-xl border border-purple-100 dark:border-purple-800 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 text-left">
              <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Our Approach</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                At Arc, we bridge the gap between creative design and technical execution. We believe in building
                digital experiences that not only look great but also perform exceptionally well.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Our approach combines strategic thinking, creative problem-solving, and technical expertise to deliver
                solutions that drive real business results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-slate-800/50 p-8 rounded-xl border border-purple-100 dark:border-purple-800 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 text-left">
              <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">Our Difference</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                What sets us apart is our commitment to understanding your business goals and translating them into
                effective digital strategies.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                We don't just build websites or run campaigns – we create digital assets that work hard for your
                business and deliver measurable results that impact your bottom line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
