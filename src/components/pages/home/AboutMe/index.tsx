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
          <p>Me llamo Orlando, llevo más de 5 años <strong className="featured dark:text-cyan-400">desarrollando productos web con Next.js, React, TypeScript y Supabase</strong>, desde facturación y pagos hasta SaaS escalables con interfaces de alto rendimiento y experiencia cuidada.</p>
          <p>Durante este trayecto he integrado <strong className="featured dark:text-cyan-400">PostgreSQL, tRPC, Zod y Supabase</strong>, con pruebas unitarias y <strong className="featured dark:text-cyan-400">E2E usando Jest, Vitest y Playwright</strong>, priorizando arquitecturas type-safe, procesos automatizados con CI/CD y flujos críticos siempre bien cubiertos.</p>
          <p><strong className="featured dark:text-cyan-400">Soy optimista, determinado, analítico y autodidacta</strong>, con escucha activa y comunicación clara en equipo. Busco seguir creciendo con buenas prácticas de la industria, aprendizaje continuo y retos que aporten valor real en cada producto digital.</p>
        </div>
        {/* <img src="https://porfolio.dev/me.png" alt="" /> */}
        {/* <img src="https://i.imgur.com/6WeiG2g.png" alt="" /> */}
        <img src="https://i.imgur.com/UmobBRG.jpg" alt="" />
        {/* <img src="https://media.licdn.com/dms/image/D4E03AQEjTZ1mzHMHSQ/profile-displayphoto-shrink_800_800/0/1721670935297?e=1727913600&v=beta&t=OITOYWCmT05BTv6Nwf8u2FaxTyWYVdjmZLQF1mf6LzA" alt="" /> */}
        {/* <img src="https://scontent.fmyc2-1.fna.fbcdn.net/v/t39.30808-6/331415081_2357787691047722_1310309690809622306_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WcvkaakTnfwQ7kNvgFFUP2b&_nc_ht=scontent.fmyc2-1.fna&oh=00_AYBDH09CCXHJ8zyEKz850-u2u-irEgml7FWu1ia9RRMu-g&oe=66BB0EB3" alt="" /> */}
      </article>
    </section>
  )
}

export default AboutMe