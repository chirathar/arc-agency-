import { ArchitectureFigure, RenderingFigure, ComponentsFigure } from "./stick-figures"
import { GridPattern } from "./illustrations"
import { GlowingDots } from "./abstract-visuals"

export default function ArcConcept() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-purple-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Background grid pattern */}
      <GridPattern />

      {/* Abstract visual elements */}
      <div className="absolute inset-0">
        <GlowingDots className="w-full h-full" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
            <div className="h-6 w-6 rounded-full bg-purple-600 dark:bg-purple-400"></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The ARC Approach</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our methodology is built on three core principles that guide everything we do.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-48 h-48">
              <ArchitectureFigure className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Architecture</h3>
            <p className="text-slate-600 dark:text-slate-300">
              We design robust, scalable foundations for your digital presence, ensuring performance, security, and
              future growth.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-48 h-48">
              <RenderingFigure className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Rendering</h3>
            <p className="text-slate-600 dark:text-slate-300">
              We bring designs to life with pixel-perfect implementation, optimized for speed and visual impact across
              all devices.
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-48 h-48">
              <ComponentsFigure className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">Components</h3>
            <p className="text-slate-600 dark:text-slate-300">
              We build modular, reusable elements that ensure consistency, reduce development time, and enhance user
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
