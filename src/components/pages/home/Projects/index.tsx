import React from 'react'
import Badge from '../../../widgets/Badge'
import { TbCode } from 'react-icons/tb'
import { TbBrandGithub } from "react-icons/tb";
import { LuLink } from "react-icons/lu";
import { FaImages } from "react-icons/fa";
import ProjectItem, { type Project } from './ProjectItem';

const Projects = () => {

  const projects: Project[] = [
    // {
    //   name: "SVGL - A beautiful library with SVG logos",
    //   description: "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
    //   cover: "https://porfolio.dev/projects/svgl.webp",
    //   link: "https://svgl.app/",
    //   repo: "https://github.com/pheralb/svgl",
    //   resources: null,
    // },
    {
      name: "SIPVEH - Sistema de Información para el Pesaje de Vehículos",
      description: "Sistema encargado de llevar el control de entradas, salidas y peso de los vehículos de carga que ingresan a la empresa Alimentos Heinz C.A. <br/><br/> La aplicación cuenta con un sistema multirol con diferentes permisos según el rol del usuario.",
      cover: "https://i.imgur.com/9knXh6R.jpg",
      link: null,
      repo: null,
      resources: [
        {
          title: "Previsualización de vehículos por salir de la planta.",
          type: "image",
          url: "https://i.imgur.com/nlKhIMb.jpg",
        },
        {
          title: "Previsualización de vehículos en el área de Distribución desde la romana.",
          type: "image",
          url: "https://i.imgur.com/lEbcUpH.jpg",
        },
        {
          title: "Pesaje y registro de entrada de vehículo a la empresa.",
          type: "image",
          url: "https://i.imgur.com/9knXh6R.jpg",
        },
        {
          title: "Creación de nuevo vehículo en caso de que no se encontrara registrado en el sistema.",
          type: "image",
          url: "https://i.imgur.com/dXillLX.jpg",
        },
        {
          title: "Seleccionando empresa transportista en la creación de un nuevo vehículo.",
          type: "image",
          url: "https://i.imgur.com/nWLK2n9.jpg",
        },
        {
          title: "Visualización del historial de salidas de vehículos registradas.",
          type: "image",
          url: "https://i.imgur.com/rdihkSd.jpg",
        },
        {
          title: "Visualización de vehículos en Distribución desde el departamento de Facturación y Despacho.",
          type: "image",
          url: "https://i.imgur.com/ZnTcQ9Y.jpg",
        },
        {
          title: "Inducción al personal de la romana sobre el uso del sistema SIPVEH desde la romana.",
          type: "image",
          url: "https://i.imgur.com/CO5y5Ev.jpg",
        },
        {
          title: "Usuario de la romana realizando pesaje y registro de entrada de un vehículo a la empresa.",
          type: "image",
          url: "https://i.imgur.com/L11NUbe.jpg",
        },
        {
          title: "Inducción al personal del departamento de Transporte sobre el uso del sistema SIPVEH",
          type: "image",
          url: "https://i.imgur.com/IHJGq6Q.jpg",
        },
        {
          title: "Inducción al personal del departamento de Despacho sobre el uso del sistema SIPVEH.",
          type: "image",
          url: "https://i.imgur.com/k5ZjZJa.jpg",
        },
      ]
    },
  ]

  return (
    <section id="Projects" className="Projects">
      <h2><TbCode /> Proyectos</h2>
      <div className="Projects__container">
        {
          projects.map((project, index) =>
            <ProjectItem 
              key={index} 
              project={project} 
            />
          )
        }
      </div>

    </section>
  )
}

export default Projects;