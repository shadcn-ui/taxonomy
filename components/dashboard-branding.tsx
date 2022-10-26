import { Icons } from "./icons"

export function DashboardBranding() {
  return (
    <header className="flex items-center space-x-2 px-3">
      <Icons.logo />
      <span className="font-bold">Taxonomy</span>
    </header>
  )
}
