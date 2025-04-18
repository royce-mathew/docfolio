"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { AlertDialogProps } from "@radix-ui/react-alert-dialog"
import {
  IconCode,
  IconDevicesStar,
  IconLink,
  IconMoonFilled,
  IconSunFilled,
} from "@tabler/icons-react"
import { useTheme } from "next-themes"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export function CommandMenu({ ...props }: AlertDialogProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const { setTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "bg-background text-muted-foreground relative h-8 w-full justify-start rounded-lg text-sm font-normal shadow-none sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline-flex">Search or jump to...</span>
        <span className="inline-flex lg:hidden">Search...</span>

        <kbd className="bg-muted pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Main">
            {siteConfig.mainNav
              .filter((navitem) => !navitem.external)
              .map((navItem: NavItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string))
                  }}
                >
                  <IconLink className="mr-2 size-4" />
                  {navItem.title}
                </CommandItem>
              ))}
          </CommandGroup>
          {siteConfig.sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem: NavItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.href}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string))
                  }}
                >
                  <div className="mr-2 flex size-4 items-center justify-center">
                    <IconCode className="size-3" />
                  </div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Theming">
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <IconDevicesStar className="mr-2 size-4" />
              System
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <IconSunFilled className="mr-2 size-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <IconMoonFilled className="mr-2 size-4" />
              Dark
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
