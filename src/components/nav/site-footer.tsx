import LightSwitch from "../custom/lightswitch"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="dark:border-border/40 bg-background/95 border-t py-6 md:px-8 md:py-0 ">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-muted-foreground text-balance text-center text-sm leading-loose">
          Copyright © {currentYear} Royce Mathew. All rights reserved.
        </p>
        <LightSwitch />
      </div>
    </footer>
  )
}
