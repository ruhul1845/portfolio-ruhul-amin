import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { contacts, icons, navLinks, profile, projects, quickFacts, skills } from './data.jsx'

const { FaExternalLinkAlt, FaDownload, FaGithub, FaLinkedin } = icons

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="tracking-[0.45em] text-sm font-bold uppercase text-amber-500">{kicker}</p>
      <h2 className="mt-4 text-3xl font-black uppercase tracking-[0.25em] text-neutral-950 md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-neutral-600 leading-8">{text}</p>}
    </div>
  )
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-amber-400 bg-amber-400 text-lg font-black text-black shadow-glow">R</span>
          <span className="text-sm font-black uppercase tracking-[0.28em] text-white">Ruhul</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-[0.18em] transition ${isActive ? 'text-amber-400' : 'text-white hover:text-amber-300'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <Link to="/contact" className="rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-widest text-black transition hover:bg-amber-400">
          Hire Me
        </Link>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black pt-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,.22),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(255,255,255,.14),transparent_22%)]" />
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-neutral-100 diagonal lg:block" />
      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_.9fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-neutral-300">Hi, I am</p>
          <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">{profile.name}</h1>
          <p className="mt-5 text-xl font-bold text-amber-400 md:text-2xl">{profile.title}</p>
          <p className="mt-2 text-neutral-300">{profile.subtitle}</p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-300">{profile.summary}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={profile.cv} download className="premium-btn">
              <FaDownload /> Download Resume
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn"><FaGithub /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>
        <div className="relative hidden justify-center lg:flex">
          <div className="relative h-[520px] w-[390px] overflow-hidden rounded-[2rem] border border-black/10 bg-white p-8 text-black shadow-2xl">
            <div className="clip-shirt absolute bottom-0 right-0 h-[300px] w-[300px] bg-gradient-to-br from-neutral-950 to-neutral-700" />
            <div className="relative z-10">
              <p className="text-sm font-bold text-neutral-500">Full-Stack Developer</p>
              <h3 className="mt-3 text-4xl font-black">Ruhul Amin</h3>
              <p className="mt-4 max-w-xs leading-7 text-neutral-600">React, Next.js, Express.js, FastAPI, PostgreSQL, MongoDB and Supabase developer.</p>
            </div>
            <div className="absolute bottom-10 left-8 right-8 z-10 rounded-2xl bg-black p-5 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-400">Available for</p>
              <p className="mt-2 font-bold">Frontend, Backend & Full-stack Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntroBand() {
  return (
    <section className="bg-neutral-900 px-5 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="tracking-[0.55em] text-2xl font-black uppercase">Developer Profile</h2>
        <p className="mt-6 max-w-5xl leading-8 text-neutral-300">
          I build clean, responsive and deployment-ready applications. My experience includes car rental platforms, university departmental hubs, backend issue-tracking APIs, real-time notifications, authentication, dashboard features and database-driven apps.
        </p>
        <Link to="/portfolio" className="mt-8 inline-block border-b-2 border-white pb-1 text-sm font-black uppercase tracking-[0.25em] hover:text-amber-400">Explore Projects</Link>
      </div>
    </section>
  )
}

function About() {
  return (
    <main className="page-pad bg-neutral-50">
      <SectionTitle kicker="About Me" title="A B O U T" text="A focused CSE student and full-stack developer who enjoys building useful products from UI to API and database." />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {quickFacts.map((fact) => (
          <div key={fact.label} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-soft">
            <div className="mb-5 text-3xl text-amber-500">{fact.icon}</div>
            <h3 className="font-black uppercase tracking-[0.2em]">{fact.label}</h3>
            <p className="mt-4 leading-7 text-neutral-600">{fact.value}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-5xl text-center leading-8 text-neutral-700">
        <p>{profile.summary}</p>
        <p className="mt-6">My main interests are full-stack web development, cybersecurity and machine learning. I like creating polished interfaces, secure backend logic, REST APIs, database schemas and complete deployment flows.</p>
      </div>
    </main>
  )
}

function Skills() {
  return (
    <main className="page-pad bg-white">
      <SectionTitle kicker="Skills" title="S K I L L S" text="Technologies and tools I use for frontend, backend, database, cloud deployment and machine learning work." />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group} className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-7 shadow-soft">
            <h3 className="mb-6 font-black uppercase tracking-[0.3em] text-neutral-900">{group.group}</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {group.items.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-4 transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg">
                  <span className="text-2xl text-amber-500">{skill.icon}</span>
                  <span className="text-sm font-bold text-neutral-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

function Portfolio() {
  return (
    <main className="page-pad bg-neutral-950 text-white">
      <SectionTitle kicker="Portfolio" title="P R O J E C T S" text="Click any project card to open the live deployed project." />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <a key={project.title} href={project.url} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:border-amber-400 hover:bg-white/[0.08]">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-amber-400/10 blur-2xl transition group-hover:bg-amber-400/25" />
            <p className="text-sm font-black tracking-[0.4em] text-amber-400">0{index + 1}</p>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-3xl font-black">{project.title}</h3>
                <p className="mt-2 text-neutral-400">{project.category}</p>
              </div>
              <FaExternalLinkAlt className="mt-2 text-amber-400" />
            </div>
            <p className="mt-6 leading-8 text-neutral-300">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-neutral-300">{tag}</span>)}
            </div>
          </a>
        ))}
      </div>
      <p className="mt-12 text-center text-neutral-400">And many more to come!</p>
    </main>
  )
}

function Contact() {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  return (
    <main className="page-pad bg-neutral-100">
      <SectionTitle kicker="Contact" title="C O N T A C T" text="Send me a message for collaboration, project work, internship or software engineering opportunities." />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <div className="space-y-4">
          {contacts.map((item) => (
            <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-soft transition hover:border-amber-400">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-neutral-950 text-amber-400">{item.icon}</span>
              <span><strong className="block text-sm uppercase tracking-widest">{item.label}</strong><span className="text-neutral-600">{item.value}</span></span>
            </a>
          ))}
        </div>
        <form action={endpoint} method="POST" className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-soft">
          <div className="grid gap-5 md:grid-cols-2">
            <input name="name" required placeholder="ENTER YOUR NAME*" className="form-input" />
            <input name="email" type="email" required placeholder="ENTER YOUR EMAIL*" className="form-input" />
          </div>
          <input name="phone" placeholder="PHONE NUMBER" className="form-input mt-5" />
          <textarea name="message" required placeholder="YOUR MESSAGE*" rows="6" className="form-input mt-5 resize-none" />
          <button type="submit" className="premium-btn mt-6 w-full justify-center">Submit Message</button>
        </form>
      </div>
    </main>
  )
}

function Home() {
  return <><Hero /><IntroBand /><About /><Skills /><Portfolio /><Contact /></>
}

function Footer() {
  return (
    <footer className="bg-black px-5 py-10 text-center text-white">
      <Link to="/" className="text-sm font-black uppercase tracking-[0.35em] hover:text-amber-400">Back to top</Link>
      <p className="mt-6 text-sm text-neutral-500">© 2026 Ruhul Amin. All Rights Reserved.</p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen font-sans text-neutral-950">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
