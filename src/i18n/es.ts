// Textos en español. Es el idioma por defecto y define la forma (tipo) que
// deben respetar los demás diccionarios.
const es = {
  meta: {
    title: 'Sebastian Cardoso | Portfolio',
    description: 'Portafolio de Sebastian Cardoso, técnico en desarrollo de software: experiencia en desarrollo web, automatización e IA generativa, conocimientos técnicos y contacto.',
    ogLocale: 'es_CO',
  },
  nav: {
    label: 'Principal',
    home: 'Inicio',
    experience: 'Experiencia',
    skills: 'Habilidades',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    switchLanguage: 'Ver el sitio en inglés',

  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Técnico en desarrollo de Software',
    tagline: 'Con una mirada innovadora, no hay límites para explorar nuevas formas de ver y construir el mundo.',
    available: 'Disponible para trabajar',
    experienceYears: '+1 Año de experiencia',
  },
  experience: {
    title: 'Experiencia',
    downloadCv: 'Descarga mi CV',
    cvHref: '/Hoja de Vida Tecnica Juan Sebastian Cardoso Cardona.pdf',
    jobs: {
      unionTemporal: {
        title: 'Unión Temporal Fessanjose Instituto Triángulo – Proyecto EXPERTA | Analista de Datos y Automatización',
        paragraphs: [
          'Desarrollo de bots con Python y Selenium para automatizar procesos operativos del proyecto. Scripts de extracción, segregación y estandarización masiva de evidencias documentales, con 3.250 personas certificadas dentro del programa, ofrecido por la Secretaria de Desarrollo Economico de Bogotá D.C.',
          'Gestión y análisis de datos en Google Sheets con App Scripts para funciones personalizadas. Coordinación del área de call center para atención a más de 10.000 matriculados.',
        ],
      },
      citywork: {
        title: 'CityWork | Desarrollador Web y Diseñador UI/UX | SEO',
        paragraphs: [
          'Diseño de interfaces y piezas gráficas (banners, secciones, identidad visual) en Figma. Desarrollo e implementación de sitios web empresariales con catálogos a partir de los diseños propios. Gestión de contenido y estructura en WordPress.',
        ],
      },
      periferia: {
        title: 'Periferia IT Group | Desarrollador de Software',
        paragraphs: [
          'Experiencia en el desarrollo de soluciones con Inteligencia Artificial Generativa para la automatización de procesos empresariales, integrando servicios en la nube como Azure y AWS.',
          'Implementación de extensiones para navegadores basados en Chromium, automatizaciones con Power Automate y sistemas de análisis de datos a gran escala para generar reportes y recomendaciones.',
          'Trabajo colaborativo en equipos multidisciplinarios bajo metodologías ágiles como Scrum, con enfoque en resultados y eficiencia.',
        ],
      },
      personalProjects: {
        title: 'Proyectos personales | Desarrollador Independiente',
        paragraphs: [
          'Desarrollo de páginas web con diseño responsive, priorizando la experiencia del usuario y la compatibilidad en distintos dispositivos.',
          'Creación de videojuegos indie para móviles y computadores, abarcando tanto la programación como el diseño visual. Estos proyectos han permitido fortalecer habilidades en front-end, lógica de programación y buenas prácticas de desarrollo en entornos personales.',
        ],
      },
    },
  },
  skills: {
    title: 'Conocimientos Técnicos',
    frontend: {
      title: 'Frontend',
      description: 'Diseño de interfaces web modernas y responsivas con HTML, CSS, JavaScript, React y Tailwind. Creación de extensiones para navegadores Chromium orientadas a mejorar la experiencia del usuario.',
    },
    agile: {
      title: 'Metodologías Ágiles',
      description: 'Trabajo bajo marcos ágiles como SCRUM, priorizando la colaboración constante y las entregas iterativas. Utilizo Git y GitHub para control de versiones, gestión de código y trabajo colaborativo eficiente en entornos de desarrollo distribuidos.',
    },
    ai: {
      title: 'IA',
      description: 'Desarrollo de soluciones con Inteligencia Artificial Generativa y analítica avanzada, tanto en entornos on-premise como en la nube, utilizando servicios como AWS Bedrock, Azure AI Services y Copilot Studio para automatizar procesos y generar insights valiosos para el negocio.',
    },
    backend: {
      title: 'Backend',
      description: 'Implementación de lógica de servidor, automatización y gestión de datos con Python, Node.js, C++ y SQL. También he trabajado con APIs para conectar sistemas y con Power Automate para crear flujos que optimizan tareas y mejoran la eficiencia operativa.',
    },
    cloud: {
      title: 'Cloud',
      description: 'Implementación de soluciones escalables, seguras y de alto rendimiento en la nube, con enfoque en almacenamiento, cómputo y servicios gestionados.',
    },
    languages: {
      title: 'Idiomas',
      description: 'Inglés (Nivel A2). Capacidad de comprensión y comunicación escrita en contextos técnicos y colaborativos de alcance internacional.',
    },
    design: {
      title: 'Diseño UI UX',
      description: 'Diseño de interfaces y prototipos en Figma, además de creación de contenido visual y edición multimedia con ClipChamp para apoyar la presentación de soluciones y productos digitales.',
    },
  },
  footer: {
    contact: 'Contáctame por mis redes',
    socialLabel: 'Redes sociales',
    emailLabel: 'Enviar correo y copiar la dirección',
    githubLabel: 'Visitar perfil de GitHub',
    linkedinLabel: 'Visitar perfil de LinkedIn',
    copied: '¡Copiado!',
  },
};

export type Dictionary = typeof es;
export default es;
