interface GuidesLayoutProps {
  children: React.ReactNode
}

export default function GuidesLayout({ children }: GuidesLayoutProps) {
  return <div className="mx-auto max-w-5xl">{children}</div>
}
