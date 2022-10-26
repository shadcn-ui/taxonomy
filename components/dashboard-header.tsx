interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({
  heading,
  text,
  children,
}: DashboardHeaderProps) {
  return (
    <div className="flex justify-between px-2">
      <div className="grid gap-1">
        <h1 className="text-xl font-bold tracking-wide text-black">
          {heading}
        </h1>
        {text && <p className="text-sm text-neutral-500">{text}</p>}
      </div>
      {children}
    </div>
  )
}
