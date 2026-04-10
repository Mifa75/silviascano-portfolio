import { type Variants, motion } from 'framer-motion'
import myPhoto from '../assets/my-photo.png'

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

const CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}

const HIGHLIGHTS = [
  { label: '3+ Projects',     icon: '🚀' },
  { label: 'Edinburgh Based', icon: '📍' },
  { label: 'Open to Work',    icon: '✅' },
]

export function About() {
  return (
    <section
      id="about"
      className="relative py-28"
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={CONTAINER}
        >
          <motion.span
            variants={FADE_UP}
            className="inline-block mb-3 text-sm font-medium tracking-widest uppercase"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}
          >
            Get to know me
          </motion.span>
          <motion.h2
            variants={FADE_UP}
            className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
          >
            About Me
          </motion.h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-16">

          {/* Left: photo */}
          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div
              className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 0 6px var(--accent-light), 0 0 0 12px var(--accent-border)',
              }}
            >
              <img
                src={myPhoto}
                alt="Silvia Scano"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: text + highlight cards */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={CONTAINER}
          >
            <motion.p
              variants={FADE_UP}
              className="mb-5 text-base leading-relaxed"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
            >
              I'm a self-taught Full Stack Developer based in Edinburgh, passionate about
              creating web and mobile applications that are both functional and beautiful.
            </motion.p>

            <motion.p
              variants={FADE_UP}
              className="mb-5 text-base leading-relaxed"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
            >
              I started my journey through Codecademy and personal projects, and I'm
              always learning — currently building production apps with React Native and
              TypeScript. I love solving real-world problems with clean, maintainable code.
            </motion.p>

            <motion.p
              variants={FADE_UP}
              className="mb-10 text-base leading-relaxed"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
            >
              One of my current projects, the{' '}
              <span style={{ color: 'var(--accent)', fontWeight: 500 }}>
                Allergen Label App
              </span>
              , is a commercial product helping kitchen staff comply with Natasha's Law
              allergen labelling regulations.
            </motion.p>

            {/* Highlight cards */}
            <motion.div
              variants={CONTAINER}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {HIGHLIGHTS.map(({ label, icon }) => (
                <motion.div
                  key={label}
                  variants={FADE_UP}
                  className="flex flex-col items-center gap-2 px-4 py-5 rounded-2xl text-center cursor-default
                             transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    border: '1.5px solid var(--accent-border)',
                    background: 'var(--accent-light)',
                  }}
                >
                  <span className="text-2xl" role="img" aria-hidden="true">{icon}</span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}
                  >
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
