"use client";

import { Dithering } from "@paper-design/shaders-react";
import { useState } from "react";
import { FlipCard } from "@/components/ui/flip-card";
import WorkTimeline from "@/components/ui/work-timeline";
import { Award, MapPin, Briefcase, GraduationCap, Languages, Brain, Sparkles, MessageCircle, Table, Zap } from "lucide-react";
import { ClipPathLinks } from "@/components/ui/clip-path-links";
import { RequirementDetailModal } from "@/components/ui/requirement-detail-modal";

const jobRequirements = [
  {
    id: "security-tools",
    title: "Managing workplace and security tools",
    description: "Experience with security tools, access management, and workplace solutions",
    experience: "Part of a 5-person friends study group where we learn cybersecurity and build software projects together. I help coordinate our development tools and security setup for our collaborative projects.",
    detailedExperience: {
      overview: "In our small study group of friends, I help manage the development tools and security practices we use while learning and building projects together.",
      responsibilities: [
        {
          title: "Development Tools Setup",
          description: "Help friends in our study group set up development tools like VS Code, Git, and GitHub for our projects.",
          tools: [
            { name: "VS Code", url: "https://code.visualstudio.com/", purpose: "Code editor setup with useful extensions" },
            { name: "GitHub", url: "https://github.com/", purpose: "Share code and collaborate on projects" },
            { name: "GitHub Student Pack", url: "https://education.github.com/pack", purpose: "Free developer tools for students" },
          ],
          impact: "Helped 4 friends get started with proper development setup"
        },
        {
          title: "Security Tool Testing",
          description: "Experimented with security tools like CodeRabbit AI to learn about code security scanning.",
          tools: [
            { name: "CodeRabbit AI", url: "https://coderabbit.ai/", purpose: "Tested automated code reviews for learning purposes" },
          ],
          impact: "Learning how security scanning works in real projects"
        },
        {
          title: "Tracking Subscriptions",
          description: "Keep track of free trials and student subscriptions so we don't lose access unexpectedly.",
          tools: [
            { name: "Notion", url: "https://notion.so/", purpose: "Personal tracker for trial expiration dates" },
            { name: "Google Calendar", url: "https://calendar.google.com/", purpose: "Reminders for renewal dates" },
          ],
          examples: [
            "Track free trial periods (14-30 days) for various tools",
            "Remind friends about upcoming trial expirations",
            "Help find alternative free tools when trials end"
          ]
        },
        {
          title: "Cloud Platform Learning",
          description: "Learning and practicing with cloud platforms through student credits and free tiers.",
          tools: [
            { name: "Google Cloud Platform", url: "https://cloud.google.com/", purpose: "Used student credits for learning cloud basics" },
            { name: "AWS", url: "https://aws.amazon.com/", purpose: "AWS Certified Cloud Practitioner" },
            { name: "Azure", url: "https://azure.microsoft.com/", purpose: "Azure Fundamentals AZ-900 certified" },
          ],
          certifications: "AWS Certified Cloud Practitioner, Azure Fundamentals AZ-900"
        }
      ],
      keyAchievements: [
        "Helped 5 friends set up proper development environments",
        "Earned AWS and Azure certifications through self-study",
        "Keep track of 10+ student subscriptions and free trials",
        "Learned about security scanning and vulnerability detection"
      ],
      whyRelevant: "Even at a small scale with friends, I practice the same skills needed in IT Operations: helping others with tool setup, tracking subscriptions, learning about security, and keeping things organized. These same skills apply whether it's 5 people or 500."
    },
    icon: "Shield",
    color: "blue",
  },
  {
    id: "service-desk",
    title: "Service Desk tasks and license assignments",
    description: "Handling user requests, managing licenses, and providing support",
    experience: "Customer Success Manager at CyberCare for NordVPN and NordProtect. I handle customer support via live chat and tickets, helping with technical issues and account management.",
    detailedExperience: {
      overview: "Working as Customer Success Manager at CyberCare for 11 months, providing support for NordVPN and NordProtect products through live chat (mostly) and tickets (occasionally).",
      responsibilities: [
        {
          title: "Customer Support for Nord Security Products",
          description: "Provide customer support for NordVPN and NordProtect via live chat and Zendesk tickets.",
          tools: [
            { name: "NordVPN", url: "https://nordvpn.com/", purpose: "Main product - VPN troubleshooting and support" },
            { name: "NordProtect", url: "https://nordprotect.com/", purpose: "Security product support" },
            { name: "Zendesk", url: "https://zendesk.com/", purpose: "Live chat and ticket management system" },
          ],
          impact: "Handle customer inquiries daily through live chat (primary) and tickets (occasional)"
        },
        {
          title: "Customer Satisfaction Excellence",
          description: "Over the last 3 months, I developed and perfected my own techniques for achieving consistently high customer satisfaction scores.",
          process: [
            "Experimented with different communication approaches",
            "Tested same solutions but with different wording and timing",
            "Refined refund timing and explanation methods (within company rules)",
            "Developed master framework for positive customer interactions"
          ],
          metrics: "Last 3 months: Never below 93% satisfaction. Last month: 96% on both QA and Customer Satisfaction - excellent score across all areas",
          impact: "Achieved 96% satisfaction rate last month through refined customer interaction techniques"
        },
        {
          title: "Technical Problem Solving",
          description: "Troubleshoot technical issues for NordVPN and NordProtect customers across different platforms and operating systems.",
          examples: [
            "Unable to access websites/services issues on different OS",
            "Dedicated IP related problems and configurations",
            "Payment & subscription related issues",
            "Care and billing related problems",
            "Refund requests and customer retention strategies"
          ]
        }
      ],
      keyAchievements: [
        "11 months as Customer Success Manager at CyberCare",
        "96% Customer Satisfaction and QA score last month",
        "Never below 93% satisfaction in last 3 months",
        "Developed proven framework for positive customer interactions",
        "Zendesk Customer Service Professional certified"
      ],
      whyRelevant: "Service desk work requires understanding user needs, solving problems efficiently, and maintaining high satisfaction - exactly what I do daily at CyberCare. My proven track record of 96% satisfaction shows I can deliver excellent support consistently."
    },
    icon: "Headphones",
    color: "green",
  },
  {
    id: "license-audits",
    title: "IT license audits (weekly/monthly/quarterly)",
    description: "Track, audit, and maintain software license compliance",
    experience: "Experience tracking subscriptions and billing for customers at CyberCare. I understand license types and manage account statuses. Strong organizational skills from managing a team of 100+ people at Vestige Marketing. AWS & Azure certifications demonstrate understanding of cloud licensing models.",
    icon: "FileCheck",
    color: "purple",
  },
  {
    id: "software-purchasing",
    title: "Purchase requested software",
    description: "Evaluate, recommend, and procure software for teams",
    experience: "As a Bachelor's student in Information Systems, I actively research and compare software tools. I've worked with various SaaS platforms (Zendesk, CapCut, Nord products) and understand feature evaluation. My sales background at Vestige gives me negotiation and vendor communication skills.",
    icon: "ShoppingCart",
    color: "orange",
  },
  {
    id: "troubleshooting",
    title: "Troubleshoot SaaS tool issues",
    description: "Diagnose and resolve software problems for users",
    experience: "At CyberCare for the past 11 months, I troubleshoot technical issues daily across multiple operating systems - VPN connections, app crashes, configuration problems, and integration issues. I excel at diagnosing problems and providing clear solutions. Zendesk Customer Service Professional certified.",
    icon: "Wrench",
    color: "red",
  },
];

const skillsAndExperience = [
  {
    id: "experience-1year",
    title: "1+ year experience in technical support role",
    description: "At least 1 year of experience in a similar position or technical support role",
    experience: "10+ months at CyberCare as Customer Success Manager. Performing at one-year experience level in my team. Click for full details.",
    detailedExperience: {
      overview: "Currently have 10+ months of experience at CyberCare as Customer Success Manager. While not exactly one year yet, I'm performing at the level of someone with one year of experience in my team.",
      responsibilities: [
        {
          title: "Customer Success Manager Experience",
          description: "Working at CyberCare for 10+ months, handling customer support for NordVPN and NordProtect products.",
          tools: [
            { name: "Zendesk", url: "https://zendesk.com/", purpose: "Customer support ticketing and live chat system" },
            { name: "NordVPN", url: "https://nordvpn.com/", purpose: "Main product support" },
            { name: "NordProtect", url: "https://nordprotect.com/", purpose: "Security product support" },
          ],
          impact: "Performing at one-year experience level according to team standards"
        }
      ],
      keyAchievements: [
        "10+ months at CyberCare as Customer Success Manager",
        "Performing at one-year experience level in my team",
        "96% customer satisfaction rate last month",
        "Handle 20-30 support tickets daily"
      ],
      whyRelevant: "While slightly under one year, my performance and capabilities match someone with one year of experience in technical support, as confirmed by my team performance standards."
    },
    icon: "Briefcase",
    color: "blue",
  },
  {
    id: "english-knowledge",
    title: "Strong knowledge of English",
    description: "Excellent English communication skills for professional environment",
    experience: "Work entirely in English at CyberCare, handling international customers daily. Click for full details.",
    detailedExperience: {
      overview: "My job at CyberCare is entirely in English - handling customer support for international customers daily. English communication is not an issue for me.",
      responsibilities: [
        {
          title: "Daily English Communication",
          description: "Work entirely in English at CyberCare, communicating with international customers from different countries and backgrounds.",
          examples: [
            "Handle live chat support in English",
            "Write clear technical explanations for customers",
            "Communicate with international team members",
            "Document issues and solutions in English"
          ]
        }
      ],
      keyAchievements: [
        "Work 100% in English daily at CyberCare",
        "Handle international customer support",
        "96% satisfaction rate through clear English communication",
        "Zendesk Customer Service Professional certified"
      ],
      whyRelevant: "Working entirely in English for 10+ months with international customers proves my English proficiency is more than sufficient for professional IT operations work."
    },
    icon: "Languages",
    color: "green",
  },
  {
    id: "organizational-skills",
    title: "Organizational and problem-solving skills",
    description: "Strong organizational and problem-solving abilities",
    experience: "Regularly solve technical problems for friends and projects - found 21st.dev for friend's AI agent, integrated Playwright MCP for automation, helped with architecture migrations. Click for full details.",
    detailedExperience: {
      overview: "I regularly solve technical problems for friends and projects, finding solutions that improve workflows and solve real challenges.",
      responsibilities: [
        {
          title: "Problem Solving Example 1: Front-end Solution",
          description: "Friend was building AI agent in VS Code - every generated website looked generic and AI-made. He wanted something that actually looks good.",
          tools: [
            { name: "21st.dev", url: "https://21st.dev/", purpose: "Platform for beautiful front-end components - found after research" },
          ],
          impact: "Friend used 21st.dev and improved his entire front-end in one night - 100% transformation from what it was initially"
        },
        {
          title: "Problem Solving Example 2: AI Vision Integration",
          description: "After working with GitHub Copilot agent in VS Code, I found the big problem - AI tools have good brain and execution but they don't have eyes to verify their changes.",
          tools: [
            { name: "Playwright MCP", url: "https://playwright.dev/", purpose: "Model Context Protocol integration to give AI 'eyes' for visual verification" },
          ],
          process: [
            "Researched Model Context Protocol (MCP)",
            "Integrated Playwright MCP with our AI agent",
            "Now agent verifies front-end changes visually",
            "Automated boring tasks like form filling testing"
          ],
          impact: "Automated repetitive testing tasks, AI can now verify its own front-end changes"
        },
        {
          title: "Problem Solving Example 3: Architecture Migration",
          description: "Friend had student activity planning website using MongoDB with React/Next.js. He wanted AI chat agent for quiz building.",
          tools: [
            { name: "Firebase", url: "https://firebase.google.com/", purpose: "Better ecosystem for AI services integration" },
          ],
          process: [
            "Analyzed his current MongoDB + React/Next.js setup",
            "Suggested architectural shift to Firebase",
            "Firebase provides easier developer integration for AI services",
            "Guided him through the migration"
          ],
          impact: "Successfully migrated architecture, easier AI integration for quiz building features"
        }
      ],
      keyAchievements: [
        "Found 21st.dev solution - improved friend's website 100% overnight",
        "Integrated Playwright MCP to give AI 'visual' verification",
        "Helped friend migrate MongoDB to Firebase for better AI ecosystem",
        "Solve multiple architecture and API related problems for friends"
      ],
      whyRelevant: "IT Operations requires finding solutions to technical problems, researching tools, and helping teams adopt better workflows - exactly what I do regularly for friends' projects."
    },
    icon: "Brain",
    color: "purple",
  },
  {
    id: "tech-savvy",
    title: "Tech-savvy and interest in IT/AI",
    description: "Tech-savvy and constant interest in up-to-date IT technologies and AI news",
    experience: "Building AI chatbot for teacher client, follow 40-50 AI news channels on YouTube, share daily discoveries with friends. Recently joined 2 AI developer Slack channels. Click for full details.",
    detailedExperience: {
      overview: "I'm building real AI projects for clients, stay updated with 40-50 AI news channels, and constantly share new discoveries to improve workflows.",
      responsibilities: [
        {
          title: "Current Client Project: AI-Powered Education Platform",
          description: "Building platform for Lithuanian English teacher client where she can manage students, courses, and classes using Google services.",
          tools: [
            { name: "React/Next.js", url: "https://nextjs.org/", purpose: "Front-end framework for the platform" },
            { name: "Google Services", url: "https://developers.google.com/", purpose: "Integration for classes and student management" },
            { name: "Live Prototype", url: "https://ltus-acadamy--paji-duolingo.europe-west4.hosted.app/", purpose: "Working prototype of the AI-powered education platform" },
            { name: "AI Chatbot", url: "https://ltus-acadamy--paji-duolingo.europe-west4.hosted.app/", purpose: "My initiative - AI-powered course creation assistant" },
          ],
          process: [
            "Started with basic platform for student/course management",
            "I came up with extra idea: monthly AI subscription service",
            "Built chatbot where teacher describes course details",
            "AI generates lessons: MCQs, reading content, YouTube videos",
            "Showed prototype in first meeting - client loved it!"
          ],
          impact: "Client impressed with how easily she can create courses with AI chatbot. She suggested adding student-side features too."
        },
        {
          title: "Staying Updated with AI/Tech News",
          description: "My YouTube is filled with 40-50 AI news channels - I watch daily updates and follow new developments.",
          examples: [
            "Follow OpenAI, Anthropic, Google AI announcements",
            "Watch AI tool reviews and comparisons",
            "Learn about new AI workflows and productivity tips",
            "Keep up with IT technology trends"
          ],
          impact: "Every day I learn something new and share with friends to improve our workflows"
        },
        {
          title: "Sharing Knowledge with Friends",
          description: "I have a personal commitment - every time I meet my friend who I study with, I show him one new service or news that will help make our workflows easier or develop ideas faster.",
          tools: [
            { name: "Slack Channels (2)", url: "https://slack.com/", purpose: "Recently joined 2 AI developer channels to stay even more updated" },
          ],
          impact: "Help friends stay updated on useful AI news and tools"
        }
      ],
      keyAchievements: [
        "Building AI chatbot for real client project",
        "Client impressed with AI course creation idea (my initiative)",
        "Follow 40-50 AI news channels on YouTube daily",
        "Recently joined 2 Slack channels for AI developers",
        "Share daily AI/tech discoveries with friends"
      ],
      whyRelevant: "IT Operations needs someone who stays updated with new technologies, learns quickly, and can suggest innovative solutions - my daily habit of learning and sharing AI/tech news shows this mindset."
    },
    icon: "Sparkles",
    color: "orange",
  },
  {
    id: "communication-skills",
    title: "Excellent communication skills",
    description: "Friendly and helpful personality with excellent communication skills",
    experience: "Zendesk certified, 96% satisfaction rate last month at CyberCare. Mastered customer communication over 10 months. Click for full details.",
    detailedExperience: {
      overview: "Completed Zendesk Customer Service Professional certification and mastered customer communication over 10 months at CyberCare. Achieved 96% satisfaction rate last month.",
      responsibilities: [
        {
          title: "Customer Communication Excellence",
          description: "Mastered customer communication through Zendesk certification and 10 months of daily practice at CyberCare.",
          tools: [
            { name: "Zendesk", url: "https://zendesk.com/", purpose: "Completed Customer Service Professional certification" },
          ],
          metrics: "96% Customer Satisfaction and QA score last month",
          impact: "Consistently achieve high satisfaction through excellent communication"
        }
      ],
      keyAchievements: [
        "Zendesk Customer Service Professional certified",
        "96% satisfaction rate last month at CyberCare",
        "Never below 93% satisfaction in last 3 months",
        "Mastered customer communication over 10 months"
      ],
      whyRelevant: "Excellent communication is essential for IT Operations when working with teams and handling requests - my proven 96% satisfaction rate shows I can communicate effectively."
    },
    icon: "MessageCircle",
    color: "red",
  },
  {
    id: "jira-google-sheets",
    title: "Jira Service Management, Google Sheets",
    description: "Experience using Jira Service Management and Google Sheets",
    experience: "Use Jira Service Management at CyberCare to create test tickets for Nord Security dev team. Familiar and ready to learn more. Click for full details.",
    detailedExperience: {
      overview: "At CyberCare, I use Jira Service Management to create test tickets for the Nord Security developer team. Familiar with the system and ready to learn more.",
      responsibilities: [
        {
          title: "Jira Service Management Experience",
          description: "Use Jira Service Management at CyberCare for creating test tickets that help the Nord Security development team.",
          tools: [
            { name: "Jira Service Management", url: "https://www.atlassian.com/software/jira/service-management", purpose: "Create test tickets for developer team" },
          ],
          impact: "Familiar with ticketing systems and ready to expand knowledge"
        }
      ],
      keyAchievements: [
        "Use Jira Service Management at CyberCare",
        "Create test tickets for Nord Security dev team",
        "Familiar with ticketing system workflows",
        "Ready to learn more advanced features"
      ],
      whyRelevant: "Already using Jira Service Management at current job, so I'm familiar with the system and can quickly learn any additional features needed for IT Operations work."
    },
    icon: "Table",
    color: "blue",
  },
  {
    id: "initiative",
    title: "Work independently and take initiative",
    description: "Able to work on your own and take the initiative",
    experience: "AI chatbot for teacher was my initiative (not client's request). Client impressed with time savings. Always automate boring tasks. Click for full details.",
    detailedExperience: {
      overview: "The AI chatbot for my teacher client was my own initiative - not requested by client, but I suggested it and she was impressed with how much time it saves. I always look for ways to automate boring tasks.",
      responsibilities: [
        {
          title: "Taking Initiative: AI Chatbot Project",
          description: "Built AI-powered course creation chatbot as my own initiative - client didn't request it, but I saw the opportunity to save time.",
          process: [
            "Client originally wanted basic platform for students and courses",
            "I thought: what if teacher could describe course and AI builds it?",
            "Built chatbot prototype on my own initiative",
            "Showed in first meeting - client was impressed!",
            "She loved how much time it saves creating courses"
          ],
          impact: "Client impressed with time-saving initiative, requested student-side features too"
        },
        {
          title: "Always Automating Boring Tasks",
          description: "I look for ways to automate repetitive tasks that don't require human expertise - let AI handle the boring stuff.",
          examples: [
            "Integrated Playwright MCP for automated form testing",
            "Find tools to reduce time on repetitive work",
            "Suggest automation solutions to friends",
            "Focus human time on things that actually need expertise"
          ]
        }
      ],
      keyAchievements: [
        "AI chatbot was my initiative (not client's request)",
        "Client impressed with time-saving solution",
        "Always look for automation opportunities",
        "Take initiative on improvements without being asked"
      ],
      whyRelevant: "IT Operations needs people who take initiative and find better ways to do things - I don't wait to be asked, I suggest improvements and automation opportunities."
    },
    icon: "Zap",
    color: "green",
  },
  {
    id: "willingness-learn",
    title: "Willingness to learn",
    description: "Strong willingness to learn skills and grasp new concepts",
    experience: "Learn new AI/tech daily, share with friends. Joined 2 Slack channels for AI developers. Eager to join any Oxylabs learning programs. Click for full details.",
    detailedExperience: {
      overview: "I'm always learning something new with AI and tech. Every day I find new tools or news to share with friends that make workflows easier.",
      responsibilities: [
        {
          title: "Daily Learning Habit",
          description: "Every day I learn something new about AI and technology, then share discoveries with friends.",
          tools: [
            { name: "YouTube", url: "https://youtube.com/", purpose: "40-50 AI news channels subscribed" },
            { name: "Slack", url: "https://slack.com/", purpose: "Joined 2 AI developer channels recently" },
          ],
          examples: [
            "Watch AI news and updates daily",
            "Learn about new tools and workflows",
            "Share useful discoveries with friends",
            "Test new tools and technologies"
          ]
        },
        {
          title: "Eager to Learn More",
          description: "If Oxylabs has any program for employees to learn about new AI tools or IT technologies, I'd love to join.",
          impact: "Recently joined 2 Slack channels focused on AI for developers to stay updated"
        }
      ],
      keyAchievements: [
        "Learn new AI/tech daily from 40-50 YouTube channels",
        "Recently joined 2 Slack channels for AI developers",
        "Share daily discoveries with friends",
        "Eager to join any Oxylabs learning programs"
      ],
      whyRelevant: "IT Operations involves constantly learning new tools and technologies - my daily learning habit and eagerness to join learning programs shows I'm always ready to grow."
    },
    icon: "GraduationCap",
    color: "purple",
  },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedRequirement, setSelectedRequirement] = useState<typeof jobRequirements[0] | typeof skillsAndExperience[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (requirement: typeof jobRequirements[0] | typeof skillsAndExperience[0]) => {
    setSelectedRequirement(requirement);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedRequirement(null), 300);
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Oxylabs X-Shaped Logo Background - ASCII Art Version */}
      <div className="fixed inset-0 w-full h-full -z-10">
        {/* Base background color */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            backgroundColor: isDarkMode ? "hsl(0, 0%, 0%)" : "hsl(0, 0%, 100%)"
          }}
        />
        
        {/* Oxylabs X Logo - Made with Animated ASCII Characters (3 lines each) */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          {/* DARKER STROKE: \ (backslash) TOP-LEFT to BOTTOM-RIGHT - 3 LINES */}
          
          {/* Line 1 - Fastest */}
          <div 
            className="absolute font-mono leading-none select-none"
            style={{
              width: '140%',
              height: '8%',
              transform: 'rotate(45deg) translateY(-40px)',
              display: 'flex',
              alignItems: 'center',
              fontSize: '13px',
              letterSpacing: '2px',
              color: isDarkMode ? 'rgba(0,217,177,0.9)' : 'rgba(0,217,177,0.85)',
              textShadow: isDarkMode 
                ? '0 0 20px rgba(0,217,177,0.6), 0 0 40px rgba(0,217,177,0.3)'
                : '0 0 15px rgba(0,217,177,0.4), 0 0 30px rgba(0,217,177,0.2)',
              fontWeight: '700',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText1 15s linear infinite',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>← OXYLABS </span>
              ))}
            </div>
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText1 15s linear infinite',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>← OXYLABS </span>
              ))}
            </div>
          </div>
          
          {/* Line 2 - Medium speed */}
          <div 
            className="absolute font-mono leading-none select-none"
            style={{
              width: '140%',
              height: '8%',
              transform: 'rotate(45deg)',
              display: 'flex',
              alignItems: 'center',
              fontSize: '13px',
              letterSpacing: '2px',
              color: isDarkMode ? 'rgba(0,217,177,0.95)' : 'rgba(0,217,177,0.9)',
              textShadow: isDarkMode 
                ? '0 0 25px rgba(0,217,177,0.7), 0 0 50px rgba(0,217,177,0.4)'
                : '0 0 20px rgba(0,217,177,0.5), 0 0 40px rgba(0,217,177,0.3)',
              fontWeight: '700',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText2 20s linear infinite',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>← OXYLABS </span>
              ))}
            </div>
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText2 20s linear infinite',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>← OXYLABS </span>
              ))}
            </div>
          </div>
          
          {/* Line 3 - Slowest */}
          <div 
            className="absolute font-mono leading-none select-none"
            style={{
              width: '140%',
              height: '8%',
              transform: 'rotate(45deg) translateY(40px)',
              display: 'flex',
              alignItems: 'center',
              fontSize: '13px',
              letterSpacing: '2px',
              color: isDarkMode ? 'rgba(0,217,177,0.85)' : 'rgba(0,217,177,0.8)',
              textShadow: isDarkMode 
                ? '0 0 18px rgba(0,217,177,0.55), 0 0 35px rgba(0,217,177,0.28)'
                : '0 0 15px rgba(0,217,177,0.4), 0 0 28px rgba(0,217,177,0.2)',
              fontWeight: '700',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText3 25s linear infinite',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>← OXYLABS </span>
              ))}
            </div>
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText3 25s linear infinite',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>← OXYLABS </span>
              ))}
            </div>
          </div>
          
          {/* LIGHTER STROKE: / (forward slash) TOP-RIGHT to BOTTOM-LEFT - 3 LINES */}
          
          {/* Line 1 - Fastest (reverse) */}
          <div 
            className="absolute font-mono leading-none select-none"
            style={{
              width: '140%',
              height: '8%',
              transform: 'rotate(-45deg) translateY(-40px)',
              display: 'flex',
              alignItems: 'center',
              fontSize: '13px',
              letterSpacing: '2px',
              color: isDarkMode ? 'rgba(132,242,222,0.8)' : 'rgba(132,242,222,0.75)',
              textShadow: isDarkMode
                ? '0 0 18px rgba(132,242,222,0.55), 0 0 38px rgba(132,242,222,0.3)'
                : '0 0 15px rgba(132,242,222,0.4), 0 0 30px rgba(132,242,222,0.22)',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText1 18s linear infinite reverse',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>OXYLABS → </span>
              ))}
            </div>
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText1 18s linear infinite reverse',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>OXYLABS → </span>
              ))}
            </div>
          </div>
          
          {/* Line 2 - Medium speed (reverse) */}
          <div 
            className="absolute font-mono leading-none select-none"
            style={{
              width: '140%',
              height: '8%',
              transform: 'rotate(-45deg)',
              display: 'flex',
              alignItems: 'center',
              fontSize: '13px',
              letterSpacing: '2px',
              color: isDarkMode ? 'rgba(132,242,222,0.85)' : 'rgba(132,242,222,0.8)',
              textShadow: isDarkMode
                ? '0 0 20px rgba(132,242,222,0.6), 0 0 45px rgba(132,242,222,0.35)'
                : '0 0 18px rgba(132,242,222,0.45), 0 0 35px rgba(132,242,222,0.25)',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText2 23s linear infinite reverse',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>OXYLABS → </span>
              ))}
            </div>
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText2 23s linear infinite reverse',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>OXYLABS → </span>
              ))}
            </div>
          </div>
          
          {/* Line 3 - Slowest (reverse) */}
          <div 
            className="absolute font-mono leading-none select-none"
            style={{
              width: '140%',
              height: '8%',
              transform: 'rotate(-45deg) translateY(40px)',
              display: 'flex',
              alignItems: 'center',
              fontSize: '13px',
              letterSpacing: '2px',
              color: isDarkMode ? 'rgba(132,242,222,0.75)' : 'rgba(132,242,222,0.7)',
              textShadow: isDarkMode
                ? '0 0 15px rgba(132,242,222,0.5), 0 0 35px rgba(132,242,222,0.28)'
                : '0 0 13px rgba(132,242,222,0.38), 0 0 28px rgba(132,242,222,0.2)',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            }}
          >
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText3 28s linear infinite reverse',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>OXYLABS → </span>
              ))}
            </div>
            <div style={{ 
              display: 'inline-block', 
              animation: 'scrollText3 28s linear infinite reverse',
              willChange: 'transform',
            }}>
              {Array.from({ length: 100 }, (_, i) => (
                <span key={i}>OXYLABS → </span>
              ))}
            </div>
          </div>
          
          {/* Center intersection HEAVY blur - makes X crossing very clean */}
          <div 
            className="absolute"
            style={{
              width: '450px',
              height: '450px',
              background: isDarkMode
                ? 'radial-gradient(circle, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 30%, transparent 60%)'
                : 'radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 30%, transparent 60%)',
              filter: 'blur(80px)',
              pointerEvents: 'none',
            }}
          />
          
          {/* Center glow where X crosses */}
          <div 
            className="absolute"
            style={{
              width: '320px',
              height: '320px',
              background: isDarkMode
                ? 'radial-gradient(circle, rgba(0,217,177,0.3) 0%, rgba(0,217,177,0.15) 40%, transparent 70%)'
                : 'radial-gradient(circle, rgba(0,217,177,0.22) 0%, rgba(0,217,177,0.1) 40%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex">
        <div
          className={`w-1/2 p-8 font-mono relative z-10 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {/* Theme toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`absolute top-8 right-8 p-2 rounded-full transition-colors ${
              isDarkMode ? "hover:bg-white/10" : "hover:bg-black/10"
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-lg font-normal mb-8">Jaykumar.cv</h1>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">JAYKUMAR MATHUKIYA</h2>
              <h3 className="text-lg font-normal text-cyan-400">CUSTOMER SUCCESS MANAGER</h3>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-12 space-y-2 text-sm">
            <div className="flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span className="w-32">CyberCare</span>
              <span className="text-gray-400">Customer Success Manager</span>
              <span className="text-cyan-400">Jan 2025 → Present</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span className="w-32">Together Romania</span>
              <span className="text-gray-400">Video Editor</span>
              <span className="text-cyan-400">May 2024 → Present</span>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span className="w-32">Vestige Marketing</span>
              <span className="text-gray-400">Salesperson</span>
              <span className="text-cyan-400">Jul 2020 → Aug 2021</span>
            </div>
          </div>

          {/* Education & Stats */}
          <div className="space-y-3 text-sm mb-12">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Bachelor&apos;s in Information Systems & Cybersecurity</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Kaunas, Lithuania</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>22+ Certifications (AWS, Azure, Zendesk, Terraform)</span>
            </div>
          </div>

          {/* Motivation Section */}
          <div className="mt-12 p-6 rounded-lg border border-cyan-400/20 bg-gradient-to-r from-cyan-400/5 to-transparent">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Why Oxylabs & IT Operations?</h3>
            </div>
            <div className="space-y-3 text-sm">
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                <strong className="text-cyan-400">My Goal:</strong> I have a personal dream of building a SaaS company someday.
              </p>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                <strong className="text-cyan-400">The Journey:</strong> I started at CyberCare to learn customer-facing operations first. 
                After 10+ months, I've mastered customer service and achieved 96% satisfaction rates.
              </p>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                <strong className="text-cyan-400">Next Step:</strong> Now I want to understand the internal operations side - 
                managing IT infrastructure, supporting employees, and handling operational workflows.
              </p>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                <strong className="text-cyan-400">Perfect Match:</strong> Oxylabs Junior IT Operations role is exactly what I need 
                to complete my understanding of both customer-facing and internal operations.
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 relative flex items-center justify-center p-8">
          {/* Social Media Links - ClipPathLinks Component - Now on the right side */}
          <div className="w-full max-w-md">
            <ClipPathLinks />
          </div>
        </div>
      </section>

      {/* Job Requirements Section */}
      <section className="relative py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              How I Match Oxylabs Requirements
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Each card represents a job requirement. Hover to flip, click for detailed experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobRequirements.map((req) => (
              <FlipCard
                key={req.id}
                title={req.title}
                description={req.description}
                experience={req.experience}
                icon={req.icon}
                color={req.color}
                onClick={() => handleCardClick(req)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Experience Section */}
      <section className={`relative py-20 px-8 ${isDarkMode ? 'bg-black/30' : 'bg-white/30'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Skills & Experience
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              How my background aligns with the required qualifications. Click each card for details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsAndExperience.map((skill) => (
              <FlipCard
                key={skill.id}
                title={skill.title}
                description={skill.description}
                experience={skill.experience}
                icon={skill.icon}
                color={skill.color}
                onClick={() => handleCardClick(skill)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Requirement Detail Modal */}
      {selectedRequirement && (
        <RequirementDetailModal
          isOpen={isModalOpen}
          onClose={closeModal}
          requirement={selectedRequirement}
        />
      )}

      {/* Work Journey Timeline Section */}
      <section className="relative py-20">
        <div className="relative z-10">
          <WorkTimeline />
        </div>
      </section>
    </main>
  );
}
