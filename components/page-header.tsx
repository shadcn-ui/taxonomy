import { cn } from "@/lib/utils"

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
}

export function DocsPageHeader({
  heading,
  text,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn("space-y-4", className)} {...props}>
        <h1 className="font-heading inline-block text-4xl lg:text-5xl">
          {heading}
        </h1>
        {text && <p className="text-muted-foreground text-xl">{text}</p>}
      </div>
      <hr className="my-4" />
    </>
  )
}
