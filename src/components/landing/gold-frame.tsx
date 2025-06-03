import type React from "react"
import { cn } from "@/lib/utils"

interface GoldFrameProps {
  children: React.ReactNode
  className?: string
  padding?: string // e.g., "p-1", "p-1.5"
  borderRadius?: string // e.g., "rounded-3xl", "rounded-4xl"
}

export function GoldFrame({
  children,
  className,
  padding = "p-1.5", // Default padding for the frame thickness
  borderRadius = "rounded-4xl", // Default rounded corners
}: GoldFrameProps) {
  return (
    <div
      className={cn(
        "relative inline-block bg-linear-to-br from-vos-accent via-[#c0a030] to-vos-accent shadow-gold-frame hover:shadow-gold-frame-hover transition-shadow duration-300",
        padding,
        borderRadius,
        className,
      )}
    >
      <div className={cn("relative overflow-hidden bg-vos-muted", borderRadius, "h-full w-full")}>{children}</div>
      {/* Inner bevel effect (optional, can be adjusted) */}
      <div
        className={cn(
          "absolute inset-0.5 pointer-events-none",
          borderRadius,
          "shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-1px_2px_rgba(0,0,0,0.1)]",
        )}
      />
    </div>
  )
}
