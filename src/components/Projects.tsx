import { type Variants, motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiLock } from "react-icons/fi";
import type { Project } from "../types/project";
import allergenLabel from "../assets/allergen-label.png";
import directoryLight from "../assets/directory-light.png";
import gazetteer from "../assets/gazeteer.png";

const PROJECTS: Project[] = [
  {
    title: "Gazetteer",
    description:
      "A full-screen interactive map application that provides real-time country-specific data. Integrates multiple third-party APIs and the Leaflet mapping library for an engaging geographical experience.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "PHP"],
    github: "https://github.com/Mifa75/gazetteer",
    live: "#",
    image: gazetteer,
    status: "complete",
  },
  {
    title: "Staff Directory App",
    description:
      "A mobile-first staff directory for browsing employee contacts, searching by name, role, department or location, saving favourites, and accessing recent contacts. Built with a clean mobile UI.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "AsyncStorage",
      "React Navigation",
    ],
    github: "https://github.com/Mifa75/staff-directory-app",
    live: null,
    image: directoryLight,
    status: "in-progress",
  },
  {
    title: "Allergen Label App",
    description:
      "A commercial food label printing application for kitchen staff that generates compliant allergen warning labels following Natasha's Law (UK/EU regulations). Features live label preview, product library, and Supabase authentication.",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Supabase"],
    github: null,
    live: null,
    image: allergenLabel,
    status: "commercial",
  },
];

// Unique gradient per card so placeholders are visually distinct
const CARD_GRADIENTS = [
  "linear-gradient(135deg, #6D28D9 0%, #8B5CF6 50%, #A78BFA 100%)",
  "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A78BFA 100%)",
  "linear-gradient(135deg, #7C3AED 0%, #6D28D9 40%, #4C1D95 100%)",
];

const STATUS_BADGE: Record<
  Project["status"],
  { label: string; color: string; bg: string }
> = {
  complete: { label: "Complete", color: "#059669", bg: "rgba(5,150,105,0.12)" },
  "in-progress": {
    label: "Frontend Complete",
    color: "#D97706",
    bg: "rgba(217,119,6,0.12)",
  },
  commercial: {
    label: "Commercial · Private Repo",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.12)",
  },
};

const CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

const CARD_VAR: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

const TITLE_VAR: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

function ProjectCard({
  project,
  gradient,
}: {
  project: Project;
  gradient: string;
}) {
  const badge = STATUS_BADGE[project.status];

  return (
    <motion.article
      variants={CARD_VAR}
      className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 0 0 2px var(--accent), 0 20px 40px rgba(139,92,246,0.18)",
        transition: { duration: 0.22 },
      }}
    >
      {/* Project screenshot */}
      <div
        className="h-44 w-full flex items-end p-4 relative overflow-hidden"
        style={{ background: gradient }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Status badge */}
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{
            color: badge.color,
            background: badge.bg,
            backdropFilter: "blur(8px)",
          }}
        >
          {project.status === "commercial" && <FiLock className="w-3 h-3" />}
          {badge.label}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3
          className="text-xl font-bold leading-snug"
          style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
        >
          {project.title}
        </h3>

        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}
        >
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                background: "var(--accent-light)",
                color: "var(--accent)",
                border: "1px solid var(--accent-border)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        {(project.github || project.live) && (
          <div className="flex items-center gap-3 pt-1">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <FiGithub className="w-4 h-4" /> GitHub
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
                style={{
                  background: "var(--accent)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                <FiExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.span
            variants={TITLE_VAR}
            className="inline-block mb-3 text-sm font-medium tracking-widest uppercase"
            style={{ color: "var(--accent)", fontFamily: "var(--font-sans)" }}
          >
            Things I've built
          </motion.span>
          <motion.h2
            variants={TITLE_VAR}
            className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "var(--text)" }}
          >
            Projects
          </motion.h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={CONTAINER}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              gradient={CARD_GRADIENTS[i]}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
