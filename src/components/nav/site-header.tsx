import { CommandMenu } from "@/components/custom/command-menu"
import { MainNav } from "@/components/nav/main-nav"
import { MobileNav } from "@/components/nav/mobile-nav"
import LightSwitch from "../custom/lightswitch"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 dark:border-border/40">
      <div className="container flex h-14 max-w-(--breakpoint-2xl) items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <LightSwitch />
        </div>
      </div>
    </header>
  )
}
