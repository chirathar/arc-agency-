import { cn } from "@/lib/utils"

export function GradientOrb({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden pointer-events-none", className)}>
      <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-300 via-purple-500 to-purple-800 opacity-80 blur-xl animate-pulse"></div>
      <div className="absolute w-3/4 h-3/4 top-1/8 left-1/8 rounded-full bg-gradient-to-tr from-purple-400 to-purple-600 opacity-70 blur-md animate-float-slow"></div>
      <div className="absolute w-1/2 h-1/2 top-1/4 left-1/4 rounded-full bg-white opacity-30 blur-sm animate-float"></div>
    </div>
  )
}

export function GeometricCluster({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden pointer-events-none", className)}>
      <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="100" width="100" height="100" fill="#9333EA" fillOpacity="0.2" className="animate-float-slow" />
        <circle cx="200" cy="150" r="70" fill="#A855F7" fillOpacity="0.2" className="animate-float" />
        <path d="M250 200L300 250L250 300L200 250Z" fill="#C084FC" fillOpacity="0.2" className="animate-float-slower" />
        <rect
          x="150"
          y="250"
          width="80"
          height="80"
          rx="20"
          fill="#9333EA"
          fillOpacity="0.2"
          className="animate-float-slow"
        />
        <circle cx="100" cy="280" r="40" fill="#A855F7" fillOpacity="0.2" className="animate-float" />
      </svg>
    </div>
  )
}

export function WavePattern({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden pointer-events-none", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 100C200 150 400 50 600 100C800 150 1000 50 1200 100V300H0V100Z"
          fill="url(#wave-gradient)"
          fillOpacity="0.1"
        />
        <path
          d="M0 150C200 200 400 100 600 150C800 200 1000 100 1200 150V300H0V150Z"
          fill="url(#wave-gradient)"
          fillOpacity="0.15"
        />
        <path
          d="M0 200C200 250 400 150 600 200C800 250 1000 150 1200 200V300H0V200Z"
          fill="url(#wave-gradient)"
          fillOpacity="0.2"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#9333EA" />
            <stop offset="0.5" stopColor="#A855F7" />
            <stop offset="1" stopColor="#C084FC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export function GlowingDots({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden pointer-events-none", className)}>
      <div className="absolute w-4 h-4 rounded-full bg-purple-400 blur-sm top-1/4 left-1/4 animate-pulse"></div>
      <div className="absolute w-6 h-6 rounded-full bg-purple-500 blur-sm top-1/2 left-1/3 animate-pulse delay-300"></div>
      <div className="absolute w-3 h-3 rounded-full bg-purple-600 blur-sm top-3/4 left-1/2 animate-pulse delay-500"></div>
      <div className="absolute w-5 h-5 rounded-full bg-purple-300 blur-sm top-1/3 left-2/3 animate-pulse delay-700"></div>
      <div className="absolute w-4 h-4 rounded-full bg-purple-700 blur-sm top-2/3 left-3/4 animate-pulse delay-1000"></div>
    </div>
  )
}

export function GridLines({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden pointer-events-none", className)}>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]"></div>
    </div>
  )
}

export function FloatingShapes3D({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden pointer-events-none", className)}>
      <div className="absolute w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl top-1/4 left-1/4 transform rotate-12 animate-float-slow opacity-20"></div>
      <div className="absolute w-24 h-24 bg-gradient-to-tr from-purple-500 to-purple-700 rounded-full top-1/2 left-1/3 animate-float opacity-20"></div>
      <div className="absolute w-40 h-40 bg-gradient-to-bl from-purple-300 to-purple-500 rounded-lg top-1/3 right-1/4 transform -rotate-12 animate-float-slower opacity-20"></div>
      <div className="absolute w-20 h-20 bg-gradient-to-tl from-purple-600 to-purple-800 rounded-full bottom-1/4 right-1/3 animate-float-slow opacity-20"></div>
    </div>
  )
}

export function PerspectiveGrid({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden pointer-events-none", className)}>
      <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 200H800" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M0 150H800" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M0 250H800" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M0 100H800" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M0 300H800" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M0 50H800" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M0 350H800" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />

        <path d="M400 0V400" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M300 0V400" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M500 0V400" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M200 0V400" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M600 0V400" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M100 0V400" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M700 0V400" stroke="#9333EA" strokeOpacity="0.1" strokeWidth="1" />
      </svg>
    </div>
  )
}
