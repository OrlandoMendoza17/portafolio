import { useContext, useEffect, useRef } from 'react'
import StateContext, { ContextState } from '@/context/StateContext'
import Link from 'next/link'
import { TbMoon } from "react-icons/tb";
import { TbSun } from "react-icons/tb";
import NavLink from '../NavLink';


export type HeaderLink = {
  isSection: boolean;
  sectionId: string;
  href: string;
  label: string;
  threshold: number;
}

const Header = () => {
  
  const $navigation = useRef<HTMLElement>(null)
  
  const { darkMode, setDarkMode } = useContext(StateContext)

  const links: HeaderLink[] = [
    {
      isSection: true,
      sectionId: "WorkExperience",
      href: "/#WorkExperience",
      label: "Experiencia",
      threshold: .25,
    },
    {
      isSection: true,
      sectionId: "Projects",
      href: "/#Projects",
      label: "Proyectos",
      threshold: .25,
    },
    {
      isSection: true,
      sectionId: "AboutMe",
      href: "/#AboutMe",
      label: "Sobre mí",
      threshold: .25,
    },
    {
      isSection: false,
      sectionId: "",
      href: "mailto:ommv.17@gmail.com",
      label: "Contacto",
      threshold: .25,
    },
  ]

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const $html = document.querySelector("html") as HTMLHtmlElement 
      if ($html.scrollTop !== 0) {
        $navigation.current?.classList.add("onscroll")
      }else{
        $navigation.current?.classList.remove("onscroll")
      }
    })
  }, [])


  return (
    <header id="Header">
      <nav ref={$navigation}>
        <ul>
          {
            links.map((link, index) =>
              <NavLink key={index} {...link} />
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