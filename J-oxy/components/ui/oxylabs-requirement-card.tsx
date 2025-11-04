"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useOnClickOutside } from "usehooks-ts"
import { 
  Shield, 
  Headphones, 
  FileCheck, 
  ShoppingCart, 
  Wrench,
  Briefcase,
  Languages,
  ListChecks,
  Brain,
  MessageCircle,
  LayoutGrid,
  Rocket,
  GraduationCap,
  Cloud,
  ExternalLink,
  Github,
  FileText,
  BarChart3,
  BookOpen,
  type LucideIcon
} from "lucide-react"
import type { JobRequirement } from "@/lib/job-requirements"

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  Shield,
  Headphones,
  FileCheck,
  ShoppingCart,
  Wrench,
  Briefcase,
  Languages,
  ListChecks,
  Brain,
  MessageCircle,
  LayoutGrid,
  Rocket,
  GraduationCap,
  Cloud,
}

// Proof link icon mapping
const proofIconMap: Record<string, LucideIcon> = {
  certification: FileText,
  project: Github,
  github: Github,
  stats: BarChart3,
  guide: BookOpen,
  demo: ExternalLink,
  article: FileText,
}

// Color mapping for backgrounds and accents
const colorMap = {
  blue: {
    bg: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20 hover:border-blue-500/40",
    icon: "text-blue-500",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  green: {
    bg: "from-green-500/10 to-emerald-500/10",
    border: "border-green-500/20 hover:border-green-500/40",
    icon: "text-green-500",
    badge: "bg-green-500/10 text-green-400 border-green-500/20"
  },
  purple: {
    bg: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20 hover:border-purple-500/40",
    icon: "text-purple-500",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  orange: {
    bg: "from-orange-500/10 to-yellow-500/10",
    border: "border-orange-500/20 hover:border-orange-500/40",
    icon: "text-orange-500",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  },
  red: {
    bg: "from-red-500/10 to-rose-500/10",
    border: "border-red-500/20 hover:border-red-500/40",
    icon: "text-red-500",
    badge: "bg-red-500/10 text-red-400 border-red-500/20"
  },
  cyan: {
    bg: "from-cyan-500/10 to-blue-500/10",
    border: "border-cyan-500/20 hover:border-cyan-500/40",
    icon: "text-cyan-500",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  }
}

interface RequirementCardProps {
  requirements: JobRequirement[]
  className?: string
  onRequirementClick?: (requirement: JobRequirement) => void
}

export default function OxylabsRequirementCard({
  requirements,
  className,
  onRequirementClick,
}: RequirementCardProps) {
  const [activeItem, setActiveItem] = useState<JobRequirement | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => setActiveItem(null))

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveItem(null)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      {/* Backdrop overlay when card is expanded */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Expanded card modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 grid place-items-center p-4 overflow-y-auto">
            <motion.div
              className="bg-zinc-900 border border-zinc-800 flex w-full max-w-2xl cursor-default flex-col gap-6 overflow-hidden rounded-2xl p-6 shadow-2xl"
              ref={ref}
              layoutId={`requirement-${activeItem.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", duration: 0.3 }}
            >
              {/* Header with icon and title */}
              <div className="flex items-start gap-4">
                <motion.div 
                  layoutId={`icon-${activeItem.id}`}
                  className={`flex-none rounded-xl bg-gradient-to-br ${colorMap[activeItem.color].bg} p-3 border ${colorMap[activeItem.color].border}`}
                >
                  {(() => {
                    const Icon = iconMap[activeItem.icon]
                    return <Icon className={`h-8 w-8 ${colorMap[activeItem.color].icon}`} />
                  })()}
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <motion.div
                    layoutId={`confidence-${activeItem.id}`}
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium mb-2 ${colorMap[activeItem.color].badge}`}
                  >
                    {activeItem.confidenceLevel}
                  </motion.div>
                  <motion.h3
                    layoutId={`title-${activeItem.id}`}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {activeItem.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${activeItem.id}`}
                    className="text-sm text-zinc-400"
                  >
                    {activeItem.description}
                  </motion.p>
                </div>
              </div>

              {/* Your experience section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-3"
              >
                <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                  Your Experience
                </h4>
                <p className="text-base text-zinc-100 leading-relaxed">
                  {activeItem.yourExperience}
                </p>
              </motion.div>

              {/* Skills tags */}
              {activeItem.skills && activeItem.skills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3"
                >
                  <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                    Relevant Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeItem.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-zinc-800 border border-zinc-700 px-3 py-1 text-xs font-medium text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Proof links */}
              {activeItem.proofLinks.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3"
                >
                  <h4 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                    Proof & Evidence
                  </h4>
                  <div className="space-y-2">
                    {activeItem.proofLinks.map((link, idx) => {
                      const ProofIcon = proofIconMap[link.type]
                      return (
                        <button
                          key={idx}
                          className="flex w-full items-center justify-between rounded-lg border border-zinc-700 bg-zinc-800/50 p-3 text-left transition-colors hover:bg-zinc-700/50 hover:border-zinc-600"
                          onClick={() => window.open(link.url, "_blank")}
                        >
                          <div className="flex items-center gap-3">
                            <ProofIcon className="h-4 w-4 text-zinc-400" />
                            <span className="text-sm font-medium text-zinc-200">
                              {link.label}
                            </span>
                          </div>
                          <ExternalLink className="h-4 w-4 text-zinc-500" />
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {/* Close button */}
              <button
                onClick={() => setActiveItem(null)}
                className="mt-2 w-full rounded-lg bg-zinc-800 border border-zinc-700 py-3 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grid of requirement cards */}
      <div className={`relative ${className || ""}`}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {requirements.map((requirement) => {
            const Icon = iconMap[requirement.icon]
            const colors = colorMap[requirement.color]
            
            return (
              <motion.div
                layoutId={`requirement-${requirement.id}`}
                key={requirement.id}
                className={`group relative cursor-pointer overflow-hidden rounded-xl border ${colors.border} bg-gradient-to-br ${colors.bg} backdrop-blur-sm p-5 transition-all duration-300 hover:shadow-xl hover:shadow-${requirement.color}-500/10`}
                onClick={() => {
                  setActiveItem(requirement)
                  if (onRequirementClick) onRequirementClick(requirement)
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
                </div>

                {/* Icon */}
                <motion.div
                  layoutId={`icon-${requirement.id}`}
                  className={`relative mb-4 inline-flex rounded-lg bg-gradient-to-br ${colors.bg} p-2.5 border ${colors.border}`}
                >
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <motion.div
                    layoutId={`confidence-${requirement.id}`}
                    className={`mb-2 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${colors.badge}`}
                  >
                    {requirement.confidenceLevel}
                  </motion.div>
                  
                  <motion.h3
                    layoutId={`title-${requirement.id}`}
                    className="mb-2 text-lg font-semibold text-white line-clamp-2 group-hover:text-opacity-90"
                  >
                    {requirement.title}
                  </motion.h3>
                  
                  <motion.p
                    layoutId={`description-${requirement.id}`}
                    className="text-sm text-zinc-400 line-clamp-2"
                  >
                    {requirement.description}
                  </motion.p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <ExternalLink className="h-4 w-4 text-zinc-400" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  )
}
