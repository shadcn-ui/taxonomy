import Link from "next/link"
import { UserAccountNav } from "@/components/user-account-nav"
import { marketingConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { SiteFooter } from "@/components/site-footer"
import { getCurrentUser } from "@/lib/session"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {


  let user: any;
  getCurrentUser().then(currentUser => {
    user = currentUser;
  });


  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            {
              user
                ?
                <Link
                  href="/login"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "px-4"
                  )}
                >
                  Login
                </Link>
                :
                <div className='flex justify-center items-center gap-3'>
                  <h3>Welcome {user.name}</h3>
                  <UserAccountNav
                    user={{
                      name: user.name,
                      image: user.image,
                      email: user.email,
                    }}
                  />
                </div>
            }
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  )
}
