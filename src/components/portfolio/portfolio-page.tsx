"use client";

import {
  about,
  education,
  experiences,
  profile,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaJava,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import {
  SiC,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

const techIcons = [
  { label: "C", Icon: SiC },
  { label: "C++", Icon: SiCplusplus },
  { label: "Java", Icon: FaJava },
  { label: "Python", Icon: SiPython },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "React", Icon: SiReact },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "MongoDB", Icon: SiMongodb },
  { label: "MySQL", Icon: SiMysql },
  { label: "Git", Icon: SiGit },
  { label: "GitHub", Icon: SiGithub },
  { label: "Vercel", Icon: SiVercel },
];

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-7 sm:mb-8">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-300/90">
        {subtitle}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 border-b border-white/10 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/40 backdrop-blur-md"
          : "bg-slate-950/65 backdrop-blur-xl"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <a href="#" className="text-sm font-semibold tracking-wide text-white">
          {profile.name}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-slate-300 transition-colors hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeLink}
            className="ml-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-sm font-medium text-cyan-100 transition-all hover:border-cyan-200/60 hover:bg-cyan-200/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          >
            View Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
        >
          <span className="text-lg leading-none">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="border-t border-white/10 bg-slate-950/95 md:hidden"
            id="mobile-nav-menu"
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col px-5 py-4 sm:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-white/5 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumeLink}
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl border border-cyan-200/30 bg-cyan-200/10 px-3 py-2 text-sm font-medium text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  const floatingSnippets = [
    `const engineer = "${profile.name}";`,
    'build({ stack: "full-stack" });',
    "while (learning) solve(problem);",
  ];

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden bg-transparent px-0 py-0 min-h-screen"
      aria-labelledby="hero-heading"
    >
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 right-0 h-64 w-64 rounded-full bg-cyan-400/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -16, 0], y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-teal-500/20 blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(110deg,rgba(56,189,248,0.12),rgba(45,212,191,0.08),transparent_70%)]"
      />

      <div className="content-container relative z-10 pt-8 sm:pt-10 lg:pt-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-100"
            >
              Available for internships
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.45 }}
              className="space-y-5"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">
                Hello, I&apos;m
              </p>
              <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8">
                <motion.img
                  src="/profile.png"
                  alt="Profile picture of Affif Chowdhury"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25, duration: 0.45 }}
                  className="h-24 w-24 rounded-full border-2 border-cyan-200/40 shadow-lg object-cover lg:h-32 lg:w-32 flex-shrink-0"
                />
                <h1
                  id="hero-heading"
                  className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-5xl"
                >
                  {profile.name}
                </h1>
              </div>
              <p className="text-lg font-semibold text-cyan-100/90 sm:text-xl">
                {profile.title}
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                {profile.intro}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  {profile.university}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.45 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:justify-start"
            >
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-cyan-300 to-teal-300 px-5 py-3 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              >
                View Projects
              </a>
              <a
                href={profile.resumeLink}
                className="rounded-full border border-white/15 bg-slate-950/80 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300 hover:bg-slate-900/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36, duration: 0.45 }}
              className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start"
            >
              {techIcons.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-slate-200 transition duration-300 hover:border-cyan-300/40 hover:bg-slate-900/90"
                  aria-label={label}
                  title={label}
                >
                  <Icon className="h-5 w-5" />
                </div>
              ))}
            </motion.div>
          </div>

            <div className="flex justify-center lg:justify-end">
              <div className="space-y-4">
                {floatingSnippets.map((snippet, index) => (
                  <motion.div
                    key={snippet}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0, y: [0, -14, 6, -8, 0] }}
                    transition={{
                      opacity: { delay: 0.3 + index * 0.08, duration: 0.45 },
                      x: { delay: 0.3 + index * 0.08, duration: 0.45 },
                      y: {
                        delay: 0.5 + index * 0.12,
                        duration: 5 + index * 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{ y: -6 }}
                    className="chat-bubble"
                  >
                    <pre className="chat-pre">{snippet}</pre>
                  </motion.div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </motion.section>
  );
}

function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="glass-card section-anchor"
    >
      <div className="content-container">
        <SectionHeading title="About Me" subtitle="Introduction" />
        <p className="text-base leading-relaxed text-slate-200">{about}</p>
      </div>
    </motion.section>
  );
}

function SkillsSection() {
  return (
    <motion.section
      id="skills"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      className="glass-card section-anchor"
    >
      <div className="content-container">
        <SectionHeading title="Skills" subtitle="Technical Stack" />
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          A focused toolkit built through coursework, projects, and continuous
          practice across full-stack engineering and core computer science.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -2 }}
              className="group relative overflow-hidden rounded-md bg-transparent p-5 transition-colors duration-300"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-white">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, badgeIndex) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.06 + badgeIndex * 0.03,
                    }}
                    whileHover={{ scale: 1.04 }}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55 }}
      className="glass-card section-anchor"
    >
      <div className="content-container">
        <SectionHeading title="Projects" subtitle="Featured Work" />
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          A curated set of projects designed to highlight full-stack
          development, user-facing polish, and engineering skills that are a
          strong fit for internships and early career roles.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-md bg-transparent p-6 transition-colors duration-300"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  0{index + 1}
                </span>
                <span className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  Featured Project
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white transition-colors group-hover:text-cyan-200">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cyan-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code on GitHub`}
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-100 transition-all duration-300 hover:border-cyan-300/60 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                >
                  View Code
                </a>
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  className="rounded-full bg-gradient-to-r from-cyan-300 to-teal-300 px-4 py-2 text-xs font-semibold text-slate-900 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                >
                  Live Preview
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function EducationSection() {
  return (
    <motion.section
      id="education"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="glass-card section-anchor"
    >
      <div className="content-container">
        <SectionHeading title="Education" subtitle="Academic Background" />
        <div className="rounded-md bg-transparent p-6">
          <h3 className="text-xl font-semibold text-white">
            {education.degree}
          </h3>
          <p className="mt-2 text-cyan-200">{education.institution}</p>
          <p className="mt-1 text-sm text-slate-400">{education.duration}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            {education.details}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="glass-card section-anchor"
    >
      <div className="content-container">
        <SectionHeading title="Experience & Leadership" subtitle="Impact" />
        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="rounded-md bg-transparent p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">
                  {experience.title}
                </h3>
                <span className="text-sm text-cyan-200">
                  {experience.duration}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function ContactSection() {
  const socialLinks = [
    {
      label: "Email",
      href: "mailto:affifchowdhury96@gmail.com",
      icon: FiMail,
    },
    {
      label: "GitHub",
      href: "https://github.com/Piooooooo",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/affif-c-5453a9252",
      icon: FaLinkedin,
    },
    {
      label: "Instagram",
      href: "#",
      icon: FaInstagram,
    },
    {
      label: "Facebook",
      href: "#",
      icon: FaFacebook,
    },
  ];

  return (
    <motion.section
      id="contact"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="glass-card section-anchor"
    >
      <div className="content-container">
        <SectionHeading title="Contact" subtitle="Let's Connect" />
        <div className="flex justify-center">
          <div className="w-full max-w-2xl rounded-md bg-transparent px-6 py-6 text-center sm:px-8 sm:py-8">
            <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-7 text-slate-300">
              Have a project, opportunity, or collaboration in mind? Feel free
              to reach out.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-slate-200 transition duration-300 hover:scale-105 hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                  <span className="absolute -bottom-7 left-1/2 w-max -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-950/95 px-2 py-1 text-[0.65rem] uppercase tracking-[0.28em] text-slate-300 opacity-0 transition duration-300 group-hover:opacity-100">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function GitHubContributionsSection() {
  const [githubStats, setGithubStats] = useState<{
    public_repos: number;
    followers: number;
    updated_at: string;
  } | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Piooooooo")
      .then((response) => response.json())
      .then((data) => {
        if (!data.message) {
          setGithubStats({
            public_repos: data.public_repos || 0,
            followers: data.followers || 0,
            updated_at: data.updated_at || new Date().toISOString(),
          });
        }
      })
      .catch(() => undefined);
  }, []);

  const lastActive = githubStats
    ? new Date(githubStats.updated_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Loading...";

  return (
    <motion.section
      id="github"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="glass-card section-anchor"
    >
      <div className="content-container">
        <SectionHeading title="GitHub Activity" subtitle="Coding Activity" />
        <p className="mb-6 text-sm leading-relaxed text-slate-300">
          A live view of my open-source contribution rhythm and developer
          activity.
        </p>

        <div className="space-y-5">
          <div className="overflow-x-auto rounded-md bg-transparent p-5 sm:p-6">
            <div className="flex justify-center py-4">
              <GitHubCalendar username="Piooooooo" colorScheme="dark" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-md bg-transparent p-5 text-slate-200">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                Repositories
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">
                {githubStats ? githubStats.public_repos : "--"}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Public repositories available on GitHub.
              </p>
            </div>

            <div className="rounded-md bg-transparent p-5 text-slate-200">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                Profile Activity
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">
                {githubStats ? lastActive : "Loading..."}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Last update on GitHub profile data.
              </p>
            </div>

            <div className="rounded-md bg-transparent p-5 text-slate-200">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                Followers
              </p>
              <p className="mt-4 text-3xl font-semibold text-white">
                {githubStats ? githubStats.followers : "--"}
              </p>
              <p className="mt-2 text-sm text-slate-400">
                Community engagement on GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="pb-12 pt-2 text-center text-sm text-slate-400">
      <p>
        © {new Date().getFullYear()} {profile.name}. Crafted with Next.js,
        TypeScript, Tailwind, and Framer Motion.
      </p>
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#1a2440_0%,_#080b14_52%,_#05070e_100%)]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-100 focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-slate-900"
      >
        Skip to main content
      </a>
      <Navbar />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-300/10 to-transparent" />

      <main id="main-content" className="relative z-10 w-full pb-12 pt-12">
        <div className="space-y-10 sm:space-y-11 lg:space-y-12">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ExperienceSection />
          <GitHubContributionsSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}
