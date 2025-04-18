import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  IconBrandGithubFilled,
  IconFileCertificate,
  IconMailFilled,
} from "@tabler/icons-react"
import { mainContents } from "#site/content"
import config from "@/config/data"
import { Icons } from "@/config/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mdx } from "@/components/mdx/mdx-components"

// Convert env variables
const shortUrl = new URL(config.websiteURL).hostname

// This metadata will be used for SEO
export const metadata: Metadata = {
  title: `Home | ${config.name}`,
  description: `${shortUrl} - Portfolio website`,
  keywords: config.seo.metaKeywords,
  openGraph: {
    url: config.websiteURL,
    type: "website",
    title: `Home | ${config.name}`,
    description: `${shortUrl} - Portfolio website`,
    images: [
      {
        url: `${config.websiteURL}/images/ProfilePicture2.webp`,
        width: 1200,
        height: 630,
        alt: config.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Home | ${config.name}`,
    description: `${shortUrl} - Portfolio website`,
    images: [
      {
        url: `${config.websiteURL}/images/ProfilePicture2.webp`,
        width: 1200,
        height: 630,
        alt: config.name,
      },
    ],
  },
  alternates: {
    canonical: config.websiteURL,
  },
}

export default function Home() {
  const about = mainContents.find((base) => base.slugAsParams === "about")
  if (!about) {
    throw new Error("About base not found")
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Profile Information Box */}
      <div className="my-24 flex flex-col items-center justify-center md:flex-row md:space-x-8">
        {/* Profile Image */}
        <Image
          className="size-32 rounded-full md:size-[230px]"
          src={config.profilePicture}
          width={500}
          height={500}
          quality={100}
          alt="Profile"
        />

        <div className="mt-4 space-y-2 px-2">
          {/* Name */}
          <h1 className="text-center font-cal text-2xl font-bold sm:text-3xl md:text-5xl dark:text-white">
            {config.name}
          </h1>

          {/* Badges */}
          <div className="flex items-center space-x-2">
            {config.roles.map((role, index) => (
              <Badge
                key={index}
                className="border border-border bg-foreground/10 text-[10px] text-foreground sm:text-sm dark:text-primary"
                variant="defaultNonInteractive"
              >
                {role}
              </Badge>
            ))}
          </div>

          {/* Contact Information */}
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <Button asChild variant="outline" size="icon">
                <Link
                  href={config.socialLinks.github}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithubFilled className="size-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link
                  href={config.socialLinks.linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.LinkedIn className="size-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href={`mailto:${config.email}`} aria-label="Email to user">
                  <IconMailFilled className="size-5" />
                </a>
              </Button>
            </div>
            <Button asChild variant="outline">
              <Link
                href="/files/resume.pdf"
                aria-label="Resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFileCertificate className="mr-2 size-4" /> Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {/* About Me */}
      <div className="flex flex-col items-center justify-center bg-black/[5%] p-5 dark:bg-black/[10%]">
        <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          {about?.title}
        </h2>
        <div className="max-w-[900px]">
          <Mdx code={about.code} />
        </div>
      </div>
    </main>
  )
}
