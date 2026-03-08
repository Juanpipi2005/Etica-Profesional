import './App.css'

const authors = [
  {
    name: 'Sebastian Rios Restrepo',
    role: 'Ingeniería Informática - Octavo semestre',
    email: 'sriosr@correo.iue.edu.co',
    level: 'Inglés B1',
    photo: '',
  },
  {
    name: 'Juan Pablo Bernal Echeverry',
    role: 'Ingeniería Informática - Séptimo semestre',
    email: 'jpbernal@correo.iue.edu.co',
    level: 'Inglés B2',
    photo: '/autores/juan-pablo-bernal-echeverry.jpg',
  },
  {
    name: 'Brayan Enrique Trujillo Rodriguez',
    role: 'Ingeniería Informática - Noveno semestre',
    email: 'btrujillo@correo.iue.edu.co',
    level: 'Inglés B1',
    photo: '',
  },
]

const introBlocks = [
  {
    id: '01',
    title: '¿Para qué?',
    points: [
      'Promover decisiones técnicas con criterio ético.',
      'Proteger privacidad, seguridad y dignidad de las personas.',
      'Fortalecer la confianza en productos y servicios digitales.',
      'Reducir impactos negativos de la tecnología en la sociedad.',
    ],
  },
  {
    id: '02',
    title: '¿Cómo?',
    points: [
      'Aplicando códigos de conducta en cada fase del desarrollo.',
      'Evaluando riesgos sociales y sesgos en datos y algoritmos.',
      'Documentando decisiones y asegurando trazabilidad técnica.',
      'Trabajando con transparencia frente a usuarios y equipos.',
    ],
  },
  {
    id: '03',
    title: '¿Cuándo?',
    points: [
      'Desde el planteamiento del problema hasta el despliegue.',
      'Durante el diseño de arquitectura y de experiencia de usuario.',
      'En auditorías de seguridad, calidad y uso de IA.',
      'Cada vez que una decisión pueda afectar a terceros.',
    ],
  },
  {
    id: '04',
    title: '¿Dónde?',
    points: [
      'En desarrollo web, móvil, datos e infraestructura cloud.',
      'En universidades, empresas y proyectos de software libre.',
      'En sistemas públicos que gestionan información sensible.',
      'En cualquier entorno donde la tecnología impacte personas.',
    ],
  },
]

function App() {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <main>
      <nav className="top-nav">
        <a href="#inicio">Inicio</a>
        <a href="#autores">Autores</a>
        <a href="#justificacion">Justificación</a>
        <a href="#introduccion">Introducción</a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="hero-tag">Revista estudiantil</p>
          <h1>Normatividad Ética</h1>
          <h2>Enfoque en Ingeniería Informática</h2>
          <p className="institution">Institución Universitaria de Envigado</p>
          <div className="hero-actions">
            <a href="#justificacion">Leer justificación</a>
            <a href="#introduccion" className="ghost-link">
              Ver introducción
            </a>
          </div>
        </div>
      </section>

      <section className="authors section container" id="autores">
        <h3>Autores</h3>
        <div className="author-grid">
          {authors.map((author) => (
            <article key={author.name} className="author-card">
              <div className="photo-frame" aria-label={`Espacio de foto para ${author.name}`}>
                {author.photo ? (
                  <img
                    src={`${baseUrl}autores/${author.photo.split('/').pop()}`}
                    alt={`Foto de ${author.name}`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                      const fallback = event.currentTarget.nextElementSibling
                      if (fallback) fallback.style.display = 'grid'
                    }}
                  />
                ) : null}
                <span className="photo-fallback" style={!author.photo ? { display: 'grid' } : undefined}>
                  {author
                    .name.split(' ')
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join('')}
                </span>
              </div>
              <h4>{author.name}</h4>
              <p>{author.role}</p>
              <p>{author.email}</p>
              <p>{author.level}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-contrast" id="justificacion">
        <div className="container">
          <h3>Justificación</h3>
          <p>
            La presente revista electrónica se desarrolla con el propósito de reflexionar sobre la
            importancia de la ética profesional en el ejercicio de la Ingeniería Informática,
            especialmente en un contexto donde la tecnología tiene un impacto creciente en la sociedad.
          </p>
          <p>
            Este proyecto surge debido a la necesidad de fortalecer la formación ética de los futuros
            profesionales, quienes enfrentan constantemente dilemas relacionados con el uso responsable
            de la información, la seguridad digital, la privacidad de los datos y el desarrollo de
            tecnologías que influyen directamente en la vida de las personas. Por esta razón, resulta
            fundamental analizar las normativas y principios éticos que orientan el ejercicio de la
            ingeniería informática, promoviendo una actuación profesional responsable y comprometida con
            el bienestar social.
          </p>
          <p>
            El objetivo principal de esta revista es promover la reflexión crítica y el conocimiento de
            las normativas éticas y profesionales, permitiendo a los estudiantes comprender la
            importancia de actuar con responsabilidad, honestidad y respeto en el desarrollo de
            soluciones tecnológicas.
          </p>
          <p>
            Para el desarrollo de este trabajo se realizará una recopilación y análisis de información
            proveniente de fuentes académicas, documentos institucionales y códigos de ética
            relacionados con la profesión, organizando los contenidos de manera que facilite su
            comprensión mediante textos, imágenes e información estructurada.
          </p>
          <p>
            Este proyecto se desarrolla durante el semestre académico 2026-1, en el marco de la
            asignatura Ética Profesional, y se lleva a cabo en la Institución Universitaria de Envigado,
            con el fin de aportar al proceso formativo de los estudiantes y fomentar una cultura ética
            dentro del ámbito tecnológico y profesional.
          </p>
        </div>
      </section>

      <section className="section container" id="introduccion">
        <h3>Introducción</h3>
        <div className="intro-grid">
          {introBlocks.map((block) => (
            <article key={block.id} className="intro-card">
              <p className="intro-id">{block.id}</p>
              <div className="intro-box">{block.title}</div>
              <ul>
                {block.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Proyecto académico - Ética Profesional - Ingeniería Informática</p>
        <p>Semestre 2026-1 | Institución Universitaria de Envigado</p>
      </footer>
    </main>
  )
}

export default App
