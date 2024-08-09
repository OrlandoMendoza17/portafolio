import React from 'react'
import { TbCode } from 'react-icons/tb'
import Badge from '../widgets/Badge'
import { TbBrandGithub } from "react-icons/tb";
import { LuLink } from "react-icons/lu";

const Proyects = () => {

  const projects = [
    {
      name: "SVGL - A beautiful library with SVG logos",
      description: "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
      cover: "https://porfolio.dev/projects/svgl.webp",
      link: "https://svgl.app/",
      repo: "https://github.com/pheralb/svgl",
    },
    {
      name: "AdventJS - Retos de programación con JavaScript y TypeScript",
      description: "Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50K retos completados. Creada desde cero con Next.js, React y Tailwind CSS.",
      cover: "https://porfolio.dev/projects/adventjs.webp",
      link: "https://adventjs.dev/es",
      repo: "",
    },
  ]

  return (
    <section className="Proyects">
      <h2><TbCode /> Proyectos</h2>
      <div className="Proyects__container">
        {
          projects.map(({ name, description, cover, repo, link }, index) =>
            <article className="Proyects__item" key={index}>
              <div className="rounded-[1.2rem] overflow-clip self-start">
                <img className="transition hover:scale-110" src={cover} alt="" />
              </div>
              <div>
                <h3 className="mb-2">{name}</h3>
                <div className="grid gap-4">
                  <ul className="flex gap-2">
                    <li>
                      <Badge name="Next.js" />
                    </li>
                    <li>
                      <Badge name="Tailwind CSS" />
                    </li>
                  </ul>
                  <p>{description}</p>
                  <div className="flex gap-4">
                    {
                      repo &&
                      <a href={repo} className="Proyects__button">
                        <TbBrandGithub size={20} />
                        Code
                      </a>
                    }
                    <a href={link} className="Proyects__button">
                      <LuLink  size={20}/> Preview
                    </a>
                  </div>
                </div>
              </div>
            </article>
          )
        }
      </div>

    </section>
  )
}

export default Proyects;