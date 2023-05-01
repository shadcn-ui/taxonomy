import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { buttonVariants } from "@/components/ui/button"
import { marketingConfig } from "@/config/marketing"
import { getCurrentUser } from "@/lib/session"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    const user = await getCurrentUser()
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <header className="container z-40 bg-background">
                    <div className="flex h-20 items-center justify-between py-6">
                        <MainNav items={marketingConfig.mainNav} />
                        <nav>
                            {user ? (
                                <Link
                                    href="/dashboard"
                                    className={cn(
                                        buttonVariants({
                                            variant: "secondary",
                                            size: "sm",
                                        }),
                                        "px-4"
                                    )}
                                >
                                    Dashboard
                                </Link>
                            ) : (
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
                            )}
                        </nav>
                    </div>
                </header>
                <main className="flex-1 z-10">{children}</main>
                <SiteFooter />
            </div>
        </>
    )
}
