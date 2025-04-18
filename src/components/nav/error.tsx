"use client"

import React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

export type ErrorBoundaryProps = {
  error: (Error & { digest?: string }) | { message: string }
  reset?: () => void
  rerouteUrl?: string
}

export function ErrorBoundary({
  error,
  reset,
  rerouteUrl,
}: ErrorBoundaryProps) {
  const router = useRouter() // Use router for navigation

  function handleReset() {
    if (reset) {
      reset()
    } else {
      router.push(rerouteUrl || "/")
    }
  }

  return (
    <main className="flex size-full flex-col items-center justify-center space-y-5 p-5">
      <Image
        title="Error"
        width={350}
        height={350}
        alt="Surprised Pikachu"
        className="rounded"
        src="/images/Error.gif"
        unoptimized
      />
      <div className="text-center">
        <h1 className="font-cal scroll-m-20 text-5xl tracking-tight lg:text-5xl">
          Unexpected Error
        </h1>
        <p className="text-xs italic text-gray-500">
          Please contact the developer regarding this error.
        </p>
        <h3 className="text-primary mt-4 tracking-tight">
          {error.message || "Something went wrong - Undefined Error"}
        </h3>
        <Button variant="outline" className="mt-4" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </main>
  )
}
