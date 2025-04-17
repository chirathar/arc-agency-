import { cn } from "@/lib/utils"

export function FloatingElements({ className }: { className?: string }) {
  return (
    <div className={cn("absolute w-full h-full overflow-hidden pointer-events-none", className)}>
      <div className="absolute top-20 left-10 w-8 h-8 rounded-sm bg-purple-500/80 animate-float-slow rotate-12"></div>
      <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-yellow-400/80 animate-float"></div>
      <div className="absolute bottom-32 left-1/4 w-10 h-10 rounded-sm bg-purple-600/80 animate-float-slower -rotate-12"></div>
      <div className="absolute top-1/3 right-1/3 w-5 h-5 rounded-full bg-teal-400/80 animate-float-slow"></div>
    </div>
  )
}

export function DeveloperIllustration({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <path
          d="M150 80C172 80 190 98 190 120V150C190 172 172 190 150 190C128 190 110 172 110 150V120C110 98 128 80 150 80Z"
          fill="#F5F5F5"
        />
        {/* Hair */}
        <path
          d="M150 80C172 80 190 98 190 120V130C190 130 180 125 150 125C120 125 110 130 110 130V120C110 98 128 80 150 80Z"
          fill="#4B2D83"
        />
        {/* Face */}
        <circle cx="135" cy="140" r="3" fill="#333" />
        <circle cx="165" cy="140" r="3" fill="#333" />
        <path d="M140 160C145 165 155 165 160 160" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        {/* Body */}
        <path d="M120 190V240C120 250 130 260 140 260H160C170 260 180 250 180 240V190H120Z" fill="#9F7AEA" />
        {/* Grid pattern on body */}
        <path
          d="M120 200H180M120 210H180M120 220H180M120 230H180M120 240H180M120 250H180M130 190V260M140 190V260M150 190V260M160 190V260M170 190V260"
          stroke="#805AD5"
          strokeWidth="1"
        />
        {/* Computer/tablet */}
        <rect x="180" y="210" width="60" height="40" rx="5" fill="#805AD5" />
        <rect x="185" y="215" width="50" height="30" rx="2" fill="#F5F5F5" />
        <path d="M190 225H230M190 235H220" stroke="#805AD5" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export function MarketingIllustration({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <path
          d="M150 80C172 80 190 98 190 120V150C190 172 172 190 150 190C128 190 110 172 110 150V120C110 98 128 80 150 80Z"
          fill="#F5F5F5"
        />
        {/* Hair */}
        <path
          d="M150 80C128 80 110 98 110 120V130C110 130 120 120 150 120C180 120 190 130 190 130V120C190 98 172 80 150 80Z"
          fill="#4B2D83"
        />
        {/* Face */}
        <circle cx="135" cy="140" r="3" fill="#333" />
        <circle cx="165" cy="140" r="3" fill="#333" />
        <path d="M140 160C145 165 155 165 160 160" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        {/* Body */}
        <path d="M120 190V240C120 250 130 260 140 260H160C170 260 180 250 180 240V190H120Z" fill="#9F7AEA" />
        {/* Chart */}
        <rect x="190" y="200" width="60" height="60" rx="5" fill="#805AD5" />
        <rect x="195" y="205" width="50" height="50" rx="2" fill="#F5F5F5" />
        <path
          d="M200 240L210 225L220 235L230 215L240 220"
          stroke="#805AD5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="210" cy="225" r="3" fill="#9F7AEA" />
        <circle cx="220" cy="235" r="3" fill="#9F7AEA" />
        <circle cx="230" cy="215" r="3" fill="#9F7AEA" />
      </svg>
    </div>
  )
}

export function DesignIllustration({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <path
          d="M150 80C172 80 190 98 190 120V150C190 172 172 190 150 190C128 190 110 172 110 150V120C110 98 128 80 150 80Z"
          fill="#F5F5F5"
        />
        {/* Hair */}
        <path
          d="M170 80C180 85 190 100 190 120V130C190 130 180 125 150 125C120 125 110 130 110 130V120C110 100 120 85 130 80H170Z"
          fill="#4B2D83"
        />
        {/* Face */}
        <circle cx="135" cy="140" r="3" fill="#333" />
        <circle cx="165" cy="140" r="3" fill="#333" />
        <path d="M140 160C145 165 155 165 160 160" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        {/* Body */}
        <path d="M120 190V240C120 250 130 260 140 260H160C170 260 180 250 180 240V190H120Z" fill="#9F7AEA" />
        {/* Design elements */}
        <circle cx="220" cy="220" r="30" fill="#805AD5" />
        <rect x="210" y="210" width="20" height="20" fill="#F5F5F5" />
        <circle cx="220" cy="220" r="15" stroke="#9F7AEA" strokeWidth="2" strokeDasharray="4 4" />
      </svg>
    </div>
  )
}

export function RobotHead({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Robot head */}
        <path
          d="M30 50C30 39 39 30 50 30H100C111 30 120 39 120 50V100C120 111 111 120 100 120H50C39 120 30 111 30 100V50Z"
          fill="#9F7AEA"
        />
        {/* Eye */}
        <circle cx="75" cy="65" r="15" fill="#F5F5F5" />
        <circle cx="75" cy="65" r="8" fill="#4B2D83" />
        <circle cx="72" cy="62" r="3" fill="#F5F5F5" />
        {/* Mouth */}
        <path d="M60 90H90" stroke="#F5F5F5" strokeWidth="3" strokeLinecap="round" />
        {/* Antenna */}
        <rect x="70" y="15" width="10" height="15" fill="#805AD5" />
        <circle cx="75" cy="10" r="5" fill="#805AD5" />
        {/* Circuit lines */}
        <path d="M40 40L50 50M110 40L100 50M40 110L50 100M110 110L100 100" stroke="#805AD5" strokeWidth="2" />
      </svg>
    </div>
  )
}

export function GeometricShapes({ className }: { className?: string }) {
  return (
    <div className={cn("absolute w-full h-full overflow-hidden pointer-events-none", className)}>
      <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Scattered geometric shapes */}
        <circle cx="100" cy="200" r="20" fill="#9F7AEA" fillOpacity="0.2" className="animate-float-slow" />
        <rect x="200" y="100" width="30" height="30" fill="#805AD5" fillOpacity="0.2" className="animate-float" />
        <circle cx="900" cy="300" r="15" fill="#9F7AEA" fillOpacity="0.2" className="animate-float-slower" />
        <rect x="800" y="200" width="25" height="25" fill="#805AD5" fillOpacity="0.2" className="animate-float-slow" />
        <circle cx="150" cy="800" r="25" fill="#9F7AEA" fillOpacity="0.2" className="animate-float" />
        <rect
          x="250"
          y="700"
          width="20"
          height="20"
          fill="#805AD5"
          fillOpacity="0.2"
          className="animate-float-slower"
        />
        <circle cx="850" cy="750" r="18" fill="#9F7AEA" fillOpacity="0.2" className="animate-float-slow" />
        <rect x="750" y="850" width="22" height="22" fill="#805AD5" fillOpacity="0.2" className="animate-float" />
        <circle cx="500" cy="100" r="22" fill="#9F7AEA" fillOpacity="0.2" className="animate-float-slower" />
        <rect x="400" y="200" width="28" height="28" fill="#805AD5" fillOpacity="0.2" className="animate-float-slow" />
        <circle cx="500" cy="900" r="24" fill="#9F7AEA" fillOpacity="0.2" className="animate-float" />
        <rect
          x="600"
          y="800"
          width="26"
          height="26"
          fill="#805AD5"
          fillOpacity="0.2"
          className="animate-float-slower"
        />
      </svg>
    </div>
  )
}

export function GridPattern({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none opacity-[0.015] dark:opacity-[0.03]", className)}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

export function ArcLogo({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 30C139.765 30 172 62.2355 172 102C172 141.765 139.765 174 100 174C60.2355 174 28 141.765 28 102C28 62.2355 60.2355 30 100 30Z"
          stroke="#9F7AEA"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="1 12"
        />
        <path
          d="M100 50C128.719 50 152 73.2812 152 102C152 130.719 128.719 154 100 154C71.2812 154 48 130.719 48 102C48 73.2812 71.2812 50 100 50Z"
          stroke="#805AD5"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M100 70C117.673 70 132 84.3269 132 102C132 119.673 117.673 134 100 134C82.3269 134 68 119.673 68 102C68 84.3269 82.3269 70 100 70Z"
          fill="#4B2D83"
        />
        <path d="M85 102L100 87L115 102L100 117L85 102Z" fill="#F5F5F5" />
      </svg>
    </div>
  )
}
