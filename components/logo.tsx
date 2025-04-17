import Link from "next/link"
import { Zap } from "lucide-react"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-2 rounded-md shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:scale-105">
        <Zap className="h-5 w-5 text-white" />
      </div>
      <span className="font-heading font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600">
        Arc Agency
      </span>
    </Link>
  )
}
