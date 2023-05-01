import { MainNav } from "@/components/main-nav"
import { DocsSidebarNav } from "@/components/sidebar-nav"
import { SiteFooter } from "@/components/site-footer"
import { buttonVariants } from "@/components/ui/button"
import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface DocsLayoutProps {
    children: React.ReactNode
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background">
                <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                    <MainNav items={docsConfig.mainNav}>
                        <DocsSidebarNav items={docsConfig.sidebarNav} />
                    </MainNav>
                    <div className="flex flex-1 items-center space-x-4 sm:justify-end">
                        <nav className="flex space-x-4">
                            <Link
                                href="/login"
                                className={cn(
                                    buttonVariants({
                                        variant: "secondary",
                                        size: "sm",
                                    }),
                                    "px-4"
                                )}
                            >
                                Login
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="container flex-1">{children}</div>
            <SiteFooter className="border-t" />
        </div>
    )
}
