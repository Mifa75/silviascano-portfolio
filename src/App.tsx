import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
function About()    { return <section id="about"    className="min-h-screen flex items-center justify-center text-[var(--text-muted)]">About</section> }
function Skills()   { return <section id="skills"   className="min-h-screen flex items-center justify-center text-[var(--text-muted)]">Skills</section> }
function Projects() { return <section id="projects" className="min-h-screen flex items-center justify-center text-[var(--text-muted)]">Projects</section> }
function Contact()  { return <section id="contact"  className="min-h-screen flex items-center justify-center text-[var(--text-muted)]">Contact</section> }

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
