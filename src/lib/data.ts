// Single source of truth for all portfolio content.
// Edit this file to make the site yours — no need to touch components.

export const profile = {
  name: "Mukesh Kumar",
  firstName: "Mukesh",
  role: "Full-Stack, Frontend & React Native Developer",
  taglines: ["FULL-STACK DEVELOPER", "FRONTEND ENGINEER", "REACT NATIVE DEVELOPER"],
  kicker: [
    "Building scalable full-stack products",
    "Crafting fast, intuitive interfaces",
    "Shipping cross-platform mobile apps",
  ],
  heroSubtitle:
    "Freelance developer with 3+ years of industry experience. Open to new opportunities — remote or on-site, anywhere.",
  avatar: "/avatar.png",
  status: "Open to Opportunities",
  region: "Remote / Anywhere",
  phone: "+91 87890 67634",
  email: "mukeshk0326@gmail.com",
  resumeUrl: "/resume-fullstack.pdf",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ismukeshkumar" },
    { label: "LeetCode", href: "https://leetcode.com/u/Mukesh6877/" },
    { label: "Resume (Full-Stack)", href: "/resume-fullstack.pdf" },
    { label: "Resume (Frontend/RN)", href: "/resume-frontend-rn.pdf" },
  ],
  bio: "A full-stack, frontend & React Native developer with 3+ years of industry experience building scalable, high-performance web and mobile applications. Currently freelancing across the stack — from React and React Native interfaces to Node.js and MongoDB-backed APIs — with hands-on experience integrating Generative and Agentic AI into production products. Open to new opportunities, remote or on-site, anywhere.",
  highlights: [
    { title: "3+ Yrs", subtitle: "Industry Experience" },
    { title: "Full-Stack", subtitle: "MERN + React Native" },
    { title: "Freelance", subtitle: "Open to Work" },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    label: "Languages & Frameworks",
    skills: ["JavaScript", "TypeScript", "Python", "React", "React Native", "Next.js", "Redux", "Zustand"],
  },
  {
    label: "Frontend",
    skills: ["Tailwind CSS", "Material UI", "Styled Components", "HTML", "CSS", "SASS"],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets", "JWT", "Google OAuth"],
  },
  {
    label: "Data & Infra",
    skills: ["MongoDB", "PostgreSQL", "DynamoDB", "Redis", "Docker", "AWS (EC2, Lambda, S3, CloudFront, RDS)", "Google Cloud Platform"],
  },
  {
    label: "AI / Agentic Systems",
    skills: ["OpenAI API", "LLM Integration", "Agentic AI", "RAG Pipelines", "Semantic Search", "Prompt Engineering"],
  },
  {
    label: "Tools & Testing",
    skills: ["Git/GitHub", "Bitbucket", "Postman", "Jest", "Cypress", "CI/CD", "Vercel", "Netlify", "Firebase", "Expo"],
  },
];

export const roadmap = [
  {
    year: "2022",
    title: "Joined Borderfree Technologies",
    description:
      "Full-stack & frontend developer building live-streaming commerce and creator tools with Node.js, React and React Native.",
  },
  {
    year: "2024",
    title: "Full-Stack Bootcamp at Heycoach",
    description:
      "8-month intensive program mastering DSA, system design, and Gen AI integrations — solved 500+ DSA problems.",
  },
  {
    year: "2025",
    title: "Started Freelancing",
    description:
      "Freelance full-stack, frontend & React Native developer, shipping products end-to-end for clients.",
  },
  {
    year: "2026",
    title: "Open to New Opportunities",
    description:
      "Looking to bring full-stack, mobile and Agentic AI expertise to a high-impact team.",
  },
];

export const projects = [
  {
    id: "01",
    category: "Full-Stack SaaS",
    title: "HeroTyping",
    description:
      "Free online typing speed test with structured lessons, weak-key practice, vocabulary training, and typing games. Tracks Gross WPM, Net WPM, accuracy, and consistency — no account required.",
    tags: ["Next.js", "React", "TypeScript"],
    liveUrl: "https://herotyping.com",
  },
  {
    id: "02",
    category: "Full-Stack SaaS",
    title: "Site Radar",
    description:
      "Website intelligence tool — drop in any URL and get a full breakdown of traffic estimates, SEO issues, and site health, all in one report.",
    tags: ["Next.js", "React", "Node.js"],
    liveUrl: null,
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta / Coursera",
    year: "2024",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    year: "2025",
  },
];
