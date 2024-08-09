import React from 'react'
import { TbBriefcase, TbChevronRight } from "react-icons/tb";

const WorkExperience = () => {

  const workExperience = [
    {
      title: "Creador de Contenido",
      place: "Twitch",
      time: "Actualmente...",
      description: "Divulgo sobre programación y desarrollo web en diferentes plataformas. Galardonado como mejor creador de contenido de habla no-inglesa en 2022 y mejor comunidad en 2023 por GitHub.",
      link: "Saber más",
    },
    {
      title: "Principal Frontend Engineer",
      place: "Adevinta Spain",
      time: "Septiembre 2022",
      description: "Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos.",
      link: null,
    },
  ]

  return (
    <section className="WorkExperience">
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