/**
 * Oxylabs Junior IT Operations Specialist Requirements
 * Mapped to Jaykumar Mathukiya's Experience
 */

import type { LucideIcon } from "lucide-react";

export interface JobRequirement {
  id: string;
  title: string;
  category: "day-to-day" | "skill" | "nice-to-have";
  description: string;
  yourExperience: string;
  confidenceLevel: "✅ Strong Match" | "🟢 Good Match" | "🟡 Learning" | "⚪ To Develop";
  proofLinks: {
    type: "certification" | "project" | "github" | "stats" | "guide" | "demo" | "article";
    url: string;
    label: string;
  }[];
  icon: string; // Lucide icon name
  color: "blue" | "green" | "purple" | "orange" | "red" | "cyan";
  skills?: string[];
}

export const oxyLabsRequirements: {
  dayToDay: JobRequirement[];
  skills: JobRequirement[];
  niceToHave: JobRequirement[];
} = {
  dayToDay: [
    {
      id: "security-tools",
      title: "Managing workplace and security tools",
      category: "day-to-day",
      description: "Experience with security tools, access management, VPN solutions, and workplace security",
      yourExperience: "11 months at CyberCare providing technical support for Nord Security products (NordVPN, NordPass). Expertise in VPN security, account access management, multi-platform troubleshooting (Windows, macOS, Linux, iOS, Android).",
      confidenceLevel: "✅ Strong Match",
      proofLinks: [
        { type: "certification", url: "#", label: "Nord Security Product Expertise" },
        { type: "stats", url: "#", label: "Customer Support Track Record" }
      ],
      icon: "Shield",
      color: "blue",
      skills: ["VPN Security", "Access Management", "Multi-platform Support", "Security Troubleshooting"]
    },
    {
      id: "service-desk",
      title: "Service Desk tasks and license assignments",
      category: "day-to-day",
      description: "Handling user requests, managing subscriptions/licenses, providing support via ticketing systems",
      yourExperience: "Daily customer service via chat and email at CyberCare. Resolving billing inquiries, subscription management, and license-related issues. Experience with Zendesk ticketing system.",
      confidenceLevel: "✅ Strong Match",
      proofLinks: [
        { type: "certification", url: "#", label: "Zendesk Customer Service Certification" },
        { type: "stats", url: "#", label: "Support Metrics Dashboard" }
      ],
      icon: "Headphones",
      color: "green",
      skills: ["Customer Service", "Subscription Management", "Zendesk", "Ticket Resolution"]
    },
    {
      id: "audits",
      title: "IT license audits (weekly/monthly/quarterly)",
      category: "day-to-day",
      description: "Track, audit, and maintain software license compliance",
      yourExperience: "Experience with subscription tracking and billing management at CyberCare. Currently learning license audit processes and creating personal tracking systems.",
      confidenceLevel: "🟡 Learning",
      proofLinks: [
        { type: "project", url: "#", label: "License Tracking Template (In Development)" }
      ],
      icon: "FileCheck",
      color: "purple",
      skills: ["License Management", "Compliance", "Data Tracking"]
    },
    {
      id: "purchasing",
      title: "Purchase requested software",
      category: "day-to-day",
      description: "Evaluate, recommend, and procure software for teams",
      yourExperience: "Researching and comparing SaaS tools for personal use. Understanding software evaluation criteria through cybersecurity studies at Vilnius University.",
      confidenceLevel: "🟡 Learning",
      proofLinks: [
        { type: "article", url: "#", label: "SaaS Tool Comparison Framework" }
      ],
      icon: "ShoppingCart",
      color: "orange",
      skills: ["Software Evaluation", "Vendor Research", "Cost Analysis"]
    },
    {
      id: "troubleshooting",
      title: "Troubleshoot SaaS tool issues",
      category: "day-to-day",
      description: "Diagnose and resolve software problems for users across multiple platforms",
      yourExperience: "11 months of technical troubleshooting at CyberCare: VPN connection issues, app bugs, account problems, cross-platform compatibility issues (Windows, macOS, Linux, iOS, Android).",
      confidenceLevel: "✅ Strong Match",
      proofLinks: [
        { type: "guide", url: "#", label: "Common Technical Issues Guide" },
        { type: "stats", url: "#", label: "Issue Resolution Metrics" }
      ],
      icon: "Wrench",
      color: "red",
      skills: ["Technical Troubleshooting", "Multi-platform Support", "Problem Solving", "Root Cause Analysis"]
    }
  ],
  
  skills: [
    {
      id: "experience",
      title: "1+ year technical support experience",
      category: "skill",
      description: "Proven track record in customer-facing technical support role",
      yourExperience: "11 months at CyberCare as Customer Success Manager (Jan 2025 - Present). Daily technical support for Nord Security products via chat and email.",
      confidenceLevel: "✅ Strong Match",
      proofLinks: [
        { type: "stats", url: "#", label: "Employment Verification" }
      ],
      icon: "Briefcase",
      color: "blue",
      skills: ["Customer Support", "Technical Support", "Communication"]
    },
    {
      id: "english",
      title: "Strong English communication",
      category: "skill",
      description: "Fluent English for customer interactions and documentation",
      yourExperience: "Daily communication with international customers in English. Studying at Vilnius University in English. Strong written and verbal communication skills.",
      confidenceLevel: "✅ Strong Match",
      proofLinks: [],
      icon: "Languages",
      color: "green",
      skills: ["English Communication", "Customer Engagement", "Documentation"]
    },
    {
      id: "organization",
      title: "Organizational & problem-solving skills",
      category: "skill",
      description: "Ability to prioritize tasks, manage multiple requests, and solve complex problems",
      yourExperience: "Managing customer support queue at CyberCare, prioritizing urgent issues. Led team of 100+ at Vestige Marketing. Currently studying Information Systems & Cybersecurity.",
      confidenceLevel: "✅ Strong Match",
      proofLinks: [
        { type: "stats", url: "#", label: "Team Leadership Experience" }
      ],
      icon: "ListChecks",
      color: "purple",
      skills: ["Organization", "Prioritization", "Problem Solving", "Team Leadership"]
    },
    {
      id: "tech-savvy",
      title: "Tech-savvy & interested in AI/IT",
      category: "skill",
      description: "Strong interest in technology, AI, cloud computing, and IT operations",
      yourExperience: "AWS Certified Cloud Practitioner, Azure AZ-900 certified, Terraform certified. Studying Information Systems & Cybersecurity. DevOps and Cloud Computing in skill set.",
      confidenceLevel: "✅ Strong Match",
      proofLinks: [
        { type: "certification", url: "#", label: "AWS Cloud Practitioner" },
        { type: "certification", url: "#", label: "Azure Fundamentals AZ-900" },
        { type: "certification", url: "#", label: "Terraform Associate" }
      ],
      icon: "Brain",
      color: "cyan",
      skills: ["AWS", "Azure", "Terraform", "DevOps", "Cloud Computing"]
    },
    {
      id: "communication",
      title: "Friendly & excellent communication",
      category: "skill",
      description: "Building positive relationships with customers and team members",
      yourExperience: "Customer Success Manager with focus on building strong client relationships. Top skills include Customer Engagement and Customer Experience.",
      confidenceLevel: "✅ Strong Match",
      proofLinks: [
        { type: "stats", url: "#", label: "Customer Satisfaction Metrics" }
      ],
      icon: "MessageCircle",
      color: "green",
      skills: ["Customer Engagement", "Relationship Building", "Empathy", "Active Listening"]
    },
    {
      id: "tools",
      title: "Jira Service Management, Google Sheets",
      category: "skill",
      description: "Familiarity with IT service management tools and spreadsheet analysis",
      yourExperience: "Experienced with Zendesk ticketing system (Zendesk certified). Comfortable with Google Sheets for data tracking. Ready to learn Jira Service Management.",
      confidenceLevel: "🟢 Good Match",
      proofLinks: [
        { type: "certification", url: "#", label: "Zendesk Customer Service" }
      ],
      icon: "LayoutGrid",
      color: "orange",
      skills: ["Zendesk", "Google Sheets", "Ticketing Systems", "Data Management"]
    },
    {
      id: "initiative",
      title: "Self-starter & takes initiative",
      category: "skill",
      description: "Proactive in identifying problems and implementing solutions",
      yourExperience: "Led team of 100+ at Vestige Marketing. Self-taught cloud certifications (AWS, Azure, Terraform). Pursuing cybersecurity degree while working full-time.",
      confidenceLevel: "✅ Strong Match",
      proofLinks: [
        { type: "stats", url: "#", label: "Self-Learning Track Record" }
      ],
      icon: "Rocket",
      color: "red",
      skills: ["Initiative", "Self-Learning", "Leadership", "Proactivity"]
    },
    {
      id: "learning",
      title: "Willingness to learn",
      category: "skill",
      description: "Continuous learning mindset for new tools and technologies",
      yourExperience: "Currently studying Bachelor's in Information Systems & Cybersecurity at Vilnius University (2022-2026). Earned 22+ certifications including AWS, Azure, Terraform, and Zendesk.",
      confidenceLevel: "✅ Strong Match",
      proofLinks: [
        { type: "certification", url: "#", label: "22+ Professional Certifications" },
        { type: "stats", url: "#", label: "University Education in Progress" }
      ],
      icon: "GraduationCap",
      color: "blue",
      skills: ["Continuous Learning", "Adaptability", "Growth Mindset", "Self-Development"]
    }
  ],
  
  niceToHave: [
    {
      id: "cloud-platforms",
      title: "Cloud platform experience (AWS, Azure, GCP)",
      category: "nice-to-have",
      description: "Hands-on experience with cloud infrastructure and services",
      yourExperience: "AWS Certified Cloud Practitioner and Azure AZ-900 certified. Cloud Computing and DevOps in top skill set. Studying cloud architecture and security.",
      confidenceLevel: "✅ Strong Match",
      proofLinks: [
        { type: "certification", url: "#", label: "AWS Cloud Practitioner" },
        { type: "certification", url: "#", label: "Azure AZ-900" }
      ],
      icon: "Cloud",
      color: "cyan",
      skills: ["AWS", "Azure", "Cloud Computing", "Cloud Security"]
    }
  ]
};

// Summary statistics
export const requirementsSummary = {
  total: oxyLabsRequirements.dayToDay.length + oxyLabsRequirements.skills.length + oxyLabsRequirements.niceToHave.length,
  strongMatch: 11,
  goodMatch: 1,
  learning: 2,
  toDevelop: 0,
  matchPercentage: 85.7 // (12 strong+good / 14 total) * 100
};
