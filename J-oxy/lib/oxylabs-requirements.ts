// Oxylabs Job Requirements mapped to Jaykumar's LinkedIn Experience

export interface Requirement {
  id: string;
  title: string;
  category: "day-to-day" | "skills";
  description: string;
  yourExperience: string;
  matchLevel: "strong" | "moderate" | "learning";
  proofPoints: string[];
  skills: string[];
  icon: string;
  color: string;
}

export const oxyLabsRequirements: Requirement[] = [
  // DAY-TO-DAY TASKS
  {
    id: "security-tools",
    title: "Managing workplace and security tools",
    category: "day-to-day",
    description: "Experience with security tools, access management, and workplace solutions",
    yourExperience: "At CyberCare, I provide technical support for Nord Security products (NordVPN, NordPass) across multiple operating systems. I troubleshoot VPN connections, security configurations, and help customers implement secure solutions daily.",
    matchLevel: "strong",
    proofPoints: [
      "11 months at CyberCare supporting Nord Security products",
      "Technical support across Windows, macOS, Linux, iOS, Android",
      "Troubleshooting VPN & security tool configurations",
      "Customer Success Manager role handling security-related inquiries"
    ],
    skills: ["Customer Support", "VPN Technology", "Security Tools", "Technical Troubleshooting"],
    icon: "Shield",
    color: "blue"
  },
  {
    id: "service-desk",
    title: "Service Desk tasks and license assignments",
    category: "day-to-day",
    description: "Handling user requests, managing licenses, and providing support",
    yourExperience: "As Customer Success Manager, I handle customer requests via chat and email, manage billing inquiries, and assist with account/subscription management. I've processed hundreds of service requests with focus on quick resolution.",
    matchLevel: "strong",
    proofPoints: [
      "Daily customer service via chat and email",
      "Managing billing and subscription inquiries",
      "Account management and access issues",
      "Zendesk Customer Service Professional Certificate"
    ],
    skills: ["Customer Engagement", "Customer Experience", "Service Desk", "Zendesk"],
    icon: "Headphones",
    color: "green"
  },
  {
    id: "license-audits",
    title: "IT license audits (weekly/monthly/quarterly)",
    category: "day-to-day",
    description: "Track, audit, and maintain software license compliance",
    yourExperience: "While I haven't performed formal IT license audits, I have experience tracking subscriptions and billing for customers, understanding license types, and managing account statuses. Ready to learn audit procedures and compliance tracking.",
    matchLevel: "learning",
    proofPoints: [
      "Experience with subscription management at CyberCare",
      "Understanding of license models (subscription-based SaaS)",
      "Strong organizational skills from managing team of 100+ at Vestige",
      "AWS & Azure certifications show understanding of cloud licensing"
    ],
    skills: ["Organization", "Attention to Detail", "Documentation"],
    icon: "FileCheck",
    color: "purple"
  },
  {
    id: "software-purchasing",
    title: "Purchase requested software",
    category: "day-to-day",
    description: "Evaluate, recommend, and procure software for teams",
    yourExperience: "As a tech-savvy professional studying Information Systems, I actively research and compare software tools. I've worked with various SaaS platforms (Zendesk, CapCut, Nord products) and understand feature evaluation and vendor selection.",
    matchLevel: "moderate",
    proofPoints: [
      "Experience evaluating customer needs and recommending solutions",
      "Familiar with SaaS pricing models from customer support work",
      "Bachelor's in Information Systems (graduating Jan 2026)",
      "Sales background - negotiation and vendor communication skills"
    ],
    skills: ["Research", "Vendor Evaluation", "Decision Making"],
    icon: "ShoppingCart",
    color: "orange"
  },
  {
    id: "troubleshooting",
    title: "Troubleshoot SaaS tool issues",
    category: "day-to-day",
    description: "Diagnose and resolve software problems for users",
    yourExperience: "This is my core strength! At CyberCare, I troubleshoot technical issues daily across multiple operating systems - VPN connections, app crashes, configuration problems, and integration issues. I excel at diagnosing problems and providing clear solutions.",
    matchLevel: "strong",
    proofPoints: [
      "11 months of daily technical troubleshooting at CyberCare",
      "Multi-platform support (Windows, macOS, Linux, iOS, Android)",
      "Zendesk Customer Service Professional Certificate",
      "Built reputation for turning customers into brand advocates"
    ],
    skills: ["Technical Support", "Problem Solving", "Debugging", "Customer Support"],
    icon: "Wrench",
    color: "red"
  },

  // SKILLS & EXPERIENCES
  {
    id: "experience",
    title: "1+ year technical support experience",
    category: "skills",
    description: "At least 1 year in similar position or technical support role",
    yourExperience: "✅ 11 months as Customer Success Manager at CyberCare providing technical support for Nord Security products. Daily troubleshooting, customer engagement, and technical problem-solving.",
    matchLevel: "strong",
    proofPoints: [
      "11 months at CyberCare (Jan 2025 - Present)",
      "Technical support across multiple platforms",
      "Customer Success Manager role",
      "Zendesk certified"
    ],
    skills: ["Customer Support", "Technical Troubleshooting", "Customer Experience"],
    icon: "Briefcase",
    color: "cyan"
  },
  {
    id: "english",
    title: "Strong knowledge of English",
    category: "skills",
    description: "Professional English communication skills",
    yourExperience: "✅ Fluent English - I provide daily customer support in English via chat and email. Studying at Vilnius University in English. Clear written and verbal communication with international customers.",
    matchLevel: "strong",
    proofPoints: [
      "Daily English communication at CyberCare",
      "University education in English (Vilnius University)",
      "International customer base support",
      "Professional written communication (chat & email)"
    ],
    skills: ["English", "Communication", "Written Communication"],
    icon: "Languages",
    color: "indigo"
  },
  {
    id: "organization",
    title: "Organizational & problem-solving skills",
    category: "skills",
    description: "Strong organizational abilities and analytical thinking",
    yourExperience: "✅ Proven organizational skills - managed team of 100+ people (45 direct reports) at Vestige Marketing. At CyberCare, I manage multiple customer inquiries simultaneously while maintaining quality and efficiency.",
    matchLevel: "strong",
    proofPoints: [
      "Led team of 100+ at Vestige Marketing",
      "Managing multiple customer cases simultaneously",
      "15-20% monthly sales growth through organized approach",
      "Balancing university studies with full-time work"
    ],
    skills: ["Organization", "Problem Solving", "Time Management", "Team Leadership"],
    icon: "ListChecks",
    color: "yellow"
  },
  {
    id: "tech-interest",
    title: "Tech-savvy & interest in IT/AI",
    category: "skills",
    description: "Constant interest in up-to-date IT technologies and AI news",
    yourExperience: "✅ Highly tech-savvy - Bachelor's in Information Systems & Cybersecurity, AWS & Azure certified, 22+ tech certifications. Actively learning DevOps, Cloud Computing, and following AI developments. Hands-on with Terraform, cloud platforms, and modern tech stack.",
    matchLevel: "strong",
    proofPoints: [
      "Bachelor's in Information Systems & Cybersecurity (graduating 2026)",
      "AWS Certified Cloud Practitioner",
      "Azure AZ-900 Fundamentals",
      "22+ total certifications in tech",
      "DevOps & Cloud Computing skills",
      "Video editing with modern tools (CapCut)"
    ],
    skills: ["AWS", "Azure", "Cloud Computing", "DevOps", "Continuous Learning"],
    icon: "Brain",
    color: "pink"
  },
  {
    id: "communication",
    title: "Friendly & excellent communication",
    category: "skills",
    description: "Friendly and helpful personality with excellent communication skills",
    yourExperience: "✅ Excellent communicator - Known for turning customers into brand advocates at CyberCare. Sales background with proven ability to build relationships. Helpful, patient, and friendly approach in every interaction.",
    matchLevel: "strong",
    proofPoints: [
      "Customer Success Manager - relationship building focus",
      "Turning customers into brand advocates",
      "Sales background with team leadership",
      "Positive customer interactions via chat & email",
      "Collaborative work in NGO (Together Romania)"
    ],
    skills: ["Communication", "Customer Engagement", "Relationship Building", "Empathy"],
    icon: "MessageCircle",
    color: "teal"
  },
  {
    id: "tools",
    title: "Jira Service Management, Google Sheets",
    category: "skills",
    description: "Experience with service desk and productivity tools",
    yourExperience: "🟡 Partial match - Experienced with Zendesk (similar to Jira), proficient in Google Workspace tools. Ready to quickly learn Jira Service Management as it shares similar ticketing system concepts.",
    matchLevel: "moderate",
    proofPoints: [
      "Zendesk Customer Service Professional Certificate",
      "Daily use of ticketing systems at CyberCare",
      "Familiar with Google Workspace ecosystem",
      "Quick learner with new software tools"
    ],
    skills: ["Zendesk", "Ticketing Systems", "Google Workspace", "SaaS Tools"],
    icon: "LayoutGrid",
    color: "slate"
  },
  {
    id: "initiative",
    title: "Work independently & take initiative",
    category: "skills",
    description: "Able to work on your own and take the initiative",
    yourExperience: "✅ Self-starter - Freelance video editor, managed remote work at CyberCare (hybrid), led team independently at Vestige. Proactive in learning new skills (22 certifications) and taking on challenges.",
    matchLevel: "strong",
    proofPoints: [
      "Freelance video editor - self-managed projects",
      "Remote/hybrid work experience",
      "Led team of 100+ independently",
      "Self-directed learning (22 certifications)",
      "Proactive in skill development"
    ],
    skills: ["Self-Management", "Initiative", "Independence", "Leadership"],
    icon: "Rocket",
    color: "violet"
  },
  {
    id: "learning",
    title: "Willingness to learn & grasp concepts",
    category: "skills",
    description: "Strong willingness to learn skills and grasp new concepts",
    yourExperience: "✅ Continuous learner - 22+ certifications in tech (AWS, Azure, Terraform, Zendesk, etc.). Currently pursuing Bachelor's degree while working full-time. Always seeking new knowledge and skills in IT, cloud, and cybersecurity.",
    matchLevel: "strong",
    proofPoints: [
      "22+ professional certifications",
      "Full-time work + university studies simultaneously",
      "AWS, Azure, Terraform certifications",
      "Bachelor's in Information Systems & Cybersecurity",
      "Constantly expanding tech skill set"
    ],
    skills: ["Continuous Learning", "Adaptability", "Growth Mindset", "Self-Development"],
    icon: "GraduationCap",
    color: "emerald"
  }
];

// Summary stats
export const profileSummary = {
  name: "Jaykumar Mathukiya",
  currentRole: "Customer Success Manager @ CyberCare",
  location: "Kaunas, Lithuania",
  education: "Bachelor's in Information Systems & Cybersecurity (Vilnius University)",
  graduationDate: "Jan 2026",
  totalCertifications: 22,
  keySkills: [
    "Customer Support",
    "Technical Troubleshooting", 
    "AWS",
    "Azure",
    "Cloud Computing",
    "DevOps",
    "Team Leadership"
  ],
  strongMatches: 10,
  moderateMatches: 2,
  learningAreas: 1
};
