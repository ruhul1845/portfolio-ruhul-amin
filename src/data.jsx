export const profile = {
  brand: 'Ruhul Amin',
  name: "Hi, I'm Ruhul Amin.",
  roleLine: 'Full-Stack Developer & CS Undergrad @ ',
  institution: 'University of Dhaka',
  institutionUrl: 'https://www.du.ac.bd/',
  bioParagraphs: [
    'I build scalable, user-centric web applications and intelligent software systems. Currently a 4th-year Computer Science & Engineering undergraduate at the University of Dhaka, I specialize in full-stack architectures bridging modern React & Next.js interfaces with resilient Node.js, Express, FastAPI, PostgreSQL, and MongoDB backends.',
    'Beyond production web engineering, I conduct research in Machine Learning and Cybersecurity—exploring explainable models, network security, and data-driven healthcare and fintech applications.',
    'My three flagship full-stack systems are a collaborative Project Management SaaS platform, FixItNow (on-demand technical & home service booking platform), and BloodLink (real-time blood donor & emergency request network), alongside NexusBank, DriveFleet, UniConnect, and SkillSphere.',
  ],
  email: 'rohul4316@gmail.com',
  phone: '+880 1834 340813',
  location: 'Dhaka, Bangladesh',
  github: 'https://github.com/ruhul1845',
  linkedin: 'https://www.linkedin.com/in/ruhulamiinn/',
  researchSquare: 'https://doi.org/10.21203/rs.3.rs-11812457/v1',
  cvUrl: '/resume.pdf',
  photo: '/profile.jpg',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Updates', href: '#updates' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills & Education', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const recentUpdates = [
  {
    date: '2026',
    highlight: true,
    content: [
      { text: 'Published research preprint on ' },
      { text: 'Research Square', bold: true },
      { text: ' (DOI: ' },
      { text: '10.21203/rs.3.rs-11812457/v1', link: 'https://doi.org/10.21203/rs.3.rs-11812457/v1' },
      { text: ').' },
    ],
  },
  {
    date: '2026',
    highlight: true,
    content: [
      { text: 'Deployed three flagship full-stack systems: ' },
      { text: 'Project Management SaaS', bold: true },
      { text: ', ' },
      { text: 'FixItNow', bold: true },
      { text: ', and ' },
      { text: 'BloodLink', bold: true },
      { text: '.' },
    ],
  },
  {
    date: '2025',
    highlight: true,
    content: [
      { text: 'Built and launched ' },
      { text: 'NexusBank', bold: true },
      { text: ', ' },
      { text: 'DriveFleet', bold: true },
      { text: ', ' },
      { text: 'UniConnect', bold: true },
      { text: ', and ' },
      { text: 'SkillSphere', bold: true },
      { text: '.' },
    ],
  },
  {
    date: 'Sep 2022',
    highlight: false,
    content: [
      { text: 'Started B.Sc. in Computer Science and Engineering at ' },
      { text: 'University of Dhaka', bold: true },
      { text: '.' },
    ],
  },
]

export const publications = [
  {
    title: 'Research Preprint — Machine Learning & Applied Computing Study',
    venue: 'Research Square Preprint, 2026',
    authors: 'Ruhul Amin et al.',
    doiUrl: 'https://doi.org/10.21203/rs.3.rs-11812457/v1',
    doiLabel: '10.21203/rs.3.rs-11812457/v1',
  },
]

// First 3 are the Main Projects shown initially; clicking "View All" reveals the remaining 4
export const allProjects = [
  {
    title: 'Project Management SaaS',
    image: '/project.png',
    featured: true,
    description:
      'Collaborative project management SaaS platform built for engineering and product teams to organize projects, assign tasks across sprint boards, track deadlines, and monitor milestone progress.',
    tags: ['React', 'JavaScript / TypeScript', 'Tailwind CSS', 'REST API', 'Vercel'],
    liveUrl: 'https://project-management-fronted.vercel.app/',
    githubUrl: 'https://github.com/ruhul1845/Project-Management-Fronted',
  },
  {
    title: 'FixItNow',
    image: '/fix.png',
    featured: true,
    description:
      'On-demand home and technical service marketplace connecting customers with verified technicians, featuring categorized service discovery, appointment scheduling, and real-time job status tracking.',
    tags: ['React', 'Node.js', 'Express.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://fix-it-now-frontend-delta.vercel.app/',
    githubUrl: 'https://github.com/ruhul1845/FixItNow-Frontend',
  },
  {
    title: 'BloodLink',
    image: '/blood.png',
    featured: true,
    description:
      'Real-time blood donation and emergency request platform connecting voluntary donors with hospitals and patients through blood-group filtering, location matching, and urgent request pipelines.',
    tags: ['React', 'Tailwind CSS', 'REST API', 'Authentication', 'Vercel'],
    liveUrl: 'https://blood-link-client-swdg.vercel.app/',
    githubUrl: 'https://github.com/ruhul1845/BloodLink-Client',
  },
  {
    title: 'NexusBank',
    image: '/bank.png',
    featured: false,
    description:
      'Full-stack digital banking and financial management platform supporting account operations, fund transfers, transaction ledgers, and role-based dashboards.',
    tags: ['React / Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://nexusbank-neon.vercel.app/',
    githubUrl: 'https://github.com/ruhul1845/NexusBank',
  },
  {
    title: 'DriveFleet',
    image: '/car.png',
    featured: false,
    description:
      'Full-stack car rental platform where users browse vehicles, inspect specs, book rentals with HTTPOnly JWT authentication, and manage fleet listings.',
    tags: ['Next.js', 'Express.js', 'MongoDB', 'Better Auth', 'JWT'],
    liveUrl: 'https://drive-fleet-client.vercel.app/',
    githubUrl: 'https://github.com/ruhul1845/DriveFleet_Client',
  },
  {
    title: 'UniConnect',
    image: '/uniconnect.png',
    featured: false,
    description:
      'CSE Departmental Hub for University of Dhaka students featuring academic resource sharing, campus marketplace, housing support, and Supabase Realtime alerts.',
    tags: ['React', 'Tailwind CSS', 'Supabase', 'Realtime'],
    liveUrl: 'https://uni-connect-rho.vercel.app/',
    githubUrl: 'https://github.com/ruhul1845/UniConnect',
  },
  {
    title: 'SkillSphere',
    image: '/skill.png',
    featured: false,
    description:
      'Full-stack skill management platform with Better Auth Google OAuth login, personalized user profiles, and RESTful FastAPI / MongoDB services.',
    tags: ['Next.js', 'FastAPI', 'MongoDB', 'Better Auth'],
    liveUrl: 'https://skillphere.vercel.app/',
    githubUrl: 'https://github.com/ruhul1845/skillsphere',
  },
]

export const timelineItems = [
  {
    title: 'B.Sc. in Computer Science and Engineering (CSE)',
    org: 'University of Dhaka',
    period: 'Sep 2022 – Present',
    active: true,
    description:
      '4th Year Undergraduate Student. Coursework and research spanning Algorithms, Data Structures, Database Management Systems, Operating Systems, Software Engineering, Computer Networks, Cybersecurity, and Machine Learning.',
  },
  {
    title: 'Full-Stack Software Engineering & Deployed Systems',
    org: 'Independent & Academic Projects · Dhaka, Bangladesh',
    period: '2023 – Present',
    active: false,
    description:
      'Architected and deployed full-stack web applications (Project Management SaaS, FixItNow, BloodLink, NexusBank, DriveFleet, UniConnect, SkillSphere) using React, Next.js, Node.js, Express, FastAPI, PostgreSQL, MongoDB, and Supabase.',
  },
  {
    title: 'Research in Machine Learning & Applied Computing',
    org: 'Research Square Preprint Author',
    period: '2025 – 2026',
    active: false,
    description:
      'Authored and published preprint (DOI: 10.21203/rs.3.rs-11812457/v1) focusing on data-driven modeling, evaluation pipelines, and applied computational problem solving.',
  },
]

export const skillGroups = [
  {
    key: 'fullstack',
    category: 'Frontend',
    items: [
      { name: 'React', core: true },
      { name: 'Next.js', core: true },
      { name: 'Tailwind CSS', core: true },
      { name: 'HTML5', core: false },
      { name: 'CSS3', core: false },
      { name: 'Responsive UI', core: false },
    ],
  },
  {
    key: 'fullstack',
    category: 'Backend & Auth',
    items: [
      { name: 'Node.js', core: true },
      { name: 'Express.js', core: true },
      { name: 'FastAPI', core: true },
      { name: 'REST APIs', core: false },
      { name: 'JWT', core: false },
      { name: 'Better Auth', core: false },
      { name: 'RBAC', core: false },
    ],
  },
  {
    key: 'data',
    category: 'Databases & Realtime',
    items: [
      { name: 'PostgreSQL', core: true },
      { name: 'MongoDB', core: true },
      { name: 'Supabase', core: true },
      { name: 'Supabase Realtime', core: false },
    ],
  },
  {
    key: 'languages',
    category: 'Languages',
    items: [
      { name: 'JavaScript (ES6+)', core: true },
      { name: 'TypeScript', core: true },
      { name: 'Python', core: true },
      { name: 'SQL', core: false },
      { name: 'C++', core: false },
      { name: 'Java', core: false },
      { name: 'C', core: false },
    ],
  },
  {
    key: 'ml',
    category: 'ML & Data Science',
    items: [
      { name: 'PyTorch', core: true },
      { name: 'Scikit-learn', core: true },
      { name: 'Pandas', core: false },
      { name: 'NumPy', core: false },
      { name: 'TensorFlow', core: false },
      { name: 'Keras', core: false },
      { name: 'Matplotlib', core: false },
    ],
  },
  {
    key: 'tools',
    category: 'Tools & Deployment',
    items: [
      { name: 'Git', core: true },
      { name: 'GitHub', core: true },
      { name: 'Vercel', core: true },
      { name: 'Postman', core: false },
    ],
  },
]