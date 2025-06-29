"use client"

import { ThemeProvider as ActualThemeProvider } from '@/contexts/ThemeContext'

interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

// This wrapper adapts between the expected props in layout.tsx and our actual ThemeContext
// It ignores the props that aren't used in our implementation
export function ThemeProvider({
  children,
  // These props are expected in layout.tsx but not used in our implementation
  // defaultTheme = "light", 
  // attribute = "",
  // enableSystem = true,
  // disableTransitionOnChange = false,
}: ThemeProviderProps) {
  return (
    <ActualThemeProvider>
      {children}
    </ActualThemeProvider>
  )
}
