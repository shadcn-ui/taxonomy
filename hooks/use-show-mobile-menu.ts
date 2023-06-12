import * as React from "react"
import { usePathname } from "next/navigation"

export function useShowMobileMenu(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  const pathname = usePathname()

  React.useEffect(() => {
    setShowMobileMenu(false)
  }, [pathname])

  return [showMobileMenu, setShowMobileMenu]
}
