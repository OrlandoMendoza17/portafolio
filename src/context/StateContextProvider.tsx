import React, { useState } from 'react'
import StateContext from './StateContext'

type Props = {
  children: React.ReactNode | JSX.Element[] | JSX.Element
}

const StateContextProvider = ({ children }: Props) => {

  const [darkMode, setDarkMode] = useState<boolean>(false)

  const value = {
    darkMode, 
    setDarkMode,
  }
  
  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}

export default StateContextProvider