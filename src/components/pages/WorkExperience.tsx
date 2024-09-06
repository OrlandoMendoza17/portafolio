import React from 'react'
import { TbBriefcase, TbChevronRight } from "react-icons/tb";

const WorkExperience = () => {

  const workExperience = [
    {
      title: "Intern - Web Developer",
      place: "Alimentos Heinz C.A.",
      time: "Abril 2023 - Actualidad...",
      description: "Desarrollo de aplicaciones con Next.js, diseño de bases de datos en MySQL y SQL Server, escritura de consultas SQL optimizadas. Desarrollo de API REST con Express.js y Next.js, autenticación con JSON Web Tokens y Microsoft Authenticator.",
      link: "Saber más",
    },
    {
      title: "Main Frontend Developer",
      place: "Prinkipia",
      time: "Enero 2021 - Marzo 2023",
      description: "Desarrollo de aplicaciones con React.js y Next.js, configuración entornos de desarrollo con Webpack, optimización de velocidad de carga, implementación de arquitecturas CSS como BEM, plataformas de pago y despliegue de proyectos en Vercel, Netlify y Heroku.",
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
                <span className="text-5xl text-cyan-400 absolute left-[-4.2rem]">•</span>
                <h3>{title}</h3>
                <h4>{place}</h4>
                <time>{time}</time>
              </div>
              <div className="description">
                <p>{description}</p>
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