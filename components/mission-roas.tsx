import { Target } from "lucide-react"
import { GradientOrb, PerspectiveGrid } from "./abstract-visuals"
import { ResponsiveDesignFigure } from "./stick-figures"

export default function MissionRoas() {
  return (
    <section className="w-full py-16 md:py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Abstract visual elements */}
      <div className="absolute top-0 right-0 w-80 h-80 hidden lg:block">
        <GradientOrb className="w-full h-full opacity-30" />
      </div>

      <div className="absolute inset-0 opacity-30">
        <PerspectiveGrid className="w-full h-full" />
      </div>

      {/* Responsive Design stick figure */}
      <div className="absolute top-20 right-20 w-64 h-40 hidden md:block">
        <ResponsiveDesignFigure className="w-full h-full" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-4">
            <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <span className="text-lg font-bold text-purple-600 dark:text-purple-400 font-heading">Mission ROAS</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 font-heading">
            We're Obsessed With Your Return On Ad Spend
          </h2>
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Our data-driven approach ensures that every dollar you spend on marketing generates maximum returns. We
            track, measure, and optimize campaigns to deliver consistent growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-800 dark:text-purple-300 font-heading">
              Data Collection
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              We gather comprehensive data about your audience, market, and competitors to inform our strategy.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-800 dark:text-purple-300 font-heading">
              Strategic Execution
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              We implement targeted campaigns across channels that are most likely to reach your ideal customers.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
            <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-bold mb-2 text-purple-800 dark:text-purple-300 font-heading">
              Continuous Optimization
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              We constantly analyze performance data and make real-time adjustments to maximize your ROAS.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
