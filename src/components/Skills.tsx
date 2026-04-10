import { type Variants, motion } from 'framer-motion'
import { FiLayout, FiServer, FiDatabase, FiTool } from 'react-icons/fi'

const CATEGORIES = [
  {
    label: 'Frontend',
    Icon: FiLayout,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'React Native', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  },
  {
    label: 'Backend',
    Icon: FiServer,
    skills: ['Node.js', 'Express.js', 'PHP', 'Python'],
  },
  {
    label: 'Database',
    Icon: FiDatabase,
    skills: ['PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    label: 'Tools',
    Icon: FiTool,
    skills: ['Git', 'GitHub', 'Vite', 'Expo', 'Redux', 'Zustand', 'AsyncStorage'],
  },
]

const CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const PILL: Variants = {
  hidden: { opacity: 0, scale: 0.82, y: 10 },
  show:   { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.35, ease: 'easeOut' as const } },
}

const CARD: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const SECTION_CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const TITLE: Variants = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            variants={TITLE}
            className="inline-block mb-3 text-sm font-medium tracking-widest uppercase"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}
          >
            What I work with
          </motion.span>
          <motion.h2
            variants={TITLE}
            className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
          >
            Technical Skills
          </motion.h2>
        </motion.div>

        {/* Category grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={SECTION_CONTAINER}
        >
          {CATEGORIES.map(({ label, Icon, skills }) => (
            <motion.div
              key={label}
              variants={CARD}
              className="rounded-2xl p-6"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-lg"
                  style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}
                >
                  <Icon className="w-4 h-4" />
                </span>
                <span
                  className="text-sm font-semibold tracking-wide uppercase"
                  style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}
                >
                  {label}
                </span>
              </div>

              {/* Skill pills */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={CONTAINER}
              >
                {skills.map(skill => (
                  <motion.span
                    key={skill}
                    variants={PILL}
                    className="px-3 py-1.5 rounded-full text-sm font-medium cursor-default
                               transition-colors duration-200"
                    style={{
                      background: 'var(--accent-light)',
                      color: 'var(--accent)',
                      border: '1px solid var(--accent-border)',
                      fontFamily: 'var(--font-sans)',
                    }}
                    whileHover={{
                      backgroundColor: 'var(--accent)',
                      color: '#ffffff',
                      borderColor: 'var(--accent)',
                      scale: 1.05,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
