export type SkillGroup = {
  title:
    | "Languages"
    | "Frontend"
    | "Backend"
    | "Database"
    | "Tools"
    | "CS Fundamentals";
  items: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  githubLink: string;
  liveDemoLink: string;
};

export const profile = {
  name: "Affif Chowdhury",
  role: "Computer Science & Engineering Student",
  intro:
    "I build reliable, user-focused web applications and enjoy solving meaningful problems through clean engineering practices, full-stack development, and continuous learning.",
  email: "alex.rahman.dev@gmail.com",
  github: "https://github.com/alexrahman",
  linkedin: "https://www.linkedin.com/in/alexrahman-dev",
  location: "Chattogram, Bangladesh",
  resumeLink: "#",
  contactLink: "#contact",
};

export const about =
  "I am a Computer Science and Engineering undergraduate with a strong interest in software engineering, full-stack development, and practical problem solving. I enjoy turning ideas into scalable products, collaborating in teams, and writing maintainable code that delivers clear user value.";

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API"],
  },
  {
    title: "Database",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Linux"],
  },
  {
    title: "CS Fundamentals",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AI Study Assistant",
    description:
      "An AI-powered learning companion that summarizes lecture notes, generates adaptive quizzes, and creates personalized study plans for improved exam preparation.",
    stack: ["Next.js", "OpenAI API", "Tailwind CSS"],
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    title: "Student Management System",
    description:
      "A full-stack academic platform for managing student records, attendance, and course workflows with secure role-based dashboards.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    title: "Online Course Platform",
    description:
      "A scalable e-learning platform with instructor course publishing, student progress tracking, and secure enrollment management.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    title: "Competitive Programming Tracker",
    description:
      "A performance analytics dashboard that tracks coding contest activity, rating trends, and problem-solving consistency over time.",
    stack: ["React", "Firebase", "Chart.js"],
    githubLink: "#",
    liveDemoLink: "#",
  },
];

export const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  institution: "Your University Name",
  duration: "2022 - 2026",
  details:
    "Focused on software engineering, algorithms, databases, and modern web development, with active participation in project-based learning and technical communities.",
};

export const experiences = [
  {
    title: "Web Development Lead, CSE Club",
    duration: "2024 - Present",
    points: [
      "Mentored junior students on React fundamentals and collaborative Git workflows through hands-on sessions.",
      "Coordinated a student development team to deliver event websites for university technical programs.",
      "Introduced reusable UI patterns that improved consistency and reduced delivery time across projects.",
    ],
  },
  {
    title: "Junior Project Contributor, Hackathon Team",
    duration: "2023 - 2024",
    points: [
      "Collaborated on full-stack prototypes in fast-paced hackathon environments under tight deadlines.",
      "Implemented authentication flows, API integrations, and responsive UI modules.",
      "Presented technical demos and documented architecture decisions for team handover.",
    ],
  },
];
