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
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiGlobe, FiMail } from "react-icons/fi";

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

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
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
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-2xl backdrop-blur-xl sm:px-10 sm:py-12 lg:px-12"
      aria-labelledby="hero-heading"
    >
      <motion.div
        animate={{ x: [0, 18, 0], y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -16, 0], y: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-teal-500/25 blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[linear-gradient(110deg,rgba(56,189,248,0.12),rgba(45,212,191,0.08),transparent_70%)]"
      />

      <div className="relative z-10 grid items-start gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Left column: profile image, role, name, intro, buttons */}
        <div className="space-y-6">
          {/* Profile section with image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.42 }}
          >
            {/* TODO: Place your actual profile image at public/profile.png */}
            <Image
              src="/profile.png"
              alt="Profile picture of Affif Chowdhury"
              width={128}
              height={128}
              className="w-20 h-20 lg:w-32 lg:h-32 rounded-full border-2 border-cyan-200/30 shadow-lg object-cover flex-shrink-0"
              priority
            />
          </motion.div>

          {/* Hero heading and content */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.48 }}
            id="hero-heading"
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-cyan-300 to-teal-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              Explore Projects
            </a>
            <a
              href={profile.resumeLink}
              className="rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
            >
              Download CV
            </a>
          </motion.div>

          <p className="text-sm text-slate-300">
            Open to internships and junior software engineer opportunities.
          </p>
        </div>

        {/* Right column: code snippets (visible on lg breakpoint and above) */}
        <div className="hidden lg:block">
          <div className="space-y-4">
            {floatingSnippets.map((snippet, index) => (
              <motion.div
                key={snippet}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                transition={{
                  opacity: { delay: 0.5 + index * 0.12, duration: 0.45 },
                  x: { delay: 0.5 + index * 0.12, duration: 0.45 },
                  y: {
                    delay: 0.7 + index * 0.16,
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="rounded-2xl border border-cyan-200/20 bg-slate-950/65 px-4 py-3 font-mono text-xs text-cyan-100 shadow-lg"
              >
                {snippet}
              </motion.div>
            ))}
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
      <SectionHeading title="About Me" subtitle="Introduction" />
      <p className="text-base leading-relaxed text-slate-200">{about}</p>
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
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition-colors duration-300 hover:border-cyan-300/40"
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
      <SectionHeading title="Projects" subtitle="Selected Work" />
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
        A curated set of practical projects demonstrating full-stack
        engineering, product thinking, and strong implementation skills relevant
        to internship and junior developer roles.
      </p>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            whileHover={{ y: -7 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/45 p-5 transition-colors duration-300 hover:border-cyan-300/45"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-200">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-200/25 bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub`}
                className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100 transition-all duration-300 hover:border-cyan-300/60 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              >
                View Code
              </a>
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="rounded-lg bg-gradient-to-r from-cyan-300 to-teal-300 px-3 py-2 text-xs font-semibold text-slate-900 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
              >
                Live Preview
              </a>
            </div>
          </motion.article>
        ))}
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
      <SectionHeading title="Education" subtitle="Academic Background" />
      <div className="rounded-2xl border border-white/10 bg-slate-900/45 p-6">
        <h3 className="text-xl font-semibold text-white">{education.degree}</h3>
        <p className="mt-2 text-cyan-200">{education.institution}</p>
        <p className="mt-1 text-sm text-slate-400">{education.duration}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          {education.details}
        </p>
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
      <SectionHeading title="Experience & Leadership" subtitle="Impact" />
      <div className="space-y-5">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.07 }}
            className="rounded-2xl border border-white/10 bg-slate-900/45 p-5"
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
    {
      label: "Website",
      href: "#",
      icon: FiGlobe,
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
      <SectionHeading title="Contact" subtitle="Let's Connect" />
      <div className="flex justify-center">
        <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900/45 px-5 py-6 text-center shadow-[0_15px_45px_rgba(4,10,20,0.35)] sm:px-6 sm:py-8">
          <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-7 text-slate-300">
            Have a project, opportunity, or collaboration in mind? Feel free to
            reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href === "#" ? undefined : "_blank"}
                rel={href === "#" ? undefined : "noopener noreferrer"}
                className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-950 text-slate-200 shadow-sm transition duration-300 hover:scale-105 hover:border-cyan-300/50 hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
                <span className="absolute -bottom-7 left-1/2 w-max -translate-x-1/2 whitespace-nowrap text-[0.65rem] uppercase tracking-[0.28em] text-slate-300 opacity-0 transition duration-300 group-hover:opacity-100">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function GitHubContributionsSection() {
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
      <SectionHeading title="GitHub Activity" subtitle="Coding Activity" />
      <p className="mb-6 text-sm leading-relaxed text-slate-300">
        A live view of my open-source and project activity.
      </p>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/45 p-5 sm:p-6">
        <div className="flex justify-center py-4">
          <GitHubCalendar username="Piooooooo" colorScheme="dark" />
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

      <main
        id="main-content"
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-12 pt-8 sm:px-8 sm:pt-10 lg:px-12"
      >
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
