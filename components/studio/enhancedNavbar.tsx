import { Card, Flex, Stack, Text } from '@sanity/ui'
import { notFound } from 'next/navigation'

import { MainNav } from '@/components/main-nav'
import { dashboardConfig } from '@/config/dashboard'
import { getCurrentUser } from '@/lib/session'

// Adds markup and invokes renderDefault()
export function enhancedNavbar(props: any) {
  return (
    <Stack>
      <header className="container sticky top-0 z-40 bg-white">
        <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
          <MainNav items={dashboardConfig.mainNav} />
        </div>
      </header>
      <>{props.renderDefault(props)}</>
    </Stack>
  )
}
