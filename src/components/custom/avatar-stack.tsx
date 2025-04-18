// "use client"

import React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "../ui/skeleton"

type AvatarStackProps = {
  images: string[]
  fallback?: string
}

const AvatarStack = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & AvatarStackProps
>(({ images, className, fallback, ...props }, ref) => {
  return (
    <div>
      <Avatar className={className} {...props}>
        <AvatarImage
          src={images[0]}
          className="absolute object-cover"
          alt="Profile"
        />
        <AvatarFallback>
          <Skeleton className="size-full" />
        </AvatarFallback>
      </Avatar>
    </div>
  )
})
AvatarStack.displayName = "AvatarStack"

export default AvatarStack
