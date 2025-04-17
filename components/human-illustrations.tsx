import { cn } from "@/lib/utils"

export function DesignerCharacter({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <circle cx="150" cy="100" r="50" fill="#E2E8F0" />
        {/* Hair */}
        <path d="M110 80C110 80 120 50 150 50C180 50 190 80 190 80V100H110V80Z" fill="#9333EA" />
        {/* Face */}
        <circle cx="130" cy="90" r="5" fill="#1E293B" />
        <circle cx="170" cy="90" r="5" fill="#1E293B" />
        <path d="M140 115C140 115 150 125 160 115" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        {/* Neck */}
        <rect x="140" y="150" width="20" height="30" fill="#E2E8F0" />
        {/* Body */}
        <path d="M100 180H200V300C200 300 180 320 150 320C120 320 100 300 100 300V180Z" fill="#9333EA" />
        {/* Arms */}
        <path d="M100 200L70 250C70 250 60 270 80 280C100 290 110 270 110 270L130 220" fill="#9333EA" />
        <path d="M200 200L230 250C230 250 240 270 220 280C200 290 190 270 190 270L170 220" fill="#9333EA" />
        {/* Design Elements */}
        <circle cx="150" cy="220" r="20" fill="#DDD6FE" />
        <path d="M140 220H160M150 210V230" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" />
        {/* Legs */}
        <path d="M130 320L120 380C120 380 120 400 140 400C160 400 160 380 160 380L150 320" fill="#1E293B" />
        <path d="M170 320L180 380C180 380 180 400 160 400C140 400 140 380 140 380L150 320" fill="#1E293B" />
      </svg>
    </div>
  )
}

export function DeveloperCharacter({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <circle cx="150" cy="100" r="50" fill="#E2E8F0" />
        {/* Hair */}
        <path d="M110 70C110 70 120 40 150 40C180 40 190 70 190 70V90H110V70Z" fill="#1E293B" />
        {/* Face */}
        <circle cx="130" cy="90" r="5" fill="#1E293B" />
        <circle cx="170" cy="90" r="5" fill="#1E293B" />
        <path d="M140 115C140 115 150 125 160 115" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        {/* Glasses */}
        <path d="M120 90H140M160 90H180" stroke="#1E293B" strokeWidth="2" />
        <circle cx="130" cy="90" r="10" stroke="#1E293B" strokeWidth="2" fill="none" />
        <circle cx="170" cy="90" r="10" stroke="#1E293B" strokeWidth="2" fill="none" />
        {/* Neck */}
        <rect x="140" y="150" width="20" height="30" fill="#E2E8F0" />
        {/* Body */}
        <path d="M100 180H200V300C200 300 180 320 150 320C120 320 100 300 100 300V180Z" fill="#7E22CE" />
        {/* Arms */}
        <path d="M100 200L70 250C70 250 60 270 80 280C100 290 110 270 110 270L130 220" fill="#7E22CE" />
        <path d="M200 200L230 250C230 250 240 270 220 280C200 290 190 270 190 270L170 220" fill="#7E22CE" />
        {/* Laptop */}
        <rect x="120" y="230" width="60" height="40" rx="5" fill="#1E293B" />
        <rect x="125" y="235" width="50" height="30" rx="2" fill="#DDD6FE" />
        <path d="M135 250H165M135 260H155" stroke="#7E22CE" strokeWidth="2" strokeLinecap="round" />
        {/* Legs */}
        <path d="M130 320L120 380C120 380 120 400 140 400C160 400 160 380 160 380L150 320" fill="#1E293B" />
        <path d="M170 320L180 380C180 380 180 400 160 400C140 400 140 380 140 380L150 320" fill="#1E293B" />
      </svg>
    </div>
  )
}

export function MarketingCharacter({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <circle cx="150" cy="100" r="50" fill="#E2E8F0" />
        {/* Hair */}
        <path
          d="M100 90C100 90 110 50 150 50C190 50 200 90 200 90V110C200 110 190 100 150 100C110 100 100 110 100 110V90Z"
          fill="#C084FC"
        />
        {/* Face */}
        <circle cx="130" cy="90" r="5" fill="#1E293B" />
        <circle cx="170" cy="90" r="5" fill="#1E293B" />
        <path d="M140 115C140 115 150 125 160 115" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        {/* Neck */}
        <rect x="140" y="150" width="20" height="30" fill="#E2E8F0" />
        {/* Body */}
        <path d="M100 180H200V300C200 300 180 320 150 320C120 320 100 300 100 300V180Z" fill="#A855F7" />
        {/* Arms */}
        <path d="M100 200L70 250C70 250 60 270 80 280C100 290 110 270 110 270L130 220" fill="#A855F7" />
        <path d="M200 200L230 250C230 250 240 270 220 280C200 290 190 270 190 270L170 220" fill="#A855F7" />
        {/* Chart/Graph */}
        <rect x="120" y="220" width="60" height="60" rx="5" fill="#DDD6FE" />
        <path
          d="M130 260L140 240L160 250L170 230"
          stroke="#7E22CE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="140" cy="240" r="3" fill="#7E22CE" />
        <circle cx="160" cy="250" r="3" fill="#7E22CE" />
        <circle cx="170" cy="230" r="3" fill="#7E22CE" />
        {/* Legs */}
        <path d="M130 320L120 380C120 380 120 400 140 400C160 400 160 380 160 380L150 320" fill="#1E293B" />
        <path d="M170 320L180 380C180 380 180 400 160 400C140 400 140 380 140 380L150 320" fill="#1E293B" />
      </svg>
    </div>
  )
}

export function TeamMeeting({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Table */}
        <rect x="100" y="200" width="300" height="20" rx="5" fill="#94A3B8" />
        {/* Person 1 */}
        <circle cx="150" cy="150" r="30" fill="#E2E8F0" /> {/* Head */}
        <path d="M135 145H145M155 145H165" stroke="#1E293B" strokeWidth="2" /> {/* Eyes */}
        <path d="M145 160C145 160 150 165 155 160" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />{" "}
        {/* Mouth */}
        <rect x="140" y="180" width="20" height="40" fill="#9333EA" /> {/* Body */}
        {/* Person 2 */}
        <circle cx="250" cy="150" r="30" fill="#E2E8F0" /> {/* Head */}
        <path d="M235 145H245M255 145H265" stroke="#1E293B" strokeWidth="2" /> {/* Eyes */}
        <path d="M245 160C245 160 250 165 255 160" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />{" "}
        {/* Mouth */}
        <rect x="240" y="180" width="20" height="40" fill="#A855F7" /> {/* Body */}
        {/* Person 3 */}
        <circle cx="350" cy="150" r="30" fill="#E2E8F0" /> {/* Head */}
        <path d="M335 145H345M355 145H365" stroke="#1E293B" strokeWidth="2" /> {/* Eyes */}
        <path d="M345 160C345 160 350 165 355 160" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />{" "}
        {/* Mouth */}
        <rect x="340" y="180" width="20" height="40" fill="#C084FC" /> {/* Body */}
        {/* Laptop */}
        <rect x="230" y="190" width="40" height="25" rx="2" fill="#1E293B" />
        <rect x="235" y="195" width="30" height="15" rx="1" fill="#DDD6FE" />
      </svg>
    </div>
  )
}

export function OfficeScene({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="600" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background elements */}
        <rect x="50" y="100" width="500" height="150" rx="5" fill="#F1F5F9" /> {/* Floor */}
        <rect x="50" y="50" width="500" height="50" fill="#E2E8F0" /> {/* Wall */}
        {/* Window */}
        <rect x="100" y="60" width="100" height="30" rx="2" fill="#DDD6FE" />
        <path d="M150 60V90" stroke="#94A3B8" strokeWidth="1" />
        <path d="M100 75H200" stroke="#94A3B8" strokeWidth="1" />
        {/* Desk 1 */}
        <rect x="80" y="150" width="120" height="10" fill="#94A3B8" />
        <rect x="90" y="160" width="10" height="40" fill="#94A3B8" />
        <rect x="180" y="160" width="10" height="40" fill="#94A3B8" />
        {/* Person at desk 1 */}
        <circle cx="140" cy="130" r="15" fill="#E2E8F0" /> {/* Head */}
        <rect x="135" y="145" width="10" height="20" fill="#9333EA" /> {/* Body */}
        <rect x="120" y="155" width="40" height="5" fill="#1E293B" /> {/* Desk items */}
        {/* Desk 2 */}
        <rect x="240" y="150" width="120" height="10" fill="#94A3B8" />
        <rect x="250" y="160" width="10" height="40" fill="#94A3B8" />
        <rect x="340" y="160" width="10" height="40" fill="#94A3B8" />
        {/* Person at desk 2 */}
        <circle cx="300" cy="130" r="15" fill="#E2E8F0" /> {/* Head */}
        <rect x="295" y="145" width="10" height="20" fill="#A855F7" /> {/* Body */}
        <rect x="280" y="155" width="40" height="5" fill="#1E293B" /> {/* Desk items */}
        {/* Desk 3 */}
        <rect x="400" y="150" width="120" height="10" fill="#94A3B8" />
        <rect x="410" y="160" width="10" height="40" fill="#94A3B8" />
        <rect x="500" y="160" width="10" height="40" fill="#94A3B8" />
        {/* Person at desk 3 */}
        <circle cx="460" cy="130" r="15" fill="#E2E8F0" /> {/* Head */}
        <rect x="455" y="145" width="10" height="20" fill="#C084FC" /> {/* Body */}
        <rect x="440" y="155" width="40" height="5" fill="#1E293B" /> {/* Desk items */}
        {/* Plants */}
        <rect x="530" y="180" width="20" height="20" fill="#94A3B8" /> {/* Pot */}
        <path d="M540 180C540 180 530 160 540 150C550 160 540 180 540 180Z" fill="#7E22CE" />
        <path d="M540 180C540 180 550 160 545 145C535 160 540 180 540 180Z" fill="#9333EA" />
      </svg>
    </div>
  )
}

export function FloatingDevices({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Laptop */}
        <g className="animate-float-slow">
          <rect x="100" y="100" width="120" height="80" rx="5" fill="#1E293B" />
          <rect x="105" y="105" width="110" height="70" rx="2" fill="#DDD6FE" />
          <rect x="90" y="180" width="140" height="10" rx="5" fill="#1E293B" />
        </g>

        {/* Tablet */}
        <g className="animate-float">
          <rect x="250" y="120" width="80" height="100" rx="5" fill="#1E293B" />
          <rect x="255" y="125" width="70" height="90" rx="2" fill="#DDD6FE" />
          <circle cx="290" cy="175" r="5" fill="#94A3B8" />
        </g>

        {/* Smartphone */}
        <g className="animate-float-slower">
          <rect x="180" y="50" width="40" height="70" rx="5" fill="#1E293B" />
          <rect x="183" y="55" width="34" height="60" rx="2" fill="#DDD6FE" />
          <circle cx="200" cy="120" r="3" fill="#94A3B8" />
        </g>
      </svg>
    </div>
  )
}

export function BrainStorming({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Brain */}
        <path
          d="M200 50C230 50 250 70 250 100C280 100 300 120 300 150C300 180 280 200 250 200C250 230 230 250 200 250C170 250 150 230 150 200C120 200 100 180 100 150C100 120 120 100 150 100C150 70 170 50 200 50Z"
          fill="#DDD6FE"
          stroke="#9333EA"
          strokeWidth="2"
        />

        {/* Idea bubbles */}
        <g className="animate-float-slow">
          <circle cx="150" cy="80" r="15" fill="#A855F7" />
          <text x="150" y="85" textAnchor="middle" fill="white" fontSize="12">
            ?
          </text>
        </g>

        <g className="animate-float">
          <circle cx="250" cy="80" r="15" fill="#9333EA" />
          <text x="250" y="85" textAnchor="middle" fill="white" fontSize="12">
            !
          </text>
        </g>

        <g className="animate-float-slower">
          <circle cx="150" cy="220" r="15" fill="#7E22CE" />
          <text x="150" y="225" textAnchor="middle" fill="white" fontSize="12">
            ?
          </text>
        </g>

        <g className="animate-float-slow">
          <circle cx="250" cy="220" r="15" fill="#6B21A8" />
          <text x="250" y="225" textAnchor="middle" fill="white" fontSize="12">
            !
          </text>
        </g>

        {/* Connection lines */}
        <path
          d="M150 80L200 150M250 80L200 150M150 220L200 150M250 220L200 150"
          stroke="#9333EA"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  )
}
