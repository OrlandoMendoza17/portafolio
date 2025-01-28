import React from 'react'
import { RiTeamFill } from "react-icons/ri";

const Testimonials = () => {

  const testimonials = [
    {
      picture: "https://media.licdn.com/dms/image/v2/C4D03AQFiAA7t5kuqEw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639082809998?e=1743033600&v=beta&t=7A2bvijA6RfuZGIjKXa0qcsHJE__47_n3X5E0CzRosI",
      name: "Yamileth Mujica",
      company: "Alimentos Heinz C.A.",
      position: "User Services Manager",
      opinion: `"Orlando ha superado mis espectativas desde el diseño hasta el desarrollo".`,
      // letter: "Lorem",
      letter: null,
    },
    {
      picture: "https://media.licdn.com/dms/image/v2/D4D03AQFEtzjmxMYbXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715189020074?e=1743033600&v=beta&t=VmUZ1MVKfz7ShJKMdT4g24Mf4VXpk_cYPosdW18z27Y",
      name: "Alejandra Mendoza",
      company: "Crowdar",
      position: "Senior Web Developer",
      opinion: `"Un excelente profesional que puede llevar a cabo un desarrollo completo de aplicaciones en general con las mejores practicas y soluciones.".`,
    },
    // {
    //   picture: "https://media.licdn.com/dms/image/v2/C4D03AQFiAA7t5kuqEw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639082809998?e=1743033600&v=beta&t=7A2bvijA6RfuZGIjKXa0qcsHJE__47_n3X5E0CzRosI",
    //   name: "Yamileth Mujica",
    //   company: "Alimentos Heinz C.A.",
    //   position: "User Services Manager",
    //   opinion: `"Orlando ha superado mis espectativas desde el diseño hasta el desarrollo".`,
    // },
  ]

  return (
    <section className="Testimonials">
      <h2><RiTeamFill/> Testimonios</h2>
      {
        testimonials.map(({name, opinion, company, position, picture, letter}, index)=>
          <article key={index}>
            <figure>
              <img src={picture} alt="" />
            </figure>
            <p>{opinion}</p>
            <h2>{name} / {position} - {company}</h2>
            {
              letter &&
              <a href="https://www.linkedin.com/in/yamileth-mujica/" className="letter">Ver Carta de recomendación</a>
            }
          </article>
        )
      }
    </section>
  )
}

export default Testimonials