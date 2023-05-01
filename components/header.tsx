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
        <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between px-2 gap-4 lg:gap-0">
            <div className="grid gap-1">
                <h1 className="font-heading text-3xl md:text-4xl">{heading}</h1>
                {text && (
                    <p className="text-lg text-muted-foreground">{text}</p>
                )}
            </div>
            {children}
        </div>
    )
}
