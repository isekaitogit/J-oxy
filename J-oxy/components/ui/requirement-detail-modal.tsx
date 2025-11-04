"use client";

import { X, ExternalLink, CheckCircle2, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HoverPeek } from "@/components/ui/link-preview";

interface Tool {
  name: string;
  url: string;
  purpose?: string;
  usage?: string;
  role?: string;
}

interface Responsibility {
  title: string;
  description: string;
  tools?: Tool[];
  impact?: string;
  process?: string[];
  examples?: any[];
  platforms?: Tool[];
  metrics?: string;
  supportCategories?: any[];
  system?: string[];
  results?: string;
  certifications?: string;
}

interface DetailedExperience {
  overview: string;
  responsibilities: Responsibility[];
  keyAchievements: string[];
  whyRelevant: string;
}

interface RequirementDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  requirement: {
    id: string;
    title: string;
    description: string;
    experience: string;
    detailedExperience?: DetailedExperience;
    icon: string;
    color: string;
  };
}

export function RequirementDetailModal({ isOpen, onClose, requirement }: RequirementDetailModalProps) {
  if (!requirement.detailedExperience) return null;

  const { overview, responsibilities, keyAchievements, whyRelevant } = requirement.detailedExperience;

  const colorMap: Record<string, string> = {
    blue: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    green: "bg-green-500/10 border-green-500/30 text-green-400",
    purple: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    orange: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    red: "bg-red-500/10 border-red-500/30 text-red-400",
  };

  const badgeColor = colorMap[requirement.color] || colorMap.blue;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center"
          >
            <div className="bg-black border border-cyan-400/30 rounded-xl shadow-2xl w-full h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-transparent">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{requirement.title}</h2>
                  <p className="text-sm text-gray-400">{requirement.description}</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-cyan-400/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">
                {/* Overview */}
                <div className={`border rounded-lg p-6 ${badgeColor}`}>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Summary
                  </h3>
                  <p className="text-gray-300 leading-relaxed">{overview}</p>
                </div>

                {/* Short Experience Summary */}
                <div className="bg-cyan-500/5 border border-cyan-400/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">My Experience</h3>
                  <p className="text-gray-300 leading-relaxed">{requirement.experience}</p>
                </div>

                {/* Detailed Responsibilities */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Detailed Responsibilities</h3>
                  <div className="space-y-6">
                    {responsibilities.map((resp, idx) => (
                      <div key={idx} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 space-y-4">
                        <h4 className="text-lg font-semibold text-cyan-400">{resp.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{resp.description}</p>

                        {/* Tools Used */}
                        {resp.tools && resp.tools.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-gray-400 mb-3">Tools & Platforms:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {resp.tools.map((tool, toolIdx) => (
                                <HoverPeek
                                  key={toolIdx}
                                  url={tool.url}
                                  peekWidth={250}
                                  peekHeight={160}
                                  enableLensEffect={true}
                                  enableMouseFollow={true}
                                >
                                  <a
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 p-3 bg-black/50 border border-cyan-400/20 rounded-lg hover:border-cyan-400/40 transition-colors group"
                                  >
                                    <ExternalLink className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <div className="flex-1 min-w-0">
                                      <p className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                        {tool.name}
                                      </p>
                                      <p className="text-xs text-gray-400 mt-1">{tool.purpose || tool.usage || tool.role}</p>
                                    </div>
                                  </a>
                                </HoverPeek>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Platforms */}
                        {resp.platforms && resp.platforms.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-gray-400 mb-3">Managed Platforms:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {resp.platforms.map((platform, pIdx) => (
                                <HoverPeek
                                  key={pIdx}
                                  url={platform.url}
                                  peekWidth={250}
                                  peekHeight={160}
                                  enableLensEffect={true}
                                  enableMouseFollow={true}
                                >
                                  <a
                                    href={platform.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 p-3 bg-black/50 border border-cyan-400/20 rounded-lg hover:border-cyan-400/40 transition-colors group"
                                  >
                                    <ExternalLink className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <div className="flex-1 min-w-0">
                                      <p className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                        {platform.name}
                                      </p>
                                      <p className="text-xs text-gray-400 mt-1">{platform.role}</p>
                                    </div>
                                  </a>
                                </HoverPeek>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Process Steps */}
                        {resp.process && resp.process.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-gray-400 mb-3">Process:</p>
                            <div className="space-y-2">
                              {resp.process.map((step, stepIdx) => (
                                <div key={stepIdx} className="flex items-start gap-3">
                                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-xs text-cyan-400 font-bold">{stepIdx + 1}</span>
                                  </div>
                                  <p className="text-sm text-gray-300">{step}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Examples */}
                        {resp.examples && resp.examples.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-gray-400 mb-3">Examples:</p>
                            <div className="space-y-3">
                              {resp.examples.map((example, exIdx) => (
                                <div key={exIdx} className="bg-black/30 border-l-2 border-cyan-400 p-3 rounded-r">
                                  {typeof example === 'string' ? (
                                    <p className="text-sm text-gray-300">{example}</p>
                                  ) : (
                                    <>
                                      <p className="text-sm font-medium text-white mb-1">
                                        Request: {example.request}
                                      </p>
                                      <p className="text-sm text-cyan-400 mb-1">
                                        Solution: {example.solution}
                                      </p>
                                      <p className="text-xs text-gray-400">
                                        Outcome: {example.outcome}
                                      </p>
                                    </>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Support Categories */}
                        {resp.supportCategories && resp.supportCategories.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-gray-400 mb-3">Support Categories:</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {resp.supportCategories.map((cat, catIdx) => (
                                <div key={catIdx} className="bg-black/30 border border-gray-700 rounded-lg p-4">
                                  <p className="font-medium text-white mb-2">{cat.category}</p>
                                  <p className="text-xs text-cyan-400 mb-2">Avg: {cat.avgResolutionTime}</p>
                                  <ul className="space-y-1">
                                    {cat.examples.map((ex: string, exIdx: number) => (
                                      <li key={exIdx} className="text-xs text-gray-400">• {ex}</li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* System */}
                        {resp.system && resp.system.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-gray-400 mb-3">System Implemented:</p>
                            <ul className="space-y-2">
                              {resp.system.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-300">
                                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Impact */}
                        {resp.impact && (
                          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                            <p className="text-sm font-semibold text-green-400 mb-2">Impact:</p>
                            <p className="text-sm text-gray-300">{resp.impact}</p>
                          </div>
                        )}

                        {/* Results */}
                        {resp.results && (
                          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                            <p className="text-sm font-semibold text-green-400 mb-2">Results:</p>
                            <p className="text-sm text-gray-300">{resp.results}</p>
                          </div>
                        )}

                        {/* Metrics */}
                        {resp.metrics && (
                          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                            <p className="text-sm font-semibold text-cyan-400 mb-2">Metrics:</p>
                            <p className="text-sm text-gray-300">{resp.metrics}</p>
                          </div>
                        )}

                        {/* Certifications */}
                        {resp.certifications && (
                          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                            <p className="text-sm font-semibold text-purple-400 mb-2">Certifications:</p>
                            <p className="text-sm text-gray-300">{resp.certifications}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-6 h-6 text-cyan-400" />
                    Key Achievements
                  </h3>
                  <ul className="space-y-3">
                    {keyAchievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why This Is Relevant */}
                <div className="bg-cyan-500/5 border-2 border-cyan-400/40 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Why This Experience Is Relevant</h3>
                  <p className="text-gray-300 leading-relaxed">{whyRelevant}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
