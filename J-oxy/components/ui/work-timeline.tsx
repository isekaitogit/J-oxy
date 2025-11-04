"use client";

import { Briefcase, GraduationCap, Target } from "lucide-react";
import { useState, useEffect } from "react";

const timeline = [
  {
    year: "Future",
    title: "Junior IT Operations Specialist",
    company: "Oxylabs",
    description: "Next step in my journey: Managing IT operations, license management, security tools, and service desk operations in a SaaS environment.",
    upcoming: true,
  },
  {
    year: "2025",
    title: "Customer Success Manager",
    company: "CyberCare",
    description: "Providing technical support for Nord Security products, managing customer inquiries, and ensuring high satisfaction rates.",
    current: true,
  },
  {
    year: "2024",
    title: "Video Editor",
    company: "Together Romania",
    description: "Creating engaging video content for social media and marketing campaigns.",
    current: true,
  },
  {
    year: "2023-2025",
    title: "Bachelor's in Information Systems & Cybersecurity",
    company: "University",
    description: "Studying cybersecurity, network security, cloud computing, and software development.",
    isEducation: true,
  },
  {
    year: "2020-2021",
    title: "Salesperson",
    company: "Vestige Marketing",
    description: "Managed a team of 100+ people, developed sales strategies, and achieved consistent growth.",
    current: false,
  },
];

export default function WorkTimeline() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;
      setIsDarkMode(html.classList.contains('dark') || html.style.backgroundColor === 'rgb(0, 0, 0)');
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style'] });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          My Journey
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          From Sales to Customer Success to IT Operations
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="w-5/12">
                <div
                  className={`${isDarkMode ? 'bg-black/90' : 'bg-white/90'} border ${
                    item.upcoming ? "border-purple-500/50 shadow-lg shadow-purple-500/20" : 
                    item.current ? "border-cyan-400/50" : "border-gray-700"
                  } rounded-lg p-6 hover:border-cyan-400/70 transition-colors ${
                    index % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  {item.upcoming && (
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded-full mb-3">
                      Next Destination 🎯
                    </span>
                  )}
                  {item.current && (
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full mb-3">
                      Current
                    </span>
                  )}
                  <p className={`text-sm font-semibold mb-2 ${
                    item.upcoming ? 'text-purple-400' : 'text-cyan-400'
                  }`}>
                    {item.year}
                  </p>
                  <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm mb-3 ${
                    item.upcoming ? 'text-purple-400 font-semibold' : 'text-purple-400'
                  }`}>{item.company}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="w-2/12 flex justify-center">
                <div
                  className={`w-12 h-12 rounded-full border-4 ${
                    item.upcoming
                      ? "border-purple-500 bg-purple-500/20 animate-pulse"
                      : item.current
                      ? "border-cyan-400 bg-cyan-500/20"
                      : "border-gray-700 bg-gray-800"
                  } flex items-center justify-center z-10`}
                >
                  {item.upcoming ? (
                    <Target className="w-6 h-6 text-purple-400" />
                  ) : item.isEducation ? (
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <Briefcase
                      className={`w-6 h-6 ${
                        item.current ? "text-cyan-400" : "text-gray-500"
                      }`}
                    />
                  )}
                </div>
              </div>

              {/* Spacer */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
