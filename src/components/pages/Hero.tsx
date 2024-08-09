import React from 'react'
import { TbBrandLinkedin } from "react-icons/tb";
import { TbMailForward } from "react-icons/tb";


const Hero = () => {
  return (
    <section className='py-16 md:py-36 mx-auto'>
      <div className="max-w-[57.6rem]">
        <div className="flex items-center gap-4">
          <img width={64} className="rounded-full" src="https://media.licdn.com/dms/image/D4E03AQEjTZ1mzHMHSQ/profile-displayphoto-shrink_800_800/0/1721670935297?e=1727913600&v=beta&t=OITOYWCmT05BTv6Nwf8u2FaxTyWYVdjmZLQF1mf6LzA" alt="" />
          <button className="text-sm py-1 px-3 bg-green-100 text-green-800 rounded-full border border-green-800 hover:scale-105 transition">
            Disponible para trabajar
          </button>
        </div>
        <h1 className="pt-4 text-4xl min-[640px]:text-5xl font-bold tracking-[-.12rem] ">Hey, soy Orlando</h1>
        <p className="pt-6 text-xl">+15 años de experiencia. <span className="font-semibold featured">Ingeniero de Software y Creador de Contenido sobre Programación</span> de Barcelona, España 🇪🇸. Especializado en el desarrollo de aplicaciones web únicas.</p>
        <div className="mt-8 flex gap-4">
          <a href="mailto:ommv.17@gmail.com" className="Button"><TbMailForward /> Contáctame</a>
          <a href="https://www.linkedin.com/in/orlandomanuel-mendozavargas/" target="_blank" className="Button" ><TbBrandLinkedin /> LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Hero