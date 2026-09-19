import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { BackToTop } from './components/BackToTop'
import { Hero } from './sections/Hero'
import { QuickLinks } from './sections/QuickLinks'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Services } from './sections/Services'
import { Experience } from './sections/Experience'
import { CurrentlyBuilding } from './sections/CurrentlyBuilding'
import { GithubActivity } from './sections/GithubActivity'
import { Timeline } from './sections/Timeline'
import { Philosophy } from './sections/Philosophy'
import { Contact } from './sections/Contact'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-dvh bg-bg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-lg focus:border focus:border-border focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:text-fg"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <QuickLinks />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Experience />
        <CurrentlyBuilding />
        <GithubActivity />
        <Timeline />
        <Philosophy />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
