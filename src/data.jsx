import {
  FaReact, FaNodeJs, FaPython, FaJava, FaGithub, FaGitAlt, FaHtml5, FaCss3Alt,
  FaDatabase, FaServer, FaExternalLinkAlt, FaLinkedin, FaEnvelope, FaPhoneAlt,
  FaMapMarkerAlt, FaDownload, FaGraduationCap, FaShieldAlt
} from 'react-icons/fa'
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiExpress, SiFastapi,
  SiPostgresql, SiMongodb, SiSupabase, SiPostman, SiVercel, SiNumpy, SiPandas,
  SiPytorch, SiTensorflow, SiKeras, SiScikitlearn, SiCplusplus
} from 'react-icons/si'

export const profile = {
  name: 'Ruhul Amin',
  title: 'Full-Stack Developer',
  subtitle: 'Building reliable, user-focused web applications',
  location: 'Dhaka, Bangladesh',
  phone: '+880 1834 340813',
  email: 'rohul4316@gmail.com',
  github: 'https://github.com/ruhul1845',
  linkedin: 'https://linkedin.com/in/ruhulaminn',
  cv: 'https://raw.githubusercontent.com/ruhul1845/Resume/main/resume.pdf',
  summary:
    'I have hands-on experience in full-stack web development using React, Next.js, Express.js, FastAPI, PostgreSQL, MongoDB, and Supabase. I build responsive real-world applications, backend APIs, authentication systems, dashboards, and deployment-ready projects.',
}

export const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

export const quickFacts = [
  { icon: <FaGraduationCap />, label: 'Education', value: 'B.Sc. in CSE, University of Dhaka' },
  { icon: <FaServer />, label: 'Focus', value: 'Full-Stack Web Development' },
  { icon: <FaShieldAlt />, label: 'Interests', value: 'Cybersecurity & Machine Learning' },
]

export const skills = [
  {
    group: 'Languages',
    items: [
      { name: 'C', icon: <FaDatabase /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'HTML5', icon: <FaHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'REST API', icon: <FaServer /> },
    ],
  },
  {
    group: 'Database & Cloud',
    items: [
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Supabase', icon: <SiSupabase /> },
      { name: 'Vercel', icon: <SiVercel /> },
    ],
  },
  {
    group: 'ML / Data',
    items: [
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'PyTorch', icon: <SiPytorch /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Keras', icon: <SiKeras /> },
    ],
  },
  {
    group: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
]

export const projects = [
  {
    title: 'SkillSphere',
    category: 'Full-Stack Skill Management Application',
    url: 'https://skillphere.vercel.app/',
    tags: ['Next.js', 'FastAPI', 'Supabase', 'PostgreSQL', 'Better Auth'],
    description:
      'A full-stack skill management app with authentication, RESTful backend services, user profiles, and skill-focused features.',
  },
  {
    title: 'DriveFleet',
    category: 'Full-Stack Car Rental Platform',
    url: 'https://drive-fleet-client.vercel.app',
    tags: ['Next.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    description:
      'A car rental platform where users can browse vehicles, view details, book rentals, and manage their own car listings with protected routes.',
  },
  {
    title: 'UniConnect',
    category: 'CSE Departmental Hub',
    url: 'https://uni-connect-rho.vercel.app',
    tags: ['React', 'Tailwind CSS', 'Supabase', 'Realtime'],
    description:
      'A departmental hub for academic resources, marketplace, housing support, safety tools, admin management, and real-time notifications.',
  },
  {
    title: 'DevPlus Server',
    category: 'Internal Tech Issue & Feature Tracker API',
    url: 'https://dev-plus-server.vercel.app/',
    tags: ['Node.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'JWT'],
    description:
      'A RESTful API for tracking bugs and feature requests with JWT authentication, role-based authorization, and raw SQL queries.',
  },
]

export const contacts = [
  { icon: <FaEnvelope />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: <FaPhoneAlt />, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replaceAll(' ', '')}` },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: profile.location, href: '#' },
  { icon: <FaGithub />, label: 'GitHub', value: 'github.com/ruhul1845', href: profile.github },
  { icon: <FaLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/ruhulaminn', href: profile.linkedin },
]

export const icons = { FaExternalLinkAlt, FaDownload, FaGithub, FaLinkedin }
