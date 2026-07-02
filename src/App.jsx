import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { contacts, icons, navLinks, profile, projects, quickFacts, skills } from './data.jsx'

const { FaExternalLinkAlt, FaDownload, FaGithub, FaLinkedin } = icons

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">{kicker}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {text && <p className="mt-5 leading-8 text-slate-600">{text}</p>}
    </div>
  )
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-5 py-4 lg:px-8">
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-[0.18em] transition ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <Link to="/contact" className="rounded-full bg-blue-600 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white shadow-sm transition hover:bg-blue-700">
          Hire Me
        </Link>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_25%,rgba(37,99,235,.10),transparent_30%),radial-gradient(circle_at_88%_35%,rgba(14,165,233,.10),transparent_28%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-500">Hi, I am</p>
          <h1 className="mt-2 text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">{profile.name}</h1>
          <p className="mt-5 text-xl font-bold text-blue-600 md:text-2xl">{profile.title}</p>
          <p className="mt-2 text-slate-500">{profile.subtitle}</p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600">{profile.summary}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={profile.cv} download className="premium-btn">
              <FaDownload /> Download Resume
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="icon-btn"><FaGithub /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="icon-btn"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>
        <div className="relative flex justify-center py-8">
          <div className="profile-ring">
            <div className="profile-photo-wrap">
              <img src="/profile.jpeg" alt="Ruhul Amin" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntroBand() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-black tracking-tight text-slate-950">Developer Profile</h2>
        <p className="mt-5 max-w-5xl leading-8 text-slate-600">
          I build clean, responsive and deployment-ready applications. My experience includes car rental platforms, university departmental hubs, backend issue-tracking APIs, real-time notifications, authentication, dashboard features and database-driven apps.
        </p>
        <Link to="/portfolio" className="mt-8 inline-block border-b-2 border-blue-600 pb-1 text-sm font-black uppercase tracking-[0.2em] text-blue-600 hover:text-blue-800">Explore Projects</Link>
      </div>
    </section>
  )
}

function About() {
  return (
    <main className="page-pad bg-neutral-50">
      <SectionTitle kicker="About Me" title="A Little About Me" text="A full-stack developer who enjoys building useful products from polished interfaces to reliable APIs and databases." />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {quickFacts.map((fact) => (
          <div key={fact.label} className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-soft">
            <div className="mb-5 text-3xl text-blue-600">{fact.icon}</div>
            <h3 className="font-black uppercase tracking-[0.2em]">{fact.label}</h3>
            <p className="mt-4 leading-7 text-neutral-600">{fact.value}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-4xl text-center leading-8 text-slate-700">
        <p>
          In my projects, I use React, Next.js and Tailwind CSS to build responsive frontends. For backend development, I work with Node.js, Express.js, JavaScript and TypeScript, supported by MongoDB, PostgreSQL and Supabase. I also implement authentication and application features using JWT, bcrypt, Better Auth, Stripe and Supabase Realtime.
        </p>
      </div>
    </main>
  )
}

function Skills() {
  return (
    <main className="page-pad bg-white">
      <SectionTitle kicker="Expertise" title="Skills & Tools" text="A practical toolkit for building complete products—from polished interfaces to reliable APIs, data and deployment." />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <div key={group.group} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-card-hover">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              <h3 className="font-black text-slate-900">{group.group}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 transition hover:border-blue-200 hover:bg-blue-50">
                  <span className="text-lg text-blue-600">{skill.icon}</span>
                  <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
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
    <main className="page-pad bg-slate-50">
      <SectionTitle kicker="Portfolio" title="Featured Projects" text="A selection of deployed products across full-stack development, APIs and real-time applications." />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <a key={project.title} href={project.url} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-card transition hover:-translate-y-2 hover:border-blue-300 hover:shadow-card-hover">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blue-100 blur-2xl transition group-hover:bg-blue-200" />
            <p className="text-sm font-black tracking-[0.3em] text-blue-600">0{index + 1}</p>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-3xl font-black text-slate-950">{project.title}</h3>
                <p className="mt-2 text-slate-500">{project.category}</p>
              </div>
              <FaExternalLinkAlt className="mt-2 text-blue-600" />
            </div>
            <p className="mt-6 leading-8 text-slate-600">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{tag}</span>)}
            </div>
          </a>
        ))}
      </div>
      <p className="mt-12 text-center text-slate-500">And many more to come!</p>
    </main>
  )
}

function Contact() {
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT
  return (
    <main className="page-pad bg-neutral-100">
      <SectionTitle kicker="Contact" title="Let’s Work Together" text="Send me a message for collaboration, project work, internship or software engineering opportunities." />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <div className="space-y-4">
          {contacts.map((item) => (
            <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-3xl border border-neutral-200 bg-white p-5 shadow-soft transition hover:border-blue-300">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-blue-50 text-blue-600">{item.icon}</span>
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
    <footer className="border-t border-slate-200 bg-white px-5 py-10 text-center">
      <Link to="/" className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 hover:text-blue-800">Back to top</Link>
      <p className="mt-6 text-sm text-slate-500">© 2026 Ruhul Amin. All Rights Reserved.</p>
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
