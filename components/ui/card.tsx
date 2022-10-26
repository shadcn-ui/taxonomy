import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("overflow-hidden rounded-lg border", className)}
      {...props}
    />
  )
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

Card.Header = function CardHeader({ className, ...props }: CardHeaderProps) {
  return <div className={cn("grid gap-1 p-6", className)} {...props} />
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

Card.Content = function CardContent({ className, ...props }: CardContentProps) {
  return <div className={cn("px-6 pb-4", className)} {...props} />
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

Card.Footer = function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn("border-t bg-slate-50 px-6 py-4", className)}
      {...props}
    />
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

Card.Title = function CardTitle({ className, ...props }: CardTitleProps) {
  return <h4 className={cn("text-lg font-medium", className)} {...props} />
}

interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

Card.Description = function CardDescription({
  className,
  ...props
}: CardDescriptionProps) {
  return <p className={cn("text-sm text-gray-600", className)} {...props} />
}

Card.Skeleton = function CardSeleton() {
  return (
    <Card>
      <Card.Header className="gap-2">
        <div className="h-5 w-1/5 animate-pulse rounded-lg bg-slate-100"></div>
        <div className="h-4 w-4/5 animate-pulse rounded-lg bg-slate-100"></div>
      </Card.Header>
      <Card.Content className="h-10" />
      <Card.Footer>
        <div className="h-8 w-[120px] animate-pulse rounded-lg bg-slate-200"></div>
      </Card.Footer>
    </Card>
  )
}
