import { projects } from "#site/content"
import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface SiteConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const siteConfig: SiteConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  sidebarNav: [
    {
      title: "Projects",
      href: "/projects",
      items: projects
        .sort(
          (a, b) =>
            new Date(a.modifiedDate).getTime() -
            new Date(b.modifiedDate).getTime()
        )
        .reverse()
        .map((project) => ({
          title: project.title,
          href: `/${project.slug}`,
          label: project.label,
          modifiedDate: project.modifiedDate,
          items: [],
        })),
    },
  ],
}
