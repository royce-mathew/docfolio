import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Project } from "#site/content"
import { format, parseISO } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

interface ProjectButtonProps {
  project?: Project
  className?: string
}

const ProjectButton: React.FC<ProjectButtonProps> = ({
  project,
  className,
  ...props
}) => {
  if (!project) {
    return (
      <div className="text-muted-foreground text-center">No Project found.</div>
    )
  }
  return (
    <Button
      asChild
      className={cn(
        "border-border bg-background hover:brightness-70 row-span-1 flex size-full flex-col justify-between space-y-4 rounded border p-1 transition-all duration-200 hover:scale-[102%] hover:shadow-xl",
        className
      )}
      variant={null}
      {...props}
    >
      <Link href={project?.slug ?? "/"}>
        {project?.imageSrc && (
          <div className="flex size-full flex-col justify-between">
            <div className="relative p-1">
              <Image
                src={project?.imageSrc ?? ""}
                alt="Project Example"
                className="size-full max-h-64 rounded object-cover"
                width={300}
                height={300}
              />
              <div className="halftone absolute inset-0" />
              <div className="from-background bg-size-150%  bg-pos-10% bg-linear-to-t absolute inset-0 from-5% to-transparent to-25%" />
            </div>

            <div className="flex flex-col space-y-2 text-wrap px-1 pb-2 pt-4">
              <h1 className="text-balance text-xl font-semibold md:text-2xl">
                {project?.title}
              </h1>
              <p className="text-muted-foreground text-wrap">
                {project?.description}
              </p>

              <Separator />
              <small className="text-right text-sm">
                {project?.publishedDate &&
                  format(
                    parseISO(project?.publishedDate ?? ""),
                    "MMMM dd, yyyy"
                  )}
              </small>
            </div>
          </div>
        )}
      </Link>
    </Button>
  )
}

export default ProjectButton
