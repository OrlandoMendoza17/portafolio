import { useState } from "react";
import { TbBriefcase, TbChevronDown, TbChevronUp } from "react-icons/tb";
import Badge, { BadgeType } from "@/components/widgets/Badge";

type WorkExperienceItem = {
  title: string;
  place: string;
  time: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: BadgeType[];
};

const workExperience: WorkExperienceItem[] = [
  {
    title: "Full Stack Web Developer",
    place: "Freelance",
    time: "Octubre 2024 - Presente",
    current: true,
    summary:
      "App de gestión deportiva con pagos recurrentes, calendario complejo y panel admin multi-club.",
    highlights: [
      "Desarrollé arquitectura para pagos recurrentes y verificación automática de comprobantes en producción.",
      "Construí dashboard administrativo full-stack con arquitectura type-safe (tRPC + Zod).",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "tRPC",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
  },
  {
    title: "Product Engineer L1",
    place: "Trade EC",
    time: "Febrero 2025 - Agosto 2025",
    summary:
      "Plataforma B2B de facturación y analytics en monorepo Next.js.",
    highlights: [
      `Desarrollé custom links con integracion de "Open Graph" para la creación de campañas de marketing.`,
      "Automaticé procesos de facturación end-to-end: PDFs, consumo por API y tracking en tiempo real.",
      "Creé flujos críticos de testeo con E2E (Playwright) integrado a CI/CD.",
      "Desarrollé dashboard de métricas de negocio (MAU, análisis RFM).",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "tRPC",
      "Supabase",
      "Playwright",
      "Tailwind CSS",
    ],
  },
  {
    title: "Web Developer - Pasantía",
    place: "Kraft Heinz",
    time: "Abril 2023 - Septiembre 2024",
    summary:
      "Desarrollo web interno para automatizar operaciones logísticas.",
    highlights: [
      "Automatizé procesos de RRHH y Despacho con integraciones a aplicaciones de terceros.",
      "Diseñé estructuras en SQL Server, consultas optimizadas y autenticación SSO (Microsoft).",
    ],
    stack: ["Next.js", "SQL Server", "JWT", "Azure"],
  },
  {
    title: "Frontend Developer",
    place: "Prinkipia",
    time: "Enero 2021 - Marzo 2023",
    summary:
      "Desarrollo frontend para productos web (Buenos Aires, remoto).",
    highlights: [
      "UI responsive, optimización de rendimiento y arquitectura CSS con BEM.",
    ],
    stack: ["React", "Next.js"],
  },
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="WorkExperience" className="WorkExperience">
      <h2>
        <TbBriefcase /> Experiencia laboral
      </h2>
      <ol className="WorkExperience__list">
        {workExperience.map(
          ({ title, place, time, current, summary, highlights, stack }, index) => {
            const isExpanded = !!expanded[index];
            const hasHighlights = highlights.length > 0;

            return (
              <li className="WorkExperience__item" key={index}>
                <div className="title">
                  <span className="WorkExperience__marker">•</span>
                  <h3>{title}</h3>
                  <h4>{place}</h4>
                  <time>
                    {time}
                    {current && (
                      <span className="WorkExperience__badge">Actual</span>
                    )}
                  </time>
                </div>
                <div className="description">
                  <p className="WorkExperience__summary">{summary}</p>
                  {hasHighlights && (
                    <button
                      type="button"
                      className="WorkExperience__toggle"
                      onClick={() => toggleExpanded(index)}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? (
                        <>
                          Ver menos <TbChevronUp />
                        </>
                      ) : (
                        <>
                          Ver más <TbChevronDown />
                        </>
                      )}
                    </button>
                  )}
                  {isExpanded && hasHighlights && (
                    <ul className="WorkExperience__highlights">
                      {highlights.map((item, highlightIndex) => (
                        <li key={highlightIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <div className="WorkExperience__tags">
                    {stack.map((tech) => (
                      <Badge name={tech} key={tech} />
                    ))}
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ol>
    </section>
  );
};

export default WorkExperience;
