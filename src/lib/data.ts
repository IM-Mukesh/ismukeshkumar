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
    category: "Mobile & Full-Stack",
    title: "Library Management App",
    description:
      "Scalable full-stack Android app for libraries with React Native, Node.js, TypeScript, MongoDB and Redis. Supports 70+ libraries and 2300+ students with JWT auth, API rate limiting, and AI-powered search suggestions.",
    tags: ["React Native", "Node.js", "TypeScript", "MongoDB", "Redis"],
    liveUrl: "https://lib-store.s3.eu-north-1.amazonaws.com/lib/library.apk",
  },
  {
    id: "02",
    category: "Full-Stack SaaS",
    title: "RateNStyle",
    description:
      "QR-based salon feedback platform with real-time dashboard analytics and AI sentiment analysis. Collected 350+ reviews from 20+ salons, increasing feedback submission by 60%.",
    tags: ["React", "Node.js", "MongoDB", "Redis", "Google OAuth"],
    liveUrl: "http://salon.beast11.com/",
  },
  {
    id: "03",
    category: "Sports Tech",
    title: "Beast11",
    description:
      "Robust, scalable fantasy cricket platform with team creation, player stats tracking, and real-time score updates.",
    tags: ["TypeScript", "React.js", "Next.js"],
    liveUrl: "https://www.beast11.com/",
  },
  {
    id: "04",
    category: "Frontend Utility",
    title: "Image Compressor",
    description:
      "In-browser image compression tool using HTML5 File APIs. Adjust quality, preview output, and convert between JPG, PNG and WebP — all client-side with no server upload.",
    tags: ["React", "HTML5 File APIs"],
    liveUrl: "https://image.beast11.com",
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
