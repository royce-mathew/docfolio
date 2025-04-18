"use client"

import React from "react"
import {
  IconDevicesStar,
  IconMoonFilled,
  IconSunFilled,
} from "@tabler/icons-react"
import { useTheme } from "next-themes"
import { useMounted } from "@/hooks/use-mounted"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

const LightSwitch: React.FC = () => {
  const mounted = useMounted()
  const { setTheme, theme } = useTheme()

  if (!mounted) {
    return null
  }

  function handleThemeChange(value: string) {
    if (value) {
      setTheme(value)
    }
  }

  return (
    <ToggleGroup
      type="single"
      className="gap-0 rounded-full border"
      size="sm"
      onValueChange={handleThemeChange}
      loop={true}
      value={theme}
      aria-label="Toggle theme mode"
    >
      <ToggleGroupItem
        value="light"
        aria-label="Switch to light mode"
        className="aspect-square rounded-full"
      >
        <IconSunFilled />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="Switch to system preferred mode"
        className="aspect-square rounded-full"
      >
        <IconDevicesStar />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Switch to dark mode"
        className="aspect-square rounded-full"
      >
        <IconMoonFilled />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default LightSwitch
