"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface StatItemProps {
  value: number
  label: string
  suffix?: string
  duration?: number
}

function StatItem({ value, label, suffix = "", duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  useEffect(() => {
    let start = 0
    if (inView) {
      const end = Math.min(value, 9999)
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16.67) // ~60fps

      return () => {
        clearInterval(timer)
      }
    }
  }, [inView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-purple-100 dark:border-purple-900"
    >
      <span className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
        {count}
        {suffix}
      </span>
      <span className="text-sm text-slate-600 dark:text-slate-300 text-center">{label}</span>
    </motion.div>
  )
}

export default function Statistics() {
  return (
    <section className="w-full py-12 md:py-24 bg-purple-50/50 dark:bg-slate-900/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              We've helped businesses achieve remarkable results through our digital solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl">
            <StatItem value={50} label="Websites Launched" suffix="+" />
            <StatItem value={85} label="Conversion Rate Increase" suffix="%" />
            <StatItem value={120} label="Ad Campaigns" suffix="+" />
            <StatItem value={30} label="Happy Clients" suffix="+" />
          </div>
        </div>
      </div>
    </section>
  )
}
