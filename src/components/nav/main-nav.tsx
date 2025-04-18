"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/docs"
import { Icons } from "@/config/icons"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.Logo />
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {siteConfig.mainNav.map((item, index) => (
          <Link
            key={index}
            href={item.href as string}
            className={cn(
              "hover:text-foreground/80 transition-colors",
              pathname === item.href ? "text-foreground" : "text-foreground/60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
