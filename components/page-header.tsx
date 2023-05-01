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
        <h1 className="inline-block font-heading text-4xl lg:text-5xl">
          {heading}
        </h1>
        {text && <p className="text-xl text-muted-foreground">{text}</p>}
      </div>
      <hr className="my-4" />
    </>
  )
}
