import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { HeaderLink } from '../Header'

const NavLink = ({ href, sectionId, threshold, label }: HeaderLink) => {

  const $link = useRef<HTMLAnchorElement>(null)
  
  useEffect(() => {

    const options: IntersectionObserverInit = {
      // root: $main,
      threshold,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry
        if($link.current){
          if (isIntersecting) {
            
            const links = document.querySelectorAll("#Header a")
            links.forEach(item => item.classList.remove("active"))
            
            $link.current.classList.add("active")
          }else{
            $link.current.classList.remove("active")
          }
        }
        // setActive(isIntersecting)
      })
    }, options)

    const section = document.getElementById(sectionId)
    
    if (section) {
      observer.observe(section)
    }

  }, [])


  return (
    <li>
      <Link ref={$link} href={href}>
        {label}
      </Link>
    </li>
  )
}

export default NavLink