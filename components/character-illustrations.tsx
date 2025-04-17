import { cn } from "@/lib/utils"

export function HeroCharacter({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="400" height="500" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <circle cx="200" cy="120" r="80" fill="#E2E8F0" />
        {/* Hair */}
        <path d="M140 100C140 100 160 40 200 40C240 40 260 100 260 100V120H140V100Z" fill="#9333EA" />
        {/* Face */}
        <circle cx="170" cy="100" r="8" fill="#1E293B" />
        <circle cx="230" cy="100" r="8" fill="#1E293B" />
        <path d="M180 140C180 140 200 160 220 140" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
        {/* Neck */}
        <rect x="185" y="200" width="30" height="40" fill="#E2E8F0" />
        {/* Body */}
        <path d="M120 240H280V400C280 400 250 440 200 440C150 440 120 400 120 400V240Z" fill="#9333EA" />
        {/* Arms */}
        <path d="M120 280L70 350C70 350 50 380 80 400C110 420 130 390 130 390L160 320" fill="#9333EA" />
        <path d="M280 280L330 350C330 350 350 380 320 400C290 420 270 390 270 390L240 320" fill="#9333EA" />
        {/* Design Elements */}
        <circle cx="200" cy="320" r="30" fill="#DDD6FE" />
        <path d="M185 320H215M200 305V335" stroke="#7E22CE" strokeWidth="4" strokeLinecap="round" />
        {/* Legs */}
        <path d="M170 440L160 480C160 480 160 500 190 500C220 500 220 480 220 480L210 440" fill="#1E293B" />
        <path d="M230 440L240 480C240 480 240 500 210 500C180 500 180 480 180 480L190 440" fill="#1E293B" />
      </svg>
    </div>
  )
}

export function AboutCharacter({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="400" height="500" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <circle cx="200" cy="120" r="80" fill="#E2E8F0" />
        {/* Hair */}
        <path
          d="M140 80C140 80 160 30 200 30C240 30 260 80 260 80V110C260 110 240 90 200 90C160 90 140 110 140 110V80Z"
          fill="#A855F7"
        />
        {/* Face */}
        <circle cx="170" cy="100" r="8" fill="#1E293B" />
        <circle cx="230" cy="100" r="8" fill="#1E293B" />
        <path d="M180 140C180 140 200 160 220 140" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
        {/* Glasses */}
        <path d="M150 100H190M210 100H250" stroke="#1E293B" strokeWidth="3" />
        <circle cx="170" cy="100" r="15" stroke="#1E293B" strokeWidth="3" fill="none" />
        <circle cx="230" cy="100" r="15" stroke="#1E293B" strokeWidth="3" fill="none" />
        {/* Neck */}
        <rect x="185" y="200" width="30" height="40" fill="#E2E8F0" />
        {/* Body */}
        <path d="M120 240H280V400C280 400 250 440 200 440C150 440 120 400 120 400V240Z" fill="#7E22CE" />
        {/* Arms */}
        <path d="M120 280L70 350C70 350 50 380 80 400C110 420 130 390 130 390L160 320" fill="#7E22CE" />
        <path d="M280 280L330 350C330 350 350 380 320 400C290 420 270 390 270 390L240 320" fill="#7E22CE" />
        {/* Laptop */}
        <rect x="150" y="320" width="100" height="60" rx="5" fill="#1E293B" />
        <rect x="155" y="325" width="90" height="50" rx="3" fill="#DDD6FE" />
        <path d="M175 350H225M175 365H205" stroke="#7E22CE" strokeWidth="3" strokeLinecap="round" />
        {/* Legs */}
        <path d="M170 440L160 480C160 480 160 500 190 500C220 500 220 480 220 480L210 440" fill="#1E293B" />
        <path d="M230 440L240 480C240 480 240 500 210 500C180 500 180 480 180 480L190 440" fill="#1E293B" />
      </svg>
    </div>
  )
}

export function TeamCharacter({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <rect x="50" y="300" width="500" height="20" rx="10" fill="#94A3B8" />
        {/* Person 1 */}
        <circle cx="150" cy="150" r="50" fill="#E2E8F0" /> {/* Head */}
        <path d="M130 140H140M160 140H170" stroke="#1E293B" strokeWidth="3" /> {/* Eyes */}
        <path d="M140 170C140 170 150 180 160 170" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />{" "}
        {/* Mouth */}
        <rect x="135" y="200" width="30" height="100" fill="#9333EA" /> {/* Body */}
        <path d="M135 220L100 260" stroke="#9333EA" strokeWidth="20" strokeLinecap="round" /> {/* Left arm */}
        <path d="M165 220L200 260" stroke="#9333EA" strokeWidth="20" strokeLinecap="round" /> {/* Right arm */}
        {/* Person 2 */}
        <circle cx="300" cy="150" r="50" fill="#E2E8F0" /> {/* Head */}
        <path d="M280 140H290M310 140H320" stroke="#1E293B" strokeWidth="3" /> {/* Eyes */}
        <path d="M290 170C290 170 300 180 310 170" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />{" "}
        {/* Mouth */}
        <rect x="285" y="200" width="30" height="100" fill="#A855F7" /> {/* Body */}
        <path d="M285 220L250 260" stroke="#A855F7" strokeWidth="20" strokeLinecap="round" /> {/* Left arm */}
        <path d="M315 220L350 260" stroke="#A855F7" strokeWidth="20" strokeLinecap="round" /> {/* Right arm */}
        {/* Person 3 */}
        <circle cx="450" cy="150" r="50" fill="#E2E8F0" /> {/* Head */}
        <path d="M430 140H440M460 140H470" stroke="#1E293B" strokeWidth="3" /> {/* Eyes */}
        <path d="M440 170C440 170 450 180 460 170" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />{" "}
        {/* Mouth */}
        <rect x="435" y="200" width="30" height="100" fill="#C084FC" /> {/* Body */}
        <path d="M435 220L400 260" stroke="#C084FC" strokeWidth="20" strokeLinecap="round" /> {/* Left arm */}
        <path d="M465 220L500 260" stroke="#C084FC" strokeWidth="20" strokeLinecap="round" /> {/* Right arm */}
        {/* Speech Bubbles */}
        <path d="M180 100C180 100 220 80 240 100" stroke="#9333EA" strokeWidth="2" />
        <circle cx="180" cy="80" r="20" fill="white" stroke="#9333EA" strokeWidth="2" />
        <text x="180" y="85" textAnchor="middle" fill="#9333EA" fontSize="20">
          ?
        </text>
        <path d="M330 100C330 100 370 80 390 100" stroke="#A855F7" strokeWidth="2" />
        <circle cx="330" cy="80" r="20" fill="white" stroke="#A855F7" strokeWidth="2" />
        <text x="330" y="85" textAnchor="middle" fill="#A855F7" fontSize="20">
          !
        </text>
        <path d="M480 100C480 100 520 80 540 100" stroke="#C084FC" strokeWidth="2" />
        <circle cx="480" cy="80" r="20" fill="white" stroke="#C084FC" strokeWidth="2" />
        <text x="480" y="85" textAnchor="middle" fill="#C084FC" fontSize="20">
          ✓
        </text>
      </svg>
    </div>
  )
}

export function CreativeCharacter({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg width="400" height="500" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <circle cx="200" cy="120" r="80" fill="#E2E8F0" />
        {/* Hair */}
        <path
          d="M140 90C140 90 150 40 200 40C250 40 260 90 260 90V120C260 120 240 100 200 100C160 100 140 120 140 120V90Z"
          fill="#C084FC"
        />
        {/* Face */}
        <circle cx="170" cy="100" r="8" fill="#1E293B" />
        <circle cx="230" cy="100" r="8" fill="#1E293B" />
        <path d="M180 140C180 140 200 160 220 140" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
        {/* Neck */}
        <rect x="185" y="200" width="30" height="40" fill="#E2E8F0" />
        {/* Body */}
        <path d="M120 240H280V400C280 400 250 440 200 440C150 440 120 400 120 400V240Z" fill="#A855F7" />
        {/* Arms */}
        <path d="M120 280L70 350C70 350 50 380 80 400C110 420 130 390 130 390L160 320" fill="#A855F7" />
        <path d="M280 280L330 350C330 350 350 380 320 400C290 420 270 390 270 390L240 320" fill="#A855F7" />
        {/* Palette */}
        <circle cx="200" cy="320" r="40" fill="#DDD6FE" />
        <circle cx="180" cy="310" r="8" fill="#9333EA" />
        <circle cx="200" cy="300" r="8" fill="#A855F7" />
        <circle cx="220" cy="310" r="8" fill="#C084FC" />
        <circle cx="180" cy="330" r="8" fill="#7E22CE" />
        <circle cx="220" cy="330" r="8" fill="#6B21A8" />
        <rect x="195" cy="320" width="10" height="60" rx="5" fill="#1E293B" transform="rotate(-30 195 320)" />
        {/* Legs */}
        <path d="M170 440L160 480C160 480 160 500 190 500C220 500 220 480 220 480L210 440" fill="#1E293B" />
        <path d="M230 440L240 480C240 480 240 500 210 500C180 500 180 480 180 480L190 440" fill="#1E293B" />
      </svg>
    </div>
  )
}
