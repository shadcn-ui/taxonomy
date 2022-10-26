import "styles/globals.css"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: AuthLayoutProps) {
  return <div className="grid min-h-screen grid-cols-2">{children}</div>
}
