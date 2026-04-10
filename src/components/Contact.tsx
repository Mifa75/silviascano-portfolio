import { useRef, useState } from 'react'
import { type Variants, motion } from 'framer-motion'
import { FiMail, FiGithub, FiMapPin } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

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

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('loading')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

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
              ref={formRef}
              onSubmit={handleSubmit}
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
                    name="from_name"
                    type="text"
                    placeholder="Your name"
                    required
                    disabled={status === 'loading'}
                    className="px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-sans)',
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
                    name="from_email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    disabled={status === 'loading'}
                    className="px-4 py-3 rounded-xl text-sm outline-none"
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-sans)',
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
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  required
                  disabled={status === 'loading'}
                  className="px-4 py-3 rounded-xl text-sm outline-none"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-sans)',
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
                  name="message"
                  rows={5}
                  placeholder="Your message…"
                  required
                  disabled={status === 'loading'}
                  className="px-4 py-3 rounded-xl text-sm outline-none resize-none"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-sans)',
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="mt-1 px-8 py-3 rounded-full text-sm font-semibold text-white
                           transition-opacity duration-200 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  background: 'var(--accent)',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {status === 'loading' ? 'Sending…' : 'Send Message'}
              </button>

              {/* Status feedback */}
              {status === 'success' && (
                <p
                  className="text-center text-sm font-medium"
                  style={{ color: '#059669', fontFamily: 'var(--font-sans)' }}
                >
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p
                  className="text-center text-sm font-medium"
                  style={{ color: '#DC2626', fontFamily: 'var(--font-sans)' }}
                >
                  Something went wrong. Please email me directly.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
