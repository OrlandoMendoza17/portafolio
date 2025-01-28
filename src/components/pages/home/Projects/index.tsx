import React from 'react'
import Badge from '../../../widgets/Badge'
import { TbCode } from 'react-icons/tb'
import { TbBrandGithub } from "react-icons/tb";
import { LuLink } from "react-icons/lu";
import { FaImages } from "react-icons/fa";
import ProjectItem, { type Project } from './ProjectItem';

const Projects = () => {

  const projects: Project[] = [
    {
      name: "PlatziClon - Plataforma de aprendizaje profesional online",
      description: "Clon del sitio web y navegación de Platzi, la plataforma de educación profesional en línea. <br/><br/> Se aplicó Web Scrapping con Puppeteer para la recolección de los datos y se usó Supabase como BaaS para el almacenamiento de los datos.",
      cover: "https://i.imgur.com/SywqE0s.png",
      link: "https://platzi-clon-alpha.vercel.app/",
      repo: "https://github.com/OrlandoMendoza17/Platzi-Clon",
      technologies: [
        "Next.js", "Tailwind CSS", "Supabase", "Puppeteer"
      ],
      resources: null,
    },
    {
      name: "SIPVEH - Sistema de Información para el Pesaje de Vehículos",
      description: "Sistema encargado de llevar el control de entradas, salidas y peso de los vehículos de carga que ingresan a la empresa Alimentos Heinz C.A. <br/><br/> La aplicación cuenta con un sistema multirol con diferentes permisos según el rol del usuario.",
      cover: "https://i.imgur.com/fOSZzaU.jpg",
      link: null,
      repo: null,
      technologies: [
        "Next.js", "Tailwind CSS", "SQL Server"
      ],
      resources: [
        {
          title: "Previsualización de vehículos por salir de la planta.",
          type: "image",
          url: "https://i.imgur.com/XfglCwl.png",
        },
        {
          title: "Previsualización de vehículos en el área de Distribución desde la romana.",
          type: "image",
          url: "https://i.imgur.com/fOSZzaU.jpg",
        },
        {
          title: "Pesaje y registro de entrada de vehículo a la empresa.",
          type: "image",
          url: "https://i.imgur.com/azYcaf1.png",
        },
        {
          title: "Creación de nuevo vehículo en caso de que no se encontrara registrado en el sistema.",
          type: "image",
          url: "https://i.imgur.com/cZKwMaa.png",
        },
        {
          title: "Seleccionando empresa transportista en la creación de un nuevo vehículo.",
          type: "image",
          url: "https://i.imgur.com/Nj0a7TI.png",
        },
        {
          title: "Empresa transportista seleccionada en la creación de un nuevo vehículo.",
          type: "image",
          url: "https://i.imgur.com/kGu5fKB.png",
        },
        {
          title: "Creación de nuevo chofer en caso de que no se encontrara registrado en el sistema.",
          type: "image",
          url: "https://i.imgur.com/SAZdC0u.png",
        },
        {
          title: "Pesaje y registro de salida de vehículo de la empresa.",
          type: "image",
          url: "https://i.imgur.com/XowxLhQ.png",
        },
        {
          title: "Visualización del historial de salidas de vehículos registradas.",
          type: "image",
          url: "https://i.imgur.com/7vDDVKo.png",
        },
        {
          title: "Generación en PDF de nota de salida de vehículo.",
          type: "image",
          url: "https://i.imgur.com/8bh2Buy.png",
        },
        {
          title: "Visualización de vehículos en Distribución desde el departamento de Facturación y Despacho.",
          type: "image",
          url: "https://i.imgur.com/qijVPMs.jpg",
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
        {
          title: "Celebrando el despliegue exitoso de la aplicación SIPVEH en la plataforma en la nube Microsoft Azure junto a la gerente de IT y mi compañero de proyecto.",
          type: "image",
          url: "https://i.imgur.com/pJ0jMbG.jpg",
        },
      ]
    },
    {
      name: "Heinz Product Loading App - Aplicación de carga de productos ",
      description: "Sistema encargado de asignación y carga de productos de la empresa a los empleados mensual y semanalmente como beneficio del contrato colectivo.",
      cover: "https://i.imgur.com/7xXgkSn.png",
      // cover: "https://i.imgur.com/0NFSwll.png",
      link: null,
      repo: null,
      technologies: [
        "Next.js", "Tailwind CSS", "SQL Server"
      ],
      resources: [
        {
          title: "Visualización de productos (SKUs) para preselección",
          type: "image",
          url: "https://i.imgur.com/7xXgkSn.png",
        },
        {
          title: "Búsqueda de productos por SKU",
          type: "image",
          url: "https://i.imgur.com/4p0s1Q0.png",
        },
        {
          title: "Visualización de productos en el carrito.",
          type: "image",
          url: "https://i.imgur.com/Cd6p7cA.png",
        },
        {
          title: "Previsualización de selección de empleados a los que serán cargados los productos.",
          type: "image",
          url: "https://i.imgur.com/Cldc5S0.png",
        },
        {
          title: "Seleccionando empleados.",
          type: "image",
          url: "https://i.imgur.com/S4wbJYW.png",
        },
        {
          title: "Ingresando número de orden de compra y fecha.",
          type: "image",
          url: "https://i.imgur.com/kCJLh7v.png",
        },
        {
          title: "Estableciendo cantidad de cajas por producto.",
          type: "image",
          url: "https://i.imgur.com/2QegGqx.png",
        },
        {
          title: "Previsualización de facturas de orden de compra.",
          type: "image",
          url: "https://i.imgur.com/7mS2CWO.png",
        },
        {
          title: "En caso de que sean muchos empleados seleccionados, se desplegara una barra de progreso debido a la naturaleza del sistema ya serían muchas peticiones.",
          type: "image",
          url: "https://i.imgur.com/BAEJlgK.jpg",
        },
        {
          title: "Orden de compra generada con éxito.",
          type: "image",
          url: "https://i.imgur.com/vTmgG4N.png",
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