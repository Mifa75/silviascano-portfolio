import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

const SOCIAL_LINKS = [
  {
    icon: FiGithub,
    href: "https://github.com/Mifa75",
    label: "GitHub",
  },
  {
    icon: FiMail,
    href: "mailto:scanosilvia75@gmail.com",
    label: "Email",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/silvia-scano-0a98a0258/",
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{
        background: "var(--bg)",
        borderColor: "var(--border)",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p
          className="text-sm text-center sm:text-left"
          style={{ color: "var(--text-muted)" }}
        >
          © 2026 Silvia Scano · Designed &amp; built by Silvia Scano
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full
                         transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.background = "var(--accent-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
