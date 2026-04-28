export type SkillGroup = {
  title:
    | "Languages"
    | "Frontend"
    | "Backend"
    | "Database"
    | "Tools"
    | "CS Fundamentals"
    | "Currently Learning";
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
  title: "CSE Student & Aspiring Full-Stack Developer",
  role: "Computer Science & Engineering Student",
  intro:
    "Building modern web applications and learning scalable software development.",
  email: "affifchowdhury96@gmail.com",
  github: "https://github.com/Piooooooo",
  linkedin: "https://www.linkedin.com/in/affif-c-5453a9252",
  instagram: "#",
  facebook: "#",
  website: "#",
  location: "Bangladesh",
  university: "United International University",
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
    items: ["Node.js", "Express.js", "REST API", "API Design"],
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
  {
    title: "Currently Learning",
    items: ["Next.js", "GraphQL", "Docker", "System Design"],
  },
];

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A polished developer portfolio showcasing skills, projects, and a modern interface designed for internship-ready presentation.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    title: "Student Management System",
    description:
      "A full-stack academic platform for managing student records, attendance, and dashboards for students and faculty.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    title: "AI Study Assistant",
    description:
      "An AI-driven study tool that summarizes notes, generates quizzes, and supports adaptive learning workflows.",
    stack: ["Next.js", "OpenAI API", "Tailwind CSS"],
    githubLink: "#",
    liveDemoLink: "#",
  },
  {
    title: "GitHub Activity Dashboard",
    description:
      "A dashboard that visualizes coding activity, repository insights, and contribution trends across GitHub.",
    stack: ["React", "GitHub API", "Chart.js"],
    githubLink: "#",
    liveDemoLink: "#",
  },
];

export const education = {
  degree: "B.Sc. in Computer Science & Engineering",
  institution: "United International University",
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
