import Link from "next/link"
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
        <h1 className="text-2xl font-bold tracking-wide text-slate-900">
          {heading}
        </h1>
      
        
          {text && <p className="text-neutral-500">{text}</p>}
       <div className="text-left pt-5" >
        <Link
              href="/studio"
              className=" h-11 items-center rounded-md border border-slate-900 bg-white px-8 py-2 text-center font-medium text-slate-900 transition-colors hover:bg-slate-900 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              Content Manger
            </Link>
        </div>
      </div>
      {children}
    </div>
  )
}
