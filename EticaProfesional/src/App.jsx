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

const referentes = [
  {
    id: 'referente-1',
    title: 'Referente 1: Fundamentos Filosóficos de la Ética',
    paragraphs: [
      'La ética, como disciplina filosófica, encuentra sus bases en tres grandes corrientes del pensamiento occidental que han marcado profundamente la comprensión humana de la moral y la conducta correcta. Aristóteles, en su Ética a Nicómaco, propone la ética de la virtud, donde el bien supremo es la eudaimonía o florecimiento humano, alcanzada mediante el cultivo de virtudes como la prudencia, la justicia y la valentía.',
      'Immanuel Kant fundamenta la moral en la razón pura. Su imperativo categórico establece que se debe actuar únicamente según aquella máxima que se pudiera desear que se convirtiera en ley universal. La ética kantiana es deontológica: el valor moral de una acción no depende de sus consecuencias, sino del deber y la intención con que se realiza.',
      'John Stuart Mill, desde el utilitarismo, propone que la acción moralmente correcta es aquella que produce el mayor bienestar para el mayor número de personas. Este enfoque invita a evaluar decisiones profesionales según su impacto real sobre el bienestar colectivo.',
      'En la ingeniería informática, estos enfoques se complementan: la virtud orienta la integridad profesional, el imperativo kantiano guía el respeto por los datos y la privacidad, y el utilitarismo ayuda a evaluar el impacto social de una solución tecnológica antes de implementarla.',
    ],
    aporte:
      'Este referente proporciona el marco conceptual de la revista y permite analizar con mayor profundidad los dilemas éticos de la ingeniería informática.',
    references: [
      'Aristóteles. (2014). Ética a Nicómaco (T. Martínez Manzano, Trad.). Gredos. (Trabajo original publicado ca. 350 a.C.).',
      'Kant, I. (2007). Fundamentación de la metafísica de las costumbres (M. García Morente, Trad.). Espasa-Calpe. (Trabajo original publicado en 1785).',
      'Mill, J. S. (2014). El utilitarismo (E. Guisán, Trad.). Alianza Editorial. (Trabajo original publicado en 1863).',
    ],
  },
  {
    id: 'referente-2',
    title: 'Referente 2: Ética Profesional y Responsabilidad Social',
    paragraphs: [
      'El ejercicio de cualquier profesión implica no solo el dominio técnico, sino también el compromiso con principios éticos que regulan la relación entre el profesional, sus clientes, colegas y la sociedad.',
      'En ingeniería informática, los códigos éticos de ACM e IEEE establecen deberes fundamentales: actuar en interés público, evitar el daño, ser transparentes y respetar la privacidad. Estos códigos expresan un compromiso real con la comunidad.',
      'La responsabilidad social trasciende el cumplimiento normativo. Un sistema mal diseñado puede excluir poblaciones vulnerables, un algoritmo sesgado puede perpetuar injusticias y una brecha de seguridad puede afectar a miles de personas.',
      'El bien común recuerda que el ejercicio profesional no es un fin en sí mismo, sino un medio para contribuir al bienestar colectivo.',
    ],
    aporte:
      'Este referente permite conectar teoría ética con casos reales y mostrar que ética y responsabilidad social son condiciones para una innovación legítima y sostenible.',
    references: [
      'Association for Computing Machinery. (2018). ACM code of ethics and professional conduct. https://www.acm.org/code-of-ethics',
      'IEEE. (2020). IEEE code of ethics. https://www.ieee.org/about/corporate/governance/p7-8.html',
      'Argandoña, A. (2011). El bien común. IESE Business School Working Paper, (937), 1-16. https://doi.org/10.2139/ssrn.1913822',
    ],
  },
  {
    id: 'referente-3',
    title: 'Referente 3: Deontología y Normatividad en la Práctica Profesional',
    paragraphs: [
      'La deontología profesional se ocupa de los deberes y obligaciones específicos del ejercicio de una profesión. A diferencia de la ética general, se concreta en normas, códigos y regulaciones aplicadas a situaciones particulares.',
      'En Colombia, la Ley 842 de 2003 regula el ejercicio de la ingeniería y la Ley 1273 de 2009 tipifica conductas relacionadas con delitos informáticos, como acceso no autorizado, interceptación de datos y daño informático.',
      'Los códigos deontológicos funcionan como puente entre principios éticos y práctica concreta: deber de confidencialidad, obligación de advertir riesgos, y responsabilidad de mantenerse actualizado en un campo de cambio acelerado.',
      'La ética y la normatividad se complementan: la ley establece mínimos obligatorios y la ética profesional orienta estándares más altos de excelencia y convicción.',
    ],
    aporte:
      'Este referente acerca el marco legal y deontológico al contexto cotidiano del estudiante y fomenta una cultura de cumplimiento ético más allá de la sanción.',
    references: [
      'Congreso de Colombia. (2003, 13 de noviembre). Ley 842 de 2003, por la cual se modifica la reglamentación del ejercicio de la ingeniería. Diario Oficial 45.340.',
      'Congreso de Colombia. (2009, 5 de enero). Ley 1273 de 2009, por medio de la cual se modifica el Código Penal, creando un nuevo bien jurídico tutelado denominado de la protección de la información y de los datos. Diario Oficial 47.223.',
      'Colegio Colombiano de Ingenieros. (2020). Código de ética profesional del ingeniero colombiano. https://www.copnia.gov.co',
    ],
  },
  {
    id: 'referente-4',
    title: 'Referente 4: Ética, Tecnología y Sociedad',
    paragraphs: [
      'El avance tecnológico ha generado transformaciones profundas, pero también desafíos éticos sin precedentes. La inteligencia artificial, el Big Data y las redes sociales no son tecnologías neutras: incorporan decisiones sobre valores y poder.',
      'La IA plantea preguntas sobre autonomía, responsabilidad y justicia. Es clave preguntarse quién responde ante decisiones automatizadas dañinas y cómo evitar sesgos en algoritmos y datos de entrenamiento.',
      'El Big Data introduce tensiones entre el valor del conocimiento y el derecho a la privacidad. La recolección masiva de datos permite predicciones útiles, pero también puede facilitar vigilancia y discriminación algorítmica.',
      'La innovación responsable exige diseñar tecnología considerando derechos humanos, inclusión y sostenibilidad desde la etapa de diseño.',
    ],
    aporte:
      'Este referente impulsa debates actuales sobre IA responsable, privacidad digital y regulación tecnológica, conectando la formación académica con retos reales del entorno profesional.',
    references: [
      'Gullo-Martínez. (2026). Big Data y su impacto en el ejercicio del profesional. Repositorio UCC, 1, 150. https://repository.ucc.edu.co/server/api/core/bitstreams/4ecf26f5-7786-4dff-ad21-c13172bb648e/content',
      'Floridi, L., & Chiriatti, M. (2020). GPT-3: Its nature, scope, limits, and consequences. Minds and Machines, 30(4), 681-694. https://doi.org/10.1007/s11023-020-09548-1',
      'Comisión Europea. (2021). Propuesta de reglamento del Parlamento Europeo sobre inteligencia artificial. https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:52021PC0206',
    ],
  },
  {
    id: 'referente-5',
    title: 'Referente 5: Formación Ética y Liderazgo Transformador',
    paragraphs: [
      'La formación ética no concluye al aprender normas o principios abstractos. Su propósito es desarrollar profesionales capaces de tomar decisiones justas, ejercer influencia positiva y liderar con integridad.',
      'El liderazgo transformacional inspira y motiva por medio del ejemplo, la visión compartida y el compromiso con valores superiores, no solo por autoridad formal.',
      'En ingeniería informática, el liderazgo ético se refleja en quien no solo crea soluciones eficientes, sino que también cuestiona su propósito, evalúa impactos en las personas y asume responsabilidad por sus decisiones.',
      'Las competencias éticas y de liderazgo hoy son factores determinantes de empleabilidad y sostenibilidad profesional en contextos globalizados.',
    ],
    aporte:
      'Este referente cierra el ciclo temático invitando a la comunidad universitaria a verse como futuros líderes éticos con impacto social.',
    references: [
      'Consugera, V. (2006). Las competencias profesionales siempre han sido parte vital de la empleabilidad. IUE, 5. https://repositorio.usil.edu.pe/server/api/core/bitstreams/2f64823f-ea93-476a-af7f-a8030ef57b1b/content',
      'Edenit, D. C. (2026). Construyendo sociedades: El liderazgo transformacional en la formación profesional del trabajador social. Ciencia y Educación, 153. https://cienciayeducacion.com/index.php/journal/article/view/zenodo.17926286/2611',
      'Velasco, J. (2026). Liderazgo transformacional y emprendimiento. SETP, 4(8). https://doi.org/10.55965/setp.4.08.uady.a4',
    ],
  },
]

function App() {
  const baseUrl = import.meta.env.BASE_URL
  const imagenBalanzaEtica = `${baseUrl}imagenes/balanza-etica.jpg`
  const imagenContextoCiber = `${baseUrl}imagenes/contexto-ciberseguridad.jpg`

  return (
    <main>
      <nav className="top-nav">
        <a href="#inicio">Inicio</a>
        <a href="#autores">Autores</a>
        <a href="#justificacion">Justificación</a>
        <a href="#introduccion">Introducción</a>
        <a href="#referentes">Referentes</a>
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
          <div className="justificacion-layout">
            <div>
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
            <figure className="support-figure">
              <img
                src={imagenBalanzaEtica}
                alt="Ilustración de equilibrio ético entre tecnología e innovación"
                loading="lazy"
              />
              <figcaption>Ética e innovación deben avanzar en equilibrio.</figcaption>
            </figure>
          </div>
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

      <section className="section section-soft" id="referentes">
        <div className="container">
          <h3>Referentes Teóricos</h3>
          <figure className="context-hero">
            <img
              src={imagenContextoCiber}
              alt="Entorno de trabajo tecnológico con enfoque en seguridad digital"
              loading="lazy"
            />
            <figcaption>
              El análisis ético también responde a riesgos reales en ciberseguridad, datos y diseño de software.
            </figcaption>
          </figure>
          <div className="referentes-stack">
            {referentes.map((referente) => (
              <article key={referente.id} className="referente-card">
                <h4>{referente.title}</h4>
                <div className="referente-body">
                  {referente.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="referente-aporte">
                  <h5>Aporte a la Revista Digital</h5>
                  <p>{referente.aporte}</p>
                </div>
                <div className="referente-referencias">
                  <h5>Referencias</h5>
                  <ul>
                    {referente.references.map((reference) => (
                      <li key={reference}>{reference}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
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
