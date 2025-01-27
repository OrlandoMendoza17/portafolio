import React, { useContext } from 'react'
import StateContext from '@/context/StateContext'
import { Onest } from "next/font/google";

const onest = Onest({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
})


type Props = {
  children: JSX.Element[] | JSX.Element
}

const DarkMode = ({children}: Props) => {
  
  const { darkMode } = useContext(StateContext)
  console.log('darkMode:', darkMode);
  
  return (
    <div className={`${darkMode ? "dark" : ""} theme ${onest.className}`}>
      {children}
    </div>
  )
}

export default DarkMode