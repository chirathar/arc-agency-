import { cn } from "@/lib/utils"

export function ArchitectureFigure({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stick figure architect */}
        <circle cx="100" cy="40" r="10" stroke="#9333EA" strokeWidth="2" />
        <line x1="100" y1="50" x2="100" y2="100" stroke="#9333EA" strokeWidth="2" />
        <line x1="100" y1="70" x2="80" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="100" y1="70" x2="120" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="100" y1="100" x2="80" y2="130" stroke="#9333EA" strokeWidth="2" />
        <line x1="100" y1="100" x2="120" y2="130" stroke="#9333EA" strokeWidth="2" />

        {/* Blueprint/architecture drawing */}
        <rect x="60" y="150" width="80" height="40" stroke="#9333EA" strokeWidth="2" rx="2" />
        <line x1="70" y1="160" x2="130" y2="160" stroke="#9333EA" strokeWidth="2" />
        <line x1="70" y1="170" x2="130" y2="170" stroke="#9333EA" strokeWidth="2" />
        <line x1="70" y1="180" x2="110" y2="180" stroke="#9333EA" strokeWidth="2" />

        {/* Thinking bubble */}
        <path
          d="M130 50 Q140 40 150 50 Q160 60 150 70 Q140 80 130 70 Q120 60 130 50"
          stroke="#9333EA"
          strokeWidth="2"
          fill="none"
        />
        <path d="M130 70 L125 80" stroke="#9333EA" strokeWidth="2" />
      </svg>
    </div>
  )
}

export function RenderingFigure({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stick figure painter/renderer */}
        <circle cx="70" cy="50" r="10" stroke="#9333EA" strokeWidth="2" />
        <line x1="70" y1="60" x2="70" y2="110" stroke="#9333EA" strokeWidth="2" />
        <line x1="70" y1="80" x2="50" y2="100" stroke="#9333EA" strokeWidth="2" />
        <line x1="70" y1="80" x2="90" y2="70" stroke="#9333EA" strokeWidth="2" />
        <line x1="70" y1="110" x2="50" y2="140" stroke="#9333EA" strokeWidth="2" />
        <line x1="70" y1="110" x2="90" y2="140" stroke="#9333EA" strokeWidth="2" />

        {/* Canvas/screen being rendered */}
        <rect x="100" y="40" width="70" height="100" stroke="#9333EA" strokeWidth="2" rx="2" />
        <path
          d="M110 60 L160 60 M110 80 L140 80 M110 100 L150 100 M110 120 L130 120"
          stroke="#9333EA"
          strokeWidth="1"
          strokeDasharray="2 2"
        />

        {/* Paintbrush */}
        <line x1="90" y1="70" x2="110" y2="60" stroke="#9333EA" strokeWidth="3" strokeLinecap="round" />

        {/* Animation lines to show rendering */}
        <path
          d="M130 30 L140 40 M150 30 L160 40 M170 30 L180 40"
          stroke="#9333EA"
          strokeWidth="1"
          strokeDasharray="2 2"
          className="animate-pulse"
        />
      </svg>
    </div>
  )
}

export function ComponentsFigure({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stick figure assembling components */}
        <circle cx="50" cy="60" r="10" stroke="#9333EA" strokeWidth="2" />
        <line x1="50" y1="70" x2="50" y2="120" stroke="#9333EA" strokeWidth="2" />
        <line x1="50" y1="90" x2="30" y2="110" stroke="#9333EA" strokeWidth="2" />
        <line x1="50" y1="90" x2="70" y2="110" stroke="#9333EA" strokeWidth="2" />
        <line x1="50" y1="120" x2="30" y2="150" stroke="#9333EA" strokeWidth="2" />
        <line x1="50" y1="120" x2="70" y2="150" stroke="#9333EA" strokeWidth="2" />

        {/* Component blocks being assembled */}
        <rect x="100" y="40" width="30" height="30" stroke="#9333EA" strokeWidth="2" rx="2" />
        <rect x="140" y="40" width="30" height="30" stroke="#9333EA" strokeWidth="2" rx="2" />
        <rect x="100" y="80" width="30" height="30" stroke="#9333EA" strokeWidth="2" rx="2" />
        <rect x="140" y="80" width="30" height="30" stroke="#9333EA" strokeWidth="2" rx="2" />

        {/* Connection lines between components */}
        <line x1="130" y1="55" x2="140" y2="55" stroke="#9333EA" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="115" y1="70" x2="115" y2="80" stroke="#9333EA" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="155" y1="70" x2="155" y2="80" stroke="#9333EA" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="130" y1="95" x2="140" y2="95" stroke="#9333EA" strokeWidth="1" strokeDasharray="2 2" />

        {/* Hand reaching for component */}
        <path d="M70 110 Q80 105 90 110 L100 80" stroke="#9333EA" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    </div>
  )
}

export function TeamworkFigure({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="300" height="150" viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stick figure 1 */}
        <circle cx="60" cy="40" r="10" stroke="#9333EA" strokeWidth="2" />
        <line x1="60" y1="50" x2="60" y2="100" stroke="#9333EA" strokeWidth="2" />
        <line x1="60" y1="70" x2="40" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="60" y1="70" x2="80" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="60" y1="100" x2="40" y2="130" stroke="#9333EA" strokeWidth="2" />
        <line x1="60" y1="100" x2="80" y2="130" stroke="#9333EA" strokeWidth="2" />

        {/* Stick figure 2 */}
        <circle cx="150" cy="40" r="10" stroke="#9333EA" strokeWidth="2" />
        <line x1="150" y1="50" x2="150" y2="100" stroke="#9333EA" strokeWidth="2" />
        <line x1="150" y1="70" x2="130" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="150" y1="70" x2="170" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="150" y1="100" x2="130" y2="130" stroke="#9333EA" strokeWidth="2" />
        <line x1="150" y1="100" x2="170" y2="130" stroke="#9333EA" strokeWidth="2" />

        {/* Stick figure 3 */}
        <circle cx="240" cy="40" r="10" stroke="#9333EA" strokeWidth="2" />
        <line x1="240" y1="50" x2="240" y2="100" stroke="#9333EA" strokeWidth="2" />
        <line x1="240" y1="70" x2="220" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="240" y1="70" x2="260" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="240" y1="100" x2="220" y2="130" stroke="#9333EA" strokeWidth="2" />
        <line x1="240" y1="100" x2="260" y2="130" stroke="#9333EA" strokeWidth="2" />

        {/* Connection lines */}
        <line x1="80" y1="90" x2="130" y2="90" stroke="#9333EA" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="170" y1="90" x2="220" y2="90" stroke="#9333EA" strokeWidth="1" strokeDasharray="2 2" />

        {/* Shared project element */}
        <circle cx="150" cy="90" r="5" fill="#9333EA" />
      </svg>
    </div>
  )
}

export function ProcessFigure({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="300" height="120" viewBox="0 0 300 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stick figure planning */}
        <circle cx="50" cy="30" r="8" stroke="#9333EA" strokeWidth="2" />
        <line x1="50" y1="38" x2="50" y2="70" stroke="#9333EA" strokeWidth="2" />
        <line x1="50" y1="50" x2="35" y2="60" stroke="#9333EA" strokeWidth="2" />
        <line x1="50" y1="50" x2="65" y2="60" stroke="#9333EA" strokeWidth="2" />
        <line x1="50" y1="70" x2="35" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="50" y1="70" x2="65" y2="90" stroke="#9333EA" strokeWidth="2" />

        {/* Planning document */}
        <rect x="70" y="40" width="20" height="30" stroke="#9333EA" strokeWidth="1" />
        <line x1="75" y1="50" x2="85" y2="50" stroke="#9333EA" strokeWidth="1" />
        <line x1="75" y1="55" x2="85" y2="55" stroke="#9333EA" strokeWidth="1" />
        <line x1="75" y1="60" x2="85" y2="60" stroke="#9333EA" strokeWidth="1" />

        {/* Arrow */}
        <line x1="100" y1="60" x2="120" y2="60" stroke="#9333EA" strokeWidth="1" />
        <path d="M115 55 L120 60 L115 65" stroke="#9333EA" strokeWidth="1" />

        {/* Stick figure building */}
        <circle cx="150" cy="30" r="8" stroke="#9333EA" strokeWidth="2" />
        <line x1="150" y1="38" x2="150" y2="70" stroke="#9333EA" strokeWidth="2" />
        <line x1="150" y1="50" x2="135" y2="60" stroke="#9333EA" strokeWidth="2" />
        <line x1="150" y1="50" x2="165" y2="60" stroke="#9333EA" strokeWidth="2" />
        <line x1="150" y1="70" x2="135" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="150" y1="70" x2="165" y2="90" stroke="#9333EA" strokeWidth="2" />

        {/* Building blocks */}
        <rect x="170" y="50" width="15" height="15" stroke="#9333EA" strokeWidth="1" />
        <rect x="170" y="65" width="15" height="15" stroke="#9333EA" strokeWidth="1" />

        {/* Arrow */}
        <line x1="200" y1="60" x2="220" y2="60" stroke="#9333EA" strokeWidth="1" />
        <path d="M215 55 L220 60 L215 65" stroke="#9333EA" strokeWidth="1" />

        {/* Stick figure testing */}
        <circle cx="250" cy="30" r="8" stroke="#9333EA" strokeWidth="2" />
        <line x1="250" y1="38" x2="250" y2="70" stroke="#9333EA" strokeWidth="2" />
        <line x1="250" y1="50" x2="235" y2="60" stroke="#9333EA" strokeWidth="2" />
        <line x1="250" y1="50" x2="265" y2="60" stroke="#9333EA" strokeWidth="2" />
        <line x1="250" y1="70" x2="235" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="250" y1="70" x2="265" y2="90" stroke="#9333EA" strokeWidth="2" />

        {/* Checkmark */}
        <path d="M270 50 L275 60 L285 40" stroke="#9333EA" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

export function ResponsiveDesignFigure({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="250" height="150" viewBox="0 0 250 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stick figure */}
        <circle cx="40" cy="40" r="10" stroke="#9333EA" strokeWidth="2" />
        <line x1="40" y1="50" x2="40" y2="100" stroke="#9333EA" strokeWidth="2" />
        <line x1="40" y1="70" x2="20" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="40" y1="70" x2="60" y2="90" stroke="#9333EA" strokeWidth="2" />
        <line x1="40" y1="100" x2="20" y2="130" stroke="#9333EA" strokeWidth="2" />
        <line x1="40" y1="100" x2="60" y2="130" stroke="#9333EA" strokeWidth="2" />
        {/* Devices */}
        <rect x="100" y="30" width="60" height="40" rx="2" stroke="#9333EA" strokeWidth="2" /> {/* Desktop */}
        <rect x="120" y="70" width="20" height="3" stroke="#9333EA" strokeWidth="2" /> {/* Desktop stand */}
        <rect x="180" y="40" width="30" height="40" rx="2" stroke="#9333EA" strokeWidth="2" /> {/* Tablet */}
        <rect x="220" y="50" width="15" height="25" rx="2" stroke="#9333EA" strokeWidth="2" /> {/* Phone */}
        {/* Content representation */}
        <line x1="110" y1="40" x2="150" y2="40" stroke="#9333EA" strokeWidth="1" />
        <line x1="110" y1="50" x2="140" y2="50" stroke="#9333EA" strokeWidth="1" />
        <line x1="110" y1="60" x2="130" y2="60" stroke="#9333EA" strokeWidth="1" />
        <line x1="185" y1="50" x2="205" y2="50" stroke="#9333EA" strokeWidth="1" />
        <line x1="185" y1="60" x2="200" y2="60" stroke="#9333EA" strokeWidth="1" />
        <line x1="185" y1="70" x2="195" y2="70" stroke="#9333EA" strokeWidth="1" />
        <line x1="223" y1="55" x2="232" y2="55" stroke="#9333EA" strokeWidth="1" />
        <line x1="223" y1="60" x2="230" y2="60" stroke="#9333EA" strokeWidth="1" />
        <line x1="223" y1="65" x2="228" y2="65" stroke="#9333EA" strokeWidth="1" />
        {/* Connection lines */}
        <path d="M60 90 Q80 70 100 50" stroke="#9333EA" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    </div>
  )
}
