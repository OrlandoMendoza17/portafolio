import { useContext } from 'react'
import StateContext, { ContextState } from '@/context/StateContext'
import Link from 'next/link'
import { TbMoon } from "react-icons/tb";
import { TbSun } from "react-icons/tb";


const Header = () => {

  const { darkMode, setDarkMode } = useContext(StateContext)

  const links = [
    "Experiencia",
    "Proyectos",
    "Sobre mí",
    "Contacto",
  ]

  // console.log('darkMode:', darkMode);

  return (
    <header className="Header">
      <nav>
        <ul>
          {
            links.map((item, index) =>
              <li key={index}>
                <Link href="/">{item}</Link>
              </li>
            )
          }
        </ul>
        <button className="mx-1" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <TbMoon size={20} /> : <TbSun size={20} />}
        </button>
      </nav>
    </header>
  )
}

export default Header