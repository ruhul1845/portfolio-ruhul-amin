import { useState, useEffect } from 'react'
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFilePdf,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
  FaBookOpen,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from 'react-icons/fa'
import {
  profile,
  navLinks,
  recentUpdates,
  publications,
  allProjects,
  timelineItems,
  skillGroups,
} from './data.jsx'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark-theme')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark-theme')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#about"
          className="text-lg font-bold tracking-tight text-slate-900 transition hover:text-indigo-600"
        >
          {profile.brand}
        </a>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Half-Moon / Sun Theme Toggle (Right Side of Navbar) */}
          {/* Half-Moon / Sun Theme Toggle (Right Side of Navbar) */}
          <button
            type="button"
            onClick={() => setDark(!dark)}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Dark Mode' : 'Light Mode'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-2xs transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600"
          >
            {dark ? <FaMoon className="text-indigo-400" /> : <FaSun className="text-amber-500" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  const socialPills = [
    { label: 'Email', href: `mailto:${profile.email}`, icon: <FaEnvelope className="text-slate-600" /> },
    { label: 'Research Square', href: profile.researchSquare, icon: <FaBookOpen className="text-slate-600" /> },
    { label: 'GitHub', href: profile.github, icon: <FaGithub className="text-slate-600" /> },
    { label: 'LinkedIn', href: profile.linkedin, icon: <FaLinkedin className="text-slate-600" /> },
    { label: 'Resume / CV', href: profile.cvUrl, icon: <FaFilePdf className="text-slate-600" />, download: 'Ruhul_Amin_Resume.pdf' },
  ]

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 pb-20 pt-16 md:pt-24">
      <div className="grid items-center gap-12 md:grid-cols-[1.35fr_0.65fr]">
        <div>
          <h1 className="font-serif-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="font-serif-display mt-3 text-xl font-semibold text-slate-700 sm:text-2xl">
            {profile.roleLine}
            <a
              href={profile.institutionUrl}
              target="_blank"
              rel="noreferrer"
              className="text-indigo-600 hover:underline"
            >
              {profile.institution}
            </a>
          </p>

          <div className="mt-6 space-y-4 text-[15.5px] leading-7 text-slate-600">
            {profile.bioParagraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {socialPills.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                download={item.download}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-2xs transition hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-700"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-xl ring-1 ring-slate-200 sm:h-64 sm:w-64">
            <img
              src={profile.photo}
              alt="Ruhul Amin"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function UpdatesSection() {
  const [expanded, setExpanded] = useState(false)
  const visibleUpdates = expanded ? recentUpdates : recentUpdates.slice(0, 3)

  return (
    <section id="updates" className="border-t border-slate-100 bg-slate-50/60 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif-display section-underline text-2xl font-bold text-slate-900 sm:text-3xl">
          Recent Updates
        </h2>

        <div className="mt-8 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-8">
          <ul className="space-y-4">
            {visibleUpdates.map((item, idx) => (
              <li key={idx} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                <span
                  className={`inline-flex w-fit shrink-0 items-center justify-center rounded-md px-2.5 py-0.5 text-xs font-semibold ${
                    item.highlight
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-600 text-white'
                  }`}
                >
                  {item.date}
                </span>
                <p className="text-sm leading-6 text-slate-700 sm:text-[15px]">
                  {item.content.map((part, pIdx) => {
                    if (part.link) {
                      return (
                        <a
                          key={pIdx}
                          href={part.link}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 hover:text-indigo-800"
                        >
                          {part.text}
                        </a>
                      )
                    }
                    if (part.bold) {
                      return (
                        <strong key={pIdx} className="font-semibold text-slate-900">
                          {part.text}
                        </strong>
                      )
                    }
                    return <span key={pIdx}>{part.text}</span>
                  })}
                </p>
              </li>
            ))}
          </ul>

          {recentUpdates.length > 3 && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
            >
              <span>{expanded ? 'Show Less' : 'See More'}</span>
              {expanded ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

function ResearchSection() {
  return (
    <section id="research" className="border-t border-slate-100 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif-display section-underline text-2xl font-bold text-slate-900 sm:text-3xl">
          Research &amp; Preprints
        </h2>

        <p className="mt-5 text-sm text-slate-600">
          For preprint details and citation metrics, visit{' '}
          <a
            href={profile.researchSquare}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-800"
          >
            Research Square
          </a>
          .
        </p>

        <div className="mt-8 space-y-6">
          {publications.map((pub, idx) => (
            <div
              key={idx}
              className="border-l-2 border-indigo-600 pl-5"
            >
              <h3 className="font-serif-display text-lg font-bold text-slate-900 sm:text-xl">
                {pub.title}
              </h3>
              <p className="mt-1 text-sm italic text-slate-600">{pub.venue}</p>
              <p className="mt-1 text-sm font-medium text-slate-800">{pub.authors}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-700"
                >
                  <FaExternalLinkAlt className="text-[10px]" />
                  <span>DOI: {pub.doiLabel}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3)

  return (
    <section id="projects" className="border-t border-slate-100 bg-slate-50/50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-serif-display section-underline text-2xl font-bold text-slate-900 sm:text-3xl">
              Software &amp; Projects
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {showAll
                ? `Showing all ${allProjects.length} deployed software systems.`
                : 'Showing 3 flagship projects. Click View All to explore all deployed applications.'}
            </p>
          </div>

          {allProjects.length > 3 && (
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-xs font-semibold text-indigo-600 shadow-2xs transition hover:border-indigo-400 hover:bg-indigo-50"
            >
              <span>{showAll ? 'Show Featured (3)' : `View All (${allProjects.length})`}</span>
              {showAll ? <FaChevronUp className="text-[11px]" /> : <FaChevronDown className="text-[11px]" />}
            </button>
          )}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-indigo-200/80 bg-white shadow-2xs transition hover:-translate-y-0.5 hover:border-indigo-400 hover:shadow-md"
            >
              <div>
                {project.image && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block overflow-hidden border-b border-slate-100 bg-slate-100"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-44 w-full object-cover object-top transition duration-300 hover:scale-[1.02]"
                    />
                  </a>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-serif-display text-xl font-bold text-slate-900">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-slate-500">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} GitHub`}
                          className="transition hover:text-indigo-600"
                        >
                          <FaGithub className="text-base" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} Live Demo`}
                          className="transition hover:text-indigo-600"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {allProjects.length > 3 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-2xs transition hover:bg-indigo-700"
            >
              <span>{showAll ? 'Show Less' : `View All Projects (${allProjects.length})`}</span>
              {showAll ? <FaChevronUp className="text-[11px]" /> : <FaChevronDown className="text-[11px]" />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ExperienceAndSkillsSection() {
  const [activeTab, setActiveTab] = useState('all')

  const filterTabs = [
    { key: 'all', label: 'All Skills' },
    { key: 'fullstack', label: 'Full-Stack Web' },
    { key: 'data', label: 'Databases' },
    { key: 'languages', label: 'Languages' },
    { key: 'ml', label: 'ML & Data' },
    { key: 'tools', label: 'Tools & Cloud' },
  ]

  const filteredGroups =
    activeTab === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.key === activeTab)

  return (
    <section id="experience" className="border-t border-slate-100 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif-display section-underline text-2xl font-bold text-slate-900 sm:text-3xl">
          Education &amp; Experience
        </h2>

        <div className="mt-10 border-l-2 border-slate-200 pl-6 sm:ml-2">
          <div className="space-y-8">
            {timelineItems.map((item, idx) => (
              <div key={idx} className="relative">
                <span
                  className={`absolute -left-[33px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-white ${
                    item.active ? 'border-indigo-300' : 'border-slate-300'
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      item.active ? 'bg-indigo-600' : 'bg-slate-700'
                    }`}
                  />
                </span>
                <h3 className="font-serif-display text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-indigo-600">
                  {item.org} <span className="text-slate-400">|</span> {item.period}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif-display section-underline text-2xl font-bold text-slate-900 sm:text-3xl">
                Technical Skills
              </h2>
              <p className="mt-3 text-xs text-slate-500">
                Highlighted badges indicate primary daily production technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                    activeTab === tab.key
                      ? 'bg-indigo-600 text-white shadow-2xs'
                      : 'border border-slate-200 bg-white text-slate-600 hover:border-indigo-300 hover:text-indigo-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`mt-8 grid gap-4 ${
              filteredGroups.length === 1
                ? 'grid-cols-1'
                : filteredGroups.length === 2
                  ? 'sm:grid-cols-2'
                  : 'sm:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {filteredGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs transition hover:border-indigo-200"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-display text-base font-bold text-slate-900">
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-medium text-slate-400">
                    {group.items.length} skills
                  </span>
                </div>
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition ${
                        skill.core
                          ? 'border border-indigo-200 bg-indigo-50/70 text-indigo-700'
                          : 'border border-slate-200/70 bg-slate-50 text-slate-700'
                      }`}
                    >
                      {skill.core && (
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

  return (
    <section id="contact" className="border-t border-slate-100 bg-slate-50/70 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif-display section-underline text-2xl font-bold text-slate-900 sm:text-3xl">
          Get in Touch
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600">
          Open to software engineering roles, full-stack collaborations, and research discussions.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <FaEnvelope />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email</p>
                <p className="text-sm font-medium text-slate-800">{profile.email}</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replaceAll(' ', '')}`}
              className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <FaPhoneAlt />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone</p>
                <p className="text-sm font-medium text-slate-800">{profile.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-3.5 rounded-xl border border-slate-200 bg-white p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Location</p>
                <p className="text-sm font-medium text-slate-800">{profile.location}</p>
              </div>
            </div>
          </div>

          <form
            action={endpoint}
            method="POST"
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your Name *"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo-600"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email *"
                className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo-600"
              />
            </div>
            <textarea
              name="message"
              required
              rows="4"
              placeholder="Write your message *"
              className="mt-4 w-full resize-none rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm outline-none transition focus:border-indigo-600"
            />
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <UpdatesSection />
        <ResearchSection />
        <ProjectsSection />
        <ExperienceAndSkillsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <p>© 2026 Ruhul Amin </p>
      </footer>
    </div>
  )
}