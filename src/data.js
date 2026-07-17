export const profile = {
  name: "Nasroon Fareeha",
  role: "Software Engineer",
  location: "Oluvil, Sri Lanka",
  email: "nasroonmahi@gmail.com",
  phone: "+94 70 483 2938",
  linkedin: "https://linkedin.com/in/nasroon-fareeha",
  github: "https://github.com/Nasroon0108",
  availability: "Immediate · Remote & Hybrid",
  photo: "/photo.jpg", // place your photo at public/photo.jpg
  summary:
    "Full-Stack Software Engineer and Computer Science graduate shipping production-ready systems end-to-end. I architect secure multi-tenant platforms with Laravel and React, and I build ML/NLP research on the side.",
  headline: [
    "I build",
    "production systems",
    "end to end.",
  ],
};

export const stats = [
  { value: "~95%", label: "ABSA accuracy" },
  { value: "3-tier", label: "RBAC layers" },
  { value: "SDLC", label: "Owned solo" },
  { value: "2026", label: "CS Graduate" },
];

export const skills = [
  {
    group: "Languages",
    items: ["PHP 8.2+", "JavaScript (ES6+)", "Java", "SQL", "HTML5", "CSS3", "Dart", "Python"],
  },
  {
    group: "Backend",
    items: ["Laravel 12.x", "Node.js", "REST API Design", "JWT Auth", "Multi-Tenancy", "RBAC", "Middleware"],
  },
  {
    group: "Frontend",
    items: ["React 19", "Tailwind CSS 4", "Bootstrap 5", "Vite", "React Router DOM", "SPA", "Responsive Design"],
  },
  {
    group: "Mobile",
    items: ["Flutter", "Dart", "Android Studio"],
  },
  {
    group: "Databases",
    items: ["MySQL", "Relational DB Design", "Schema Optimization", "Data Modeling"],
  },
  {
    group: "ML / NLP",
    items: ["HuggingFace Transformers", "DistilBERT", "TensorFlow", "Keras", "Sentiment Analysis"],
  },
  {
    group: "Libraries",
    items: ["Axios", "Recharts", "jsPDF", "SheetJS", "SweetAlert2", "Lucide React"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Agile", "SDLC"],
  },
];

export const experience = [
  {
    company: "AI GENERIX",
    role: "Software Engineering Intern",
    subtitle: "Full-Stack Developer — GenX Accounts",
    location: "Sri Lanka",
    period: "Oct 2025 — Apr 2026",
    bullets: [
      "Sole developer of a production-ready multi-tenant accounting system, independently owning the full SDLC from architecture through deployment.",
      "Built a secure RESTful API with Laravel 12.x and JWT authentication, applying middleware-driven validation and a normalized MySQL schema for strict tenant data isolation.",
      "Developed a responsive React 19 SPA using Vite, Tailwind CSS 4.x, and React Router DOM for a seamless cross-device experience.",
      "Implemented three-tier RBAC (Super Admin, Admin, User) enforced at both API and UI layers, and integrated one-click PDF/Excel exports with real-time Recharts dashboards.",
    ],
  },
];

export const research = [
  {
    title: "Aspect-Based Sentiment Analysis for Sri Lankan Tourism Reviews",
    org: "South Eastern University of Sri Lanka",
    period: "2026",
    kind: "Undergraduate Thesis",
    bullets: [
      "Designed and implemented a fine-grained ABSA framework for tourism-domain reviews using a fine-tuned DistilBERT model.",
      "Achieved ~95% accuracy in aspect-level sentiment classification across multi-lingual review datasets.",
      "Applied HuggingFace Transformers, Python, and TensorFlow/Keras across the full ML pipeline — from preprocessing to evaluation.",
    ],
  },
];

export const projects = [
  {
    idx: "01",
    title: "Multi-Tenant Accounting System",
    tagline: "Production-grade accounting SaaS with isolated workspaces.",
    org: "AI GENERIX",
    stack: ["Laravel 12", "PHP 8.2+", "React 19", "Tailwind CSS 4", "MySQL", "JWT", "Vite"],
    description:
      "A production-grade accounting SaaS that lets multiple companies manage their finances in fully isolated workspaces under a single, secure platform.",
    highlights: [
      "Scalable multi-tenant platform with isolated company branches, chart of accounts, and financial data.",
      "Dynamic reporting engine with real-time financial statements, interactive dashboards, one-click PDF/Excel exports.",
    ],
    link: null,
    year: "2025—2026",
  },
  {
    idx: "02",
    title: "Health & Fitness Mobile App",
    tagline: "Cross-platform wellness companion with AI guidance.",
    org: "Group Project",
    stack: ["Flutter", "Dart", "Android Studio"],
    description:
      "A cross-platform mobile wellness companion that helps users plan workouts, track nutrition and hydration, and get AI-driven fitness guidance.",
    highlights: [
      "Personalized workout plans, nutrition tracking, hydration logging.",
      "AI-powered chat assistant integrated for real-time fitness guidance.",
    ],
    link: "https://github.com/udarahansani/fitness_app",
    year: "2025",
  },
  {
    idx: "03",
    title: "Simple Blog Website",
    tagline: "Lightweight PHP/MySQL content-publishing platform.",
    org: "Solo Project",
    stack: ["PHP", "MySQL", "Bootstrap 5"],
    description:
      "A lightweight content-publishing platform where registered users can securely create, manage, and publish blog posts.",
    highlights: [
      "Responsive blog platform with PHP/MySQL backend.",
      "Secure user authentication and server-side form validation.",
    ],
    link: "https://github.com/Nasroon0108/bootstrap",
    year: "2024",
  },
  {
    idx: "04",
    title: "Postgraduate Studies Website",
    tagline: "Official multi-page faculty website for SEUSL.",
    org: "Group Project",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    description:
      "The official informational website for a university faculty, presenting academic programs, staff, and department updates.",
    highlights: [
      "Multi-page faculty website for the Faculty of Applied Sciences, SEUSL.",
      "Responsive layout with dynamic UI components.",
    ],
    link: "https://github.com/Nasroon0108/PGU-Website",
    year: "2024",
  },
];

export const education = [
  {
    degree: "BSc (Hons) in Computer Science",
    school: "South Eastern University of Sri Lanka, Oluvil",
    period: "2022 — 2026",
  },
];

export const certifications = [
  { name: "Front-End Web Development", issuer: "University of Moratuwa", year: "2025" },
  { name: "Project Management Foundation", issuer: "LinkedIn Learning", year: "2025" },
  { name: "IEEE Student Membership", issuer: "IEEE", year: "2025" },
];

export const additional = {
  soft: ["Independent Problem-Solving", "Communication", "Team Collaboration", "Critical Thinking", "Adaptability", "Quick Learner"],
  languages: ["English", "Tamil", "Sinhala"],
  volunteering: "Assistant Secretary — IEEE WIE Student Branch Affinity Group, SEUSL (2025)",
};

export const marqueeWords = [
  "Full-Stack", "Laravel", "React", "MySQL", "JWT", "Multi-Tenant",
  "DistilBERT", "TensorFlow", "Flutter", "Available for hire",
];
