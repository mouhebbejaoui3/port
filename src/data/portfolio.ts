export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  role: string;
  period: string;
  description: string[];
  tags: string[];
  slug: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  location: string;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}

export const siteConfig = {
  name: "Mouheb Bejaoui",
  initials: "MB",
  title: "Engineering Student, Data Science & Artificial Intelligence",
  location: "Tunisia",
  email: "mouheb.bejaoui.3@gmail.com",
  phone: "+216 21 170 110",
  tagline: "Building intelligent systems from data to deployment.",
  summary:
    "Engineering student specializing in Data Science and Artificial Intelligence, seeking a 6-month end-of-studies internship (PFE) in France starting in 2027. Strong interest in machine learning, AI, and data analysis, with experience in Python and data-related technologies. Motivated to apply technical skills to real-world projects and contribute to an innovative team.",
  badge: "Open to PFE internship in France, 2027",
  roles: [
    "Data Science Engineer",
    "AI Enthusiast",
    "Full Stack Developer",
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/mouheb-bejaoui-3b5734326/",
    github: "https://github.com/mouhebbejaoui3",
  },
  cvUrl: "/cv.pdf",
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python", level: 92 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 75 },
      { name: "C/C++", level: 70 },
    ],
  },
  {
    title: "AI / Deep Learning",
    icon: "Brain",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "NLP", level: 78 },
      { name: "Computer Vision", level: 75 },
    ],
  },
  {
    title: "Data Science & ML",
    icon: "BarChart3",
    skills: [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 90 },
      { name: "Scikit-learn", level: 88 },
      { name: "Matplotlib", level: 85 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 78 },
      { name: "Azure", level: 70 },
      { name: "Linux", level: 82 },
    ],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Microservices E-Commerce Platform",
    role: "Full Stack Developer",
    period: "01/2026 – 03/2026",
    slug: "microservices-ecommerce",
    description: [
      "Architected a full-stack, event-driven e-commerce platform using a Turborepo microservices monorepo with Next.js 15, Fastify, and TypeScript.",
      "Polyglot persistence: PostgreSQL + Prisma (product catalog) and MongoDB + Mongoose (order lifecycle).",
      "Integrated Apache Kafka for asynchronous, event-driven communication.",
      "Secure authentication and RBAC with Clerk; end-to-end checkout with Stripe API.",
      "Containerized services with Docker; client-side state persistence with Zustand.",
    ],
    tags: [
      "Next.js",
      "Fastify",
      "TypeScript",
      "Kafka",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Stripe",
      "Clerk",
    ],
  },
  {
    title: "Environmental Education App with Edge AI",
    role: "Mobile & AI Application Developer",
    period: "10/2025 – 12/2025",
    slug: "flutter-edge-ai",
    description: [
      "Cross-platform environmental educational app with Flutter/Dart (mobile + desktop).",
      "5 interactive simulation levels with CustomPainter (real-time particles and physics).",
      "Local AI chatbot running quantized GGUF LLMs via a lightweight Python FastAPI backend.",
      "Offline authentication and data persistence with SQLite.",
      "Glassmorphic UI with backdrop filters, audio-visual feedback, and Python asset automation.",
    ],
    tags: ["Flutter", "Dart", "FastAPI", "GGUF LLM", "SQLite", "Edge AI"],
  },
];

export const experiences: Experience[] = [
  {
    company: "ONT – Office National de la Télédiffusion",
    role: "Intern",
    period: "06/2026 – 08/2026",
    description: [
      "Studied digital broadcasting technologies including FM and DAB+.",
      "Analyzed the DAB+ chain and HE-AAC v2 audio encoding.",
      "Explored audiovisual signal transmission systems.",
      "Examined data-center infrastructure and virtualization.",
      "Prepared technical documentation and analysis reports.",
    ],
  },
  {
    company: "Tunisie Telecom",
    role: "Intern",
    period: "06/2026 – 07/2026",
    description: [
      "Discovered the operations of a telecom commercial center.",
      "Observed customer reception, service requests, and the range of services offered.",
    ],
  },
  {
    company: "La Poste Tunisienne",
    role: "Seasonal Employee",
    period: "05/2024 – 08/2024",
    description: [
      "Served citizens at the counter, handling requests and daily transactions.",
      "Worked under pressure in a high-volume environment.",
      "Developed communication, organization, and customer-service skills.",
    ],
  },
];

export const education: Education[] = [
  {
    period: "2024 – Present",
    degree: "Engineering Degree in Data Science & Artificial Intelligence",
    institution: "SESAME",
    location: "Tunis",
  },
  {
    period: "2022 – 2024",
    degree: "Preparatory Cycle (PC)",
    institution: "IPEIT",
    location: "Tunis",
  },
];

export const languages: Language[] = [
  { name: "Arabic", level: "Native", percentage: 100 },
  { name: "English", level: "C1", percentage: 85 },
  { name: "French", level: "B2", percentage: 72 },
  { name: "German", level: "B1", percentage: 55 },
];

export const interests = [
  "Artificial Intelligence & Emerging Technologies",
  "Telecommunications",
  "Technology & Innovation",
  "Digital Transformation",
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Languages", href: "#languages" },
  { label: "Contact", href: "#contact" },
];
