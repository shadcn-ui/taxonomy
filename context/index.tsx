import { createContext, useState } from "react"

interface MenuContextProps {
  toggle: boolean
  toggleFunction: (toggle: boolean) => void
}

export const MenuContext = createContext<MenuContextProps>({
  toggle: false,
  toggleFunction: () => {},
})

export const MenuProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  const toggleFunction = () => {
    setToggle(!toggle)
  }

  return (
    <MenuContext.Provider value={{ toggle, toggleFunction }}>
      {children}
    </MenuContext.Provider>
  )
}
