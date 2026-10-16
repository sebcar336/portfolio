import type { Dictionary } from './es';

// Textos en inglés. El tipo Dictionary obliga a tener las mismas claves que es.ts.
const en: Dictionary = {
  meta: {
    title: 'Sebastian Cardoso | Portfolio',
    description: 'Portfolio of Sebastian Cardoso, software development technician: experience in web development, automation and generative AI, technical skills and contact.',
    ogLocale: 'en_US',
  },
  nav: {
    label: 'Main',
    home: 'Home',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    openMenu: 'Open menu',
    switchLanguage: 'View the site in Spanish',
  },
  hero: {
    greeting: "Hi, I'm",
    role: 'Software Development Technician',
    tagline: 'With an innovative mindset, there are no limits to exploring new ways of seeing and building the world.',
    available: 'Open to work',
    experienceYears: '1+ year of experience',
  },
  experience: {
    title: 'Experience',
    downloadCv: 'Download my CV',
    // TODO: cambiar por el CV en inglés cuando exista (ponerlo en /public)
    cvHref: '/Hoja de Vida Tecnica Juan Sebastian Cardoso Cardona.pdf',
    jobs: {
      unionTemporal: {
        title: 'Unión Temporal Fessanjose Instituto Triángulo – EXPERTA Project | Data & Automation Analyst',
        paragraphs: [
          "Built Python and Selenium bots to automate the project's operational processes. Scripts for large-scale extraction, sorting and standardization of supporting documents, with 3,250 people certified through the program offered by Bogotá's Secretariat of Economic Development.",
          'Data management and analysis in Google Sheets using Apps Script for custom functions. Coordinated the call center team serving more than 10,000 enrolled participants.',
        ],
      },
      citywork: {
        title: 'CityWork | Web Developer & UI/UX Designer | SEO',
        paragraphs: [
          'Designed interfaces and graphic assets (banners, sections, visual identity) in Figma. Developed and deployed business websites with product catalogs based on my own designs. Managed content and structure in WordPress.',
        ],
      },
      periferia: {
        title: 'Periferia IT Group | Software Developer',
        paragraphs: [
          'Developed Generative AI solutions to automate business processes, integrating cloud services such as Azure and AWS.',
          'Built extensions for Chromium-based browsers, Power Automate workflows and large-scale data analysis systems that generate reports and recommendations.',
          'Collaborated in multidisciplinary teams using agile methodologies such as Scrum, with a focus on results and efficiency.',
        ],
      },
      personalProjects: {
        title: 'Personal projects | Independent Developer',
        paragraphs: [
          'Development of responsive websites, prioritizing user experience and compatibility across devices.',
          'Creation of indie games for mobile and desktop, covering both programming and visual design. These projects have strengthened my front-end skills, programming logic and development best practices.',
        ],
      },
    },
  },
  skills: {
    title: 'Technical Skills',
    frontend: {
      title: 'Frontend',
      description: 'Design of modern, responsive web interfaces with HTML, CSS, JavaScript, React and Tailwind. Development of Chromium browser extensions focused on improving the user experience.',
    },
    agile: {
      title: 'Agile Methodologies',
      description: 'Working within agile frameworks such as SCRUM, prioritizing constant collaboration and iterative delivery. I use Git and GitHub for version control, code management and efficient teamwork in distributed development environments.',
    },
    ai: {
      title: 'AI',
      description: 'Development of Generative AI and advanced analytics solutions, both on-premise and in the cloud, using services such as AWS Bedrock, Azure AI Services and Copilot Studio to automate processes and generate valuable business insights.',
    },
    backend: {
      title: 'Backend',
      description: 'Server-side logic, automation and data management with Python, Node.js, C++ and SQL. I have also worked with APIs to connect systems and with Power Automate to build flows that streamline tasks and improve operational efficiency.',
    },
    cloud: {
      title: 'Cloud',
      description: 'Implementation of scalable, secure and high-performance cloud solutions, focused on storage, compute and managed services.',
    },
    languages: {
      title: 'Languages',
      description: 'English (A2 level). Able to read and write in technical and collaborative contexts with international teams.',
    },
    design: {
      title: 'UI/UX Design',
      description: 'Interface design and prototyping in Figma, plus visual content creation and video editing with ClipChamp to support the presentation of digital solutions and products.',
    },
  },
  footer: {
    contact: 'Reach me on my socials',
    socialLabel: 'Social media',
    emailLabel: 'Send an email and copy the address',
    githubLabel: 'Visit GitHub profile',
    linkedinLabel: 'Visit LinkedIn profile',
    copied: 'Copied!',
  },
};

export default en;
