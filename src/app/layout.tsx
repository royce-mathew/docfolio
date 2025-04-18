import "@/styles/globals.css"
import "@/styles/mdx.css"
import type { Metadata, Viewport } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"
import config from "@/config/data"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/providers/theme"
import { cal, inter } from "@/styles/fonts"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://r0yce.com"),
  openGraph: {
    siteName: "r0yce",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "r0yce",
  appleWebApp: {
    title: "r0yce",
    statusBarStyle: "default",
    capable: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster />
        </ThemeProvider>
      </body>
      {/* Google Analytics */}
      {process.env.NODE_ENV === "production" && config.googleAnalyticsID && (
        <GoogleAnalytics gaId={config.googleAnalyticsID} />
      )}
    </html>
  )
}
