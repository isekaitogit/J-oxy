"use client";

import { motion } from "framer-motion";
import { Shield, Headphones, FileCheck, ShoppingCart, Wrench, Briefcase, Languages, Brain, Sparkles, MessageCircle, Table, Zap, GraduationCap } from "lucide-react";
import { useState } from "react";

interface FlipCardProps {
  title: string;
  description: string;
  experience: string;
  icon: string;
  color: string;
  onClick?: () => void;
}

const iconMap: Record<string, any> = {
  Shield: Shield,
  Headphones: Headphones,
  FileCheck: FileCheck,
  ShoppingCart: ShoppingCart,
  Wrench: Wrench,
  Briefcase: Briefcase,
  Languages: Languages,
  Brain: Brain,
  Sparkles: Sparkles,
  MessageCircle: MessageCircle,
  Table: Table,
  Zap: Zap,
  GraduationCap: GraduationCap,
};

const colorMap: Record<string, { border: string; text: string; bg: string }> = {
  blue: { border: "border-blue-500/30", text: "text-blue-400", bg: "bg-blue-500/10" },
  green: { border: "border-green-500/30", text: "text-green-400", bg: "bg-green-500/10" },
  purple: { border: "border-purple-500/30", text: "text-purple-400", bg: "bg-purple-500/10" },
  orange: { border: "border-orange-500/30", text: "text-orange-400", bg: "bg-orange-500/10" },
  red: { border: "border-red-500/30", text: "text-red-400", bg: "bg-red-500/10" },
};

export function FlipCard({ title, description, experience, icon, color, onClick }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = iconMap[icon] || Shield;
  const colors = colorMap[color] || colorMap.blue;

  return (
    <motion.div
      className="h-80 cursor-pointer perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-full h-full transform-style-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side */}
        <div className={`absolute inset-0 backface-hidden bg-black/90 border ${colors.border} rounded-xl p-6 flex flex-col items-center justify-center text-center`}>
          <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-4`}>
            <Icon className={`w-8 h-8 ${colors.text}`} />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
          <p className="text-xs text-cyan-400 mt-4">Hover to see my experience</p>
          <p className="text-xs text-gray-500 mt-2">Click for full details</p>
        </div>

        {/* Back Side */}
        <div className={`absolute inset-0 backface-hidden bg-gradient-to-br from-black to-gray-900 border ${colors.border} rounded-xl p-6 transform rotate-y-180 overflow-y-auto`}>
          <div className="flex items-center gap-3 mb-4">
            <Icon className={`w-6 h-6 ${colors.text}`} />
            <h3 className="text-lg font-bold text-white">{title}</h3>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">{experience}</p>
          <div className="mt-4 pt-4 border-t border-cyan-400/20">
            <p className="text-xs text-cyan-400 font-semibold">Click card to view full details</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
