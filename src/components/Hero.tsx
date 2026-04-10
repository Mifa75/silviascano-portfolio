import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FiDownload, FiArrowRight } from 'react-icons/fi'

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}

const CONTAINER = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

export function Hero() {
  function scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated radial gradient background */}
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute inset-0 -z-10"
      />

      <div className="w-full max-w-6xl mx-auto px-6 py-32 flex flex-col-reverse md:flex-row items-center gap-14 md:gap-10">

        {/* ── Left: text content ── */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          variants={CONTAINER}
          initial="hidden"
          animate="show"
        >
          {/* Label */}
          <motion.span
            variants={FADE_UP}
            className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-medium tracking-wide"
            style={{
              color: 'var(--accent)',
              background: 'var(--accent-light)',
              border: '1px solid var(--accent-border)',
              fontFamily: 'var(--font-sans)',
            }}
          >
            Full Stack Developer
          </motion.span>

          {/* Main heading */}
          <motion.h1
            variants={FADE_UP}
            className="mb-4 text-[clamp(2.4rem,5.5vw,3.8rem)] font-bold leading-[1.12] tracking-tight"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--text)',
            }}
          >
            Hi, I'm{' '}
            <span style={{ color: 'var(--accent)' }}>Silvia Scano</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={FADE_UP}
            className="mb-8 max-w-xl text-lg leading-relaxed"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--text-muted)',
            }}
          >
            I build web and mobile applications — clean, user-friendly,
            and built to solve real problems.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={FADE_UP}
            className="flex flex-wrap gap-3 justify-center md:justify-start mb-10"
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.03] active:scale-95"
              style={{
                background: 'var(--accent)',
                fontFamily: 'var(--font-sans)',
              }}
            >
              View My Work <FiArrowRight className="w-4 h-4" />
            </button>

            <a
              href="/assets/silvia_scano.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-95"
              style={{
                color: 'var(--accent)',
                border: '1.5px solid var(--accent-border)',
                background: 'transparent',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Download CV <FiDownload className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={FADE_UP}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/Mifa75"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
              style={{
                color: 'var(--text-muted)',
                border: '1px solid var(--border)',
              }}
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/silvia-scano-0a98a0258/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
              style={{
                color: 'var(--text-muted)',
                border: '1px solid var(--border)',
              }}
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: photo placeholder ── */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center select-none"
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, #C4B5FD 60%, #DDD6FE 100%)',
              boxShadow: '0 0 0 6px var(--accent-light), 0 0 0 12px var(--accent-border)',
            }}
          >
            <span
              className="text-white/80 text-sm font-medium text-center px-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Your photo here
            </span>
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes hero-pulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%       { opacity: 0.80; transform: scale(1.08); }
        }
        .hero-glow {
          background: radial-gradient(ellipse 70% 60% at 60% 45%, var(--accent-light) 0%, transparent 75%);
          animation: hero-pulse 8s ease-in-out infinite;
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  )
}
