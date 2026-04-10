import { type Variants, motion } from 'framer-motion'
import { FiMail, FiGithub, FiMapPin } from 'react-icons/fi'

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
}

const CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}

const INFO_CARDS = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'scanosilvia75@gmail.com',
    href: 'mailto:scanosilvia75@gmail.com',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Mifa75',
    href: 'https://github.com/Mifa75',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Edinburgh, UK',
    href: null,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
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
            Say hello
          </motion.span>
          <motion.h2
            variants={FADE_UP}
            className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text)' }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={FADE_UP}
            className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
          >
            I'm currently open to new opportunities. Whether you have a question or
            just want to say hello — my inbox is always open.
          </motion.p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

          {/* Left: contact info cards */}
          <motion.div
            className="flex flex-col gap-4 lg:w-80 w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={CONTAINER}
          >
            {INFO_CARDS.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl"
                    style={{ background: 'var(--accent-light)', color: 'var(--accent)' }}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-sm font-medium truncate"
                      style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}
                    >
                      {value}
                    </span>
                  </div>
                </>
              )

              return (
                <motion.div key={label} variants={FADE_UP}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-2xl no-underline
                                 transition-all duration-200 hover:-translate-y-1"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.boxShadow =
                          '0 0 0 2px var(--accent), var(--shadow-md)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                      }}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-4 p-4 rounded-2xl"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      {inner}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <form
              onSubmit={e => e.preventDefault()}
              className="flex flex-col gap-5 p-8 rounded-2xl"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {/* Name + Email row */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex flex-col gap-1.5 flex-1">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    disabled
                    className="px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-sans)',
                      opacity: 0.6,
                      cursor: 'not-allowed',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5 flex-1">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@example.com"
                    disabled
                    className="px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-sans)',
                      opacity: 0.6,
                      cursor: 'not-allowed',
                    }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-subject"
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="What's this about?"
                  disabled
                  className="px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-sans)',
                    opacity: 0.6,
                    cursor: 'not-allowed',
                  }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Your message…"
                  disabled
                  className="px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-sans)',
                    opacity: 0.6,
                    cursor: 'not-allowed',
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled
                className="mt-1 px-8 py-3 rounded-full text-sm font-semibold text-white
                           transition-opacity duration-200 hover:opacity-80 cursor-not-allowed"
                style={{
                  background: 'var(--accent)',
                  fontFamily: 'var(--font-sans)',
                  opacity: 0.7,
                }}
              >
                Send Message
              </button>

              {/* Coming soon note */}
              <p
                className="text-center text-xs"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
              >
                Form submission coming soon — for now, please reach out via email.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
