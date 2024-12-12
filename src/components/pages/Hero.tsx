import React from 'react'
import { TbBrandLinkedin } from "react-icons/tb";
import { TbMailForward } from "react-icons/tb";

const Hero = () => {
  
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/orlandomanuel-mendozavargas/", "_blank")
  }
  
  return (
    <section id="Hero" className="Hero">
      <div className="max-w-[57.6rem]">
        <div className="flex items-center gap-4">
          <img width={64} className="rounded-full" src="https://i.imgur.com/Mwa6f6H.jpg" alt="" />
          <button className="Hero__call-to-action" onClick={handleClick}>
            Disponible para trabajar
          </button>
        </div>
        <h1 className="pt-4 text-4xl min-[640px]:text-5xl font-bold tracking-[-.12rem] ">Hey, soy Orlando</h1>
        <p className="pt-6 text-xl">+3 años de experiencia. <span className="font-semibold featured">Frontend Developer e Ingeniero en Información</span> de Carabobo, Venuezuela. Especializado en el desarrollo de aplicaciones web únicas.</p>
        <div className="mt-8 flex gap-4">
          <a href="mailto:ommv.17@gmail.com" className="Button">
            <TbMailForward /> Contáctame
          </a>
          <a href="https://www.linkedin.com/in/orlandomanuel-mendozavargas/" className="Button" target="_blank">
            <TbBrandLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero