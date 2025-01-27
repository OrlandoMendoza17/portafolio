import React from 'react'

const Footer = () => {
  return (
    <footer className="pb-10 pt-16 px-4 text-sm">
      <div className="sm:py-4 flex sm:justify-between gap-6">
        <span>
          © 2024 midudev. Casi todos los derechos reservados</span>
        <div className="hidden sm:flex gap-6 justify-end">
          <a href="">Sobre mí</a>
          <a href="">Contacto</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer