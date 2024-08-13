import { Onest, } from 'next/font/google'
import React from 'react'
import { VscAccount } from 'react-icons/vsc'

const onest = Onest({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})

const AboutMe = () => {
  return (
    <section id="AboutMe" className="AboutMe">
      <h2><VscAccount /> Sobre mí</h2>
      <article>
        <div className='order-2 md:order-1'>
          <p>Me llamo Miguel Ángel pero mis amigos me llaman midu. Empecé en la programación con un Amstrad, tenía 10 años. Actualmente estoy <strong className="featured dark:text-cyan-400">liderando equipos de desarrollo en multinacionales</strong>.</p>
          <p>Algunos de mis éxitos incluyen <strong className="featured dark:text-cyan-400">colaborar con Mozilla para el desarrollo de las primeras apps en su sistema FirefoxOS</strong>. Aunque hoy está desaparecido fue un gran avance en el mundo del desarrollo web.</p>
          <p>Como creador de contenido, <strong className="featured dark:text-cyan-400">cuento con el canal de habla hispana más visto del mundo en la categoría de <span>Software & Game Development</span> en Twitch</strong>. Mi objetivo es mejorar la empleabilidad de la comunidad hispana y el acceso a contenido de calidad.</p>
        </div>
        {/* <img src="https://porfolio.dev/me.png" alt="" /> */}
        {/* <img src="https://i.imgur.com/6WeiG2g.png" alt="" /> */}
        {/* <img src="https://media.licdn.com/dms/image/D4E03AQEjTZ1mzHMHSQ/profile-displayphoto-shrink_800_800/0/1721670935297?e=1727913600&v=beta&t=OITOYWCmT05BTv6Nwf8u2FaxTyWYVdjmZLQF1mf6LzA" alt="" /> */}
        <img src="https://scontent.fmyc2-1.fna.fbcdn.net/v/t39.30808-6/331415081_2357787691047722_1310309690809622306_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WcvkaakTnfwQ7kNvgFFUP2b&_nc_ht=scontent.fmyc2-1.fna&oh=00_AYBDH09CCXHJ8zyEKz850-u2u-irEgml7FWu1ia9RRMu-g&oe=66BB0EB3" alt="" />
      </article>
    </section>
  )
}

export default AboutMe