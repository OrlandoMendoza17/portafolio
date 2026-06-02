import { TbBriefcase } from "react-icons/tb";

const WorkExperience = () => {

  const workExperience = [
    {
      title: "Full Stack Web Developer",
      place: "Freelance",
      time: "Septiembre 2025 - Presente",
      description: [
        "Sistema de pagos, mensualidades automáticas y verificación de comprobantes.",
        "Calendario RFC 5545 con RRULE, overrides por ocurrencia y detección de conflictos.",
        "Implementación de Triggers y funciones PostgreSQL, RLS y multi-tenancy por club.",
        "Dashboard administrativo con CRUD completo, arquitectura type-safe (tRPC + Zod).",
        "Next.js 16, React 19, tRPC, Supabase y Tailwind para app de gestión deportiva.",
      ],
    },
    {
      title: "Product Engineer L1",
      place: "Trade EC",
      time: "Febrero 2025 - Agosto 2025",
      description: [
        "Facturación automatizada con generación de PDFs y cálculo de consumo por API usage.",
        "API consumption tracking con logging en tiempo real y billing analytics.",
        "Suite de pruebas E2E con Playwright para flujos críticos con CI/CD automatizado.",
        "Dashboard de analytics en tiempo real con métricas de negocio (MAU, RFM analysis).",
        "Monorepo con Next.js 15, React 19, TypeScript, tRPC v11, Supabase y Tailwind CSS v4.",
      ],
    },
    {
      title: "Full Stack Web Developer",
      place: "Freelance",
      time: "Octubre 2024 - Enero 2025",
      description: [
        "Desarrollo de aplicaciones con Next.js 15.",
        "Implementación de Supabase como BaaS.",
        "Creación de pruebas unitarias con Jest, Vitest y Testing Library.",
        "WebScrapping con Puppeteer.",
      ],
    },
    {
      title: "Web Developer - Pasantía",
      place: "Kraft Heinz",
      time: "Abril 2023 - Septiembre 2024",
      description: [
        "Diseño de tablas y estructuras de bases de datos (SQL Server).",
        "Escritura de consultas SQL optimizadas para la integración con otras aplicaciones.",
        "Autenticación con Single Sign On (Microsoft) y JSON Web Tokens.",
        "Automatización de procesos logísticos para departamentos de RRHH y Despacho.",
      ],
    },
    {
      title: "Frontend Developer",
      place: "Prinkipia",
      time: "Enero 2021 - Marzo 2023",
      description: [
        "Maquetación de páginas web con Responsive Design y arquitecturas CSS como BEM.",
        "Optimización de rendimiento de aplicaciones web.",
      ],
    },
  ]

  return (
    <section id="WorkExperience" className="WorkExperience">
      <h2> <TbBriefcase /> Experiencia laboral</h2>
      <ol className="WorkExperience__list">
        {
          workExperience.map(({ title, place, time, description }, index) =>
            <li className="WorkExperience__item" key={index}>
              <div className="title">
                <span className="">•</span>
                <h3>{title}</h3>
                <h4>{place}</h4>
                <time>{time}</time>
              </div>
              <div className="description">
                <ul>
                  {
                    description.map((item, index)=>
                      <li key={index}>{item}</li>
                    )
                  }
                </ul>
              </div>
            </li>
          )
        }
      </ol>
    </section>
  )
}

export default WorkExperience