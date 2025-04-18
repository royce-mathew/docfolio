import { siteConfig } from "@/config/docs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ProjectSidebarNav } from "@/components/nav/sidebar-nav"

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="border-b">
      <div className="container items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-6">
        <aside className="hidden h-[calc(100vh-3.5rem)] w-full grow md:sticky md:block">
          <ScrollArea className="size-full py-6 lg:py-8">
            <ProjectSidebarNav items={siteConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  )
}
