import { Metadata } from "next"
import { Project, projects } from "#site/content"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import ProjectButton from "@/components/custom/project-button"

// Environment variables
const websiteUrl =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "http://localhost:3000"
const fullName = process.env.NEXT_PUBLIC_FULL_NAME || "Username"

// Convert env variables
const shortUrl = new URL(websiteUrl).hostname

// SEO Metadata
export const metadata: Metadata = {
  title: `Projects | ${fullName}`,
  description: `${shortUrl} - List of all projects`,
  keywords: [...projects.map((project) => project.title)],
  openGraph: {
    url: `${websiteUrl}/projects`,
    type: "website",
    title: `Projects | ${fullName}`,
    description: `${shortUrl} - List of all projects`,
    images: [
      ...projects.map((project) => ({
        url: project.imageSrc,
        width: 500,
        height: 500,
        alt: project.title,
      })),
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${fullName}`,
    description: `${shortUrl} - List of all projects`,
    images: [
      ...projects.map((project) => ({
        url: project.imageSrc,
        width: 500,
        height: 500,
        alt: project.title,
      })),
    ],
  },
  alternates: {
    canonical: `${websiteUrl}/projects`,
  },
}

// The grid contains 3 columns for each project. Important projects span 2 columns.
// The array should be organized in a way such that there is a 1:2 ratio of important to non-important projects.
// This is to ensure that the grid is balanced. There is a value called gridSpan in the project schema
function sortProjects(projects: Project[]): Project[] {
  // Sort by last modified date first (newest first)
  const organizedProjects = [...projects].sort(
    (a, b) =>
      new Date(b.modifiedDate).getTime() - new Date(a.modifiedDate).getTime()
  )

  let columnCursor = 0
  for (let i = 0; i < organizedProjects.length; i++) {
    if (organizedProjects[i].columnSpan === 3) {
      if (i !== 0) {
        organizedProjects.unshift(organizedProjects.splice(i, 1)[0])
      }
      columnCursor = 3
    } else if (organizedProjects[i].columnSpan === 2) {
      if (columnCursor >= 2) {
        organizedProjects.splice(
          columnCursor - 2,
          0,
          organizedProjects.splice(i, 1)[0]
        )
      }
      columnCursor = (columnCursor + 2) % 3
    } else {
      columnCursor = (columnCursor + 1) % 3
    }
  }

  return organizedProjects
}

const projectsSorted = sortProjects(projects)

/**
 * The layout component for the project page.
 * @param params - The layout component props.
 * @returns The rendered project page layout.
 * @throws Error if the project is not found.
 */
export default function AllProjects() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="container mt-16 flex w-full items-center justify-between py-3">
        <h1 className="font-cal text-5xl font-bold md:space-x-8 md:text-6xl">
          Projects
        </h1>
        <div className="flex items-center space-x-2 text-lg md:text-xl">
          <span className="font-bold text-primary">{projects.length}</span>
          <span>Total Projects</span>
        </div>
      </div>

      <h2 className="z-10 container mt-16 flex w-full items-center justify-center md:space-x-5 md:text-4xl">
        <Separator className="flex-1" />
        <div className="-my-40 flex-initial px-4 py-1 text-3xl font-bold">
          Featured Projects
        </div>
        <Separator className="flex-1" />
      </h2>

      <div className="relative flex w-full justify-center bg-black/10 pt-16 pb-24 dark:bg-black/5">
        <div className="isolate z-10 container mx-auto grid max-w-7xl grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projectsSorted
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectButton
                key={project.slug}
                project={project}
                className={cn(
                  "transform transition-transform hover:z-10",
                  project.columnSpan == 1 && `md:col-span-1`,
                  project.columnSpan == 2 && `md:col-span-2`,
                  project.columnSpan == 3 && `md:col-span-3`
                )}
              />
            ))}
        </div>
      </div>
      <h2 className="z-10 container mt-16 flex w-full items-center justify-center md:space-x-5 md:text-4xl">
        <Separator className="flex-1" />
        <div className="-my-40 flex-initial px-4 py-1 text-3xl font-bold">
          All Projects
        </div>
        <Separator className="flex-1" />
      </h2>

      <div className="relative flex w-full justify-center bg-black/10 pt-16 pb-24 dark:bg-black/5">
        <div className="isolate z-10 container mx-auto grid max-w-7xl grid-flow-row-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projectsSorted
            .filter((project) => !project.featured)
            .map((project: Project) => (
              <ProjectButton
                key={project.slug}
                project={project}
                className={cn(
                  "transform transition-transform hover:z-10",
                  project.columnSpan == 1 && `md:col-span-1`,
                  project.columnSpan == 2 && `md:col-span-2`,
                  project.columnSpan == 3 && `md:col-span-3`
                )}
              />
            ))}
        </div>
      </div>
    </main>
  )
}
