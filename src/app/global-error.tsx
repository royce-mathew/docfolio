"use client"

import { cn } from "@/lib/utils"
import { ErrorBoundary } from "@/components/nav/error"
import { ThemeProvider } from "@/components/providers/theme"
import { cal, inter } from "@/styles/fonts"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          cal.variable,
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary error={error} reset={reset} />
        </ThemeProvider>
      </body>
    </html>
  )
}
