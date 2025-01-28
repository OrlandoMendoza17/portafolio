import { TbBriefcase, TbChevronRight } from "react-icons/tb";

const WorkExperience = () => {

  const workExperience = [
    {
      title: "FullStack Web Developer",
      place: "Freelance",
      time: "Octubre 2024 - Actualidad...",
      description: [
        "Desarrollo de aplicaciones con Next.js 15.",
        "Diseño de bases de datos con PostgreSQL.",
        "Implementación de Supabase como BaaS.",
        "Manejo y gestión de contenedores con Docker y DockerCompose.",
        "Creación de pruebas unitarias con Jest y Vitest.",
        "WebScrapping con Puppeter.",
      ],
      // link: "Saber más",
    },
    {
      title: "Intern - Web Developer",
      place: "Alimentos Heinz C.A.",
      time: "Abril 2023 - Septiembre 2024",
      description: [
        "Desarrollo de aplicaciones con Next.js 14.",
        "Diseño de bases de datos en MySQL y SQL Server.",
        "Escritura de consultas SQL optimizadas.",
        "Desarrollo de API REST con Express.js y Next.js.",
        "Autenticación con JSON Web Tokens y Microsoft Single Sign On.",
        "Despliegue de aplicaciones en Web App Service de Microsoft Azure.",
      ],
      // link: "Saber más",
    },
    {
      title: "Main Frontend Developer",
      place: "Prinkipia",
      time: "Enero 2021 - Marzo 2023",
      description: [
        "Desarrollo de aplicaciones con React.js y Next.js. 12 y 13.",
        "Configuración entornos de desarrollo con Webpack.",
        "Optimización de velocidad de carga.",
        "Implementación de arquitecturas CSS como BEM.",
        'Autenticación con "OAuth 2.0".',
        "Implementación de pasarelas de pago (MercadoPago y Paypal) y despliegue de proyectos en Vercel, Netlify y Heroku.",
      ],
      link: null,
    },
  ]

  return (
    <section id="WorkExperience" className="WorkExperience">
      <h2> <TbBriefcase /> Experiencia laboral</h2>
      <ol className="WorkExperience__list">
        {
          workExperience.map(({ title, place, time, description, link }, index) =>
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
                {
                  link &&
                  <a href="" className="flex items-center"> <span>{link}</span> <TbChevronRight className="w-5 h-6" /></a>
                }
              </div>
            </li>
          )
        }
      </ol>
    </section>
  )
}

export default WorkExperience