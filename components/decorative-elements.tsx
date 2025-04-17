import { cn } from "@/lib/utils"

export function CirclePattern({ className }: { className?: string }) {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" opacity="0.2" />
        <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" opacity="0.15" />
        <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" opacity="0.1" />
      </svg>
    </div>
  )
}

export function Dots({ className }: { className?: string }) {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.2">
          {Array.from({ length: 10 }).map((_, rowIndex) =>
            Array.from({ length: 10 }).map((_, colIndex) => (
              <circle
                key={`${rowIndex}-${colIndex}`}
                cx={15 + colIndex * 30}
                cy={15 + rowIndex * 30}
                r="3"
                fill="currentColor"
              />
            )),
          )}
        </g>
      </svg>
    </div>
  )
}

export function WavyLine({ className }: { className?: string }) {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <svg width="400" height="100" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 50C40 30 80 70 120 50C160 30 200 70 240 50C280 30 320 70 360 50C400 30 440 50 480 50"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>
    </div>
  )
}

export function SquareGrid({ className }: { className?: string }) {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.1">
          {Array.from({ length: 5 }).map((_, rowIndex) =>
            Array.from({ length: 5 }).map((_, colIndex) => (
              <rect
                key={`${rowIndex}-${colIndex}`}
                x={10 + colIndex * 60}
                y={10 + rowIndex * 60}
                width="40"
                height="40"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            )),
          )}
        </g>
      </svg>
    </div>
  )
}

export function AbstractShape({ className }: { className?: string }) {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M200 50C270.751 50 328 107.249 328 178C328 248.751 270.751 306 200 306C129.249 306 72 248.751 72 178C72 107.249 129.249 50 200 50Z"
          fill="currentColor"
          fillOpacity="0.05"
        />
        <path
          d="M200 80C254.124 80 298 123.876 298 178C298 232.124 254.124 276 200 276C145.876 276 102 232.124 102 178C102 123.876 145.876 80 200 80Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 8"
          opacity="0.2"
        />
      </svg>
    </div>
  )
}

export function FloatingShapes({ className }: { className?: string }) {
  return (
    <div className={cn("absolute w-full h-full overflow-hidden pointer-events-none", className)}>
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-blue-500/5 animate-float"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 rounded-full bg-blue-500/5 animate-float-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-full bg-blue-500/5 animate-float-slower"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-blue-500/5 animate-float"></div>
    </div>
  )
}

export function CodeBrackets({ className }: { className?: string }) {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40 30L20 60L40 90"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.2"
        />
        <path
          d="M80 30L100 60L80 90"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.2"
        />
      </svg>
    </div>
  )
}

export function CharacterIllustration({ className }: { className?: string }) {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <img src="/character-developer.png" alt="Developer character illustration" className="w-full h-auto" />
    </div>
  )
}

export function MarketingCharacter({ className }: { className?: string }) {
  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <img src="/character-marketer.png" alt="Marketing character illustration" className="w-full h-auto" />
    </div>
  )
}
