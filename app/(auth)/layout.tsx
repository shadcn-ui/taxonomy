import "styles/globals.css"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: AuthLayoutProps) {
  return <div className="min-h-screen">{children}</div>
}
