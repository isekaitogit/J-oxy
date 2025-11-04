"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import type { Requirement } from "@/lib/oxylabs-requirements";

const iconMap: Record<string, any> = {
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
};

const colorMap: Record<string, string> = {
  blue: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-400/50",
  green: "from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-400/50",
  purple: "from-purple-500/20 to-violet-500/20 border-purple-500/30 hover:border-purple-400/50",
  orange: "from-orange-500/20 to-amber-500/20 border-orange-500/30 hover:border-orange-400/50",
  red: "from-red-500/20 to-rose-500/20 border-red-500/30 hover:border-red-400/50",
  cyan: "from-cyan-500/20 to-teal-500/20 border-cyan-500/30 hover:border-cyan-400/50",
  indigo: "from-indigo-500/20 to-blue-500/20 border-indigo-500/30 hover:border-indigo-400/50",
  yellow: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 hover:border-yellow-400/50",
  pink: "from-pink-500/20 to-rose-500/20 border-pink-500/30 hover:border-pink-400/50",
  teal: "from-teal-500/20 to-cyan-500/20 border-teal-500/30 hover:border-teal-400/50",
  slate: "from-slate-500/20 to-gray-500/20 border-slate-500/30 hover:border-slate-400/50",
  violet: "from-violet-500/20 to-purple-500/20 border-violet-500/30 hover:border-violet-400/50",
  emerald: "from-emerald-500/20 to-green-500/20 border-emerald-500/30 hover:border-emerald-400/50",
};

const matchLevelConfig = {
  strong: {
    icon: CheckCircle2,
    label: "Strong Match",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  moderate: {
    icon: AlertCircle,
    label: "Good Match",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
  },
  learning: {
    icon: Sparkles,
    label: "Ready to Learn",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
};

interface RequirementCardProps {
  requirement: Requirement;
}

export function RequirementCard({ requirement }: RequirementCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[requirement.icon] || Shield;
  const MatchIcon = matchLevelConfig[requirement.matchLevel].icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative"
    >
      {/* Card Container */}
      <div
        className={`
          relative backdrop-blur-xl bg-gradient-to-br ${colorMap[requirement.color]}
          border rounded-2xl overflow-hidden
          transition-all duration-300 cursor-pointer
          ${isExpanded ? "shadow-2xl shadow-cyan-500/20" : "shadow-lg"}
        `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Cyber Grid Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500" />

        {/* Card Header - Always Visible */}
        <div className="relative z-10 p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              {/* Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
              </div>

              {/* Title & Category */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400/70">
                    {requirement.category === "day-to-day" ? "Daily Task" : "Skill"}
                  </span>
                  <div className={`px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 ${matchLevelConfig[requirement.matchLevel].bgColor} ${matchLevelConfig[requirement.matchLevel].color}`}>
                    <MatchIcon className="w-3 h-3" />
                    {matchLevelConfig[requirement.matchLevel].label}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {requirement.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {requirement.description}
                </p>
              </div>
            </div>

            {/* Expand Button */}
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-cyan-400" />
            </motion.div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 overflow-hidden"
            >
              {/* Divider */}
              <div className="px-6">
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
              </div>

              <div className="p-6 pt-4 space-y-6">
                {/* Your Experience */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Your Experience
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {requirement.yourExperience}
                  </p>
                </div>

                {/* Proof Points */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Proof Points
                  </h4>
                  <ul className="space-y-2">
                    {requirement.proofPoints.map((point, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Relevant Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {requirement.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
