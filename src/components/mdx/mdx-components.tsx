"use client"

import * as React from "react"
import * as runtime from "react/jsx-runtime"
import Image from "next/image"
import Link from "next/link"
import { YouTubeEmbed } from "@next/third-parties/google"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Callout } from "@/components/mdx/callout"
import { CodeBlockWrapper } from "@/components/mdx/code-block-wrapper"
import { CopyButton } from "@/components/mdx/copy-button"

const sharedComponents = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertTitle,
  AlertDescription,
  YouTubeEmbed,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "font-heading border-border flex scroll-m-20 justify-center border py-4 text-4xl font-bold",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "border-border/50 bg-card/10 mt-8 w-fit scroll-m-20 rounded-md border px-5 py-2 text-lg font-thin italic tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "text-primary font-medium decoration-2 hover:underline",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("not-first:mt-6 leading-7", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("even:bg-muted/40 m-0 border-t p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    __raw__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __raw__?: string
  }) => {
    return (
      <ScrollArea>
        <div className="group max-h-[650px] max-w-full">
          <pre
            className={cn("grid w-full min-w-max px-3 py-4", className)}
            {...props}
          >
            <div className="absolute right-4 top-4">
              <CopyButton content={__raw__ ?? ""} />
            </div>
            {props.children}
          </pre>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    )
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    return (
      <code
        className={cn(
          "text-primary size-full rounded bg-white/5 p-1 font-mono text-sm",
          className
        )}
        {...props}
      />
    )
  },
  Image,
  Callout,
  AspectRatio,
  CodeBlockWrapper: ({ ...props }) => (
    <CodeBlockWrapper className="rounded-md border" {...props} />
  ),
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h4]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  UnorderedSteps: ({ ...props }) => (
    <div
      className="[&>h4]:unordered-step mb-12 ml-4 border-l pl-8 [counter-reset:unordered-step]"
      {...props}
    />
  ),
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "bg-card text-card-foreground hover:bg-muted/50 flex w-full flex-col items-center rounded-xl border p-6 shadow-sm transition-colors sm:p-10",
        className
      )}
      {...props}
    />
  ),
  Grid: ({ className, ...props }: React.ComponentProps<"div">) => (
    <div
      className={cn(
        "flex flex-col space-y-4 p-2 md:flex-row md:space-x-5 md:space-y-0",
        className
      )}
      {...props}
    />
  ),
  GridItem: ({ className, ...props }: React.ComponentProps<"div">) => (
    <div className={cn("basis-1/2", className)} {...props} />
  ),
}
// parse the Velite generated MDX code into a React component function
const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  components?: Record<string, React.ComponentType>
}

// MDXContent component
export const Mdx = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...sharedComponents, ...components }} />
}
