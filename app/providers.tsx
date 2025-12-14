'use client'

import { MantineProvider } from '@mantine/core'
import LayoutWrapper from './components/LayoutWrapper'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <LayoutWrapper>{children}</LayoutWrapper>
    </MantineProvider>
  )
}
