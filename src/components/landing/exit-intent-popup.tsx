"use client"

import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Apple, DownloadCloud, X } from "lucide-react"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false) // Ensure it triggers only once

  const handleMouseOut = useCallback(
    (e: MouseEvent) => {
      if (hasTriggered) return

      // Check if mouse is near the top of the viewport
      if (e.clientY < 15) {
        setIsOpen(true)
        setHasTriggered(true) // Mark as triggered
        document.removeEventListener("mouseout", handleMouseOut) // Remove listener after triggering
      }
    },
    [hasTriggered],
  )

  useEffect(() => {
    // Add a delay before attaching the event listener to avoid immediate trigger on load
    const timer = setTimeout(() => {
      document.addEventListener("mouseout", handleMouseOut)
    }, 3000) // 3-second delay

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [handleMouseOut])

  if (!isOpen) {
    return null
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open)
        if (!open) setHasTriggered(true) // If closed manually, still consider it triggered
      }}
    >
      <DialogContent className="bg-vos-bg-light text-vos-text-primary border-2 border-vos-accent/50 shadow-2xl rounded-3xl max-w-xl p-0 flex flex-col max-h-[90vh]">
        {/* Increased padding, increased space-y */}
        <div className="p-8 md:p-10 text-center space-y-6 relative overflow-y-auto flex-grow">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-vos-secondary hover:text-vos-primary hover:bg-vos-muted/70 rounded-full z-10"
            onClick={() => setIsOpen(false)}
          >
            <X size={18} />
            <span className="sr-only">Close</span>
          </Button>

          <div className="mx-auto text-7xl mb-3 text-vos-accent" role="img" aria-label="Cross emoji">
            ✝️
          </div>

          {/* Increased space-y, reverted font sizes */}
          <DialogHeader className="space-y-3">
            <DialogTitle className="font-serif text-3xl md:text-4xl font-bold text-vos-primary tracking-tight leading-tight">
              Wait! Your Path to Inner Peace is Calling...
            </DialogTitle>
            <DialogDescription className="text-vos-secondary text-lg md:text-xl leading-relaxed px-2">
              In a world filled with distractions, finding true serenity and a deeper connection can feel out of reach.
              Voice of the Shepherd offers you a sanctuary – a space to listen, reflect, and be transformed.
              <br />
              <br />
              Don&apos;t let this moment pass. This <strong className="text-vos-primary">FREE gift</strong> could be the
              start of a profound journey for your spirit. Are you ready to answer the call?
            </DialogDescription>
          </DialogHeader>

          {/* Increased pt, reverted button padding and icon sizes */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-vos-primary text-white hover:bg-vos-primary-darker rounded-xl px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all w-full sm:w-auto group"
              onClick={() => {
                /* Link to app store */ alert("Redirecting to App Store...")
                setIsOpen(false)
              }}
            >
              <Apple className="mr-2.5 h-6 w-6 group-hover:animate-subtle-pulse" />
              Yes, Guide My Spirit (iOS)
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-vos-primary text-vos-primary hover:bg-vos-primary/10 hover:text-vos-primary-darker rounded-xl px-8 py-3 text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all w-full sm:w-auto group"
              onClick={() => {
                /* Link to app store */ alert("Redirecting to Play Store...")
                setIsOpen(false)
              }}
            >
              <DownloadCloud className="mr-2.5 h-6 w-6 group-hover:animate-subtle-pulse" />
              Yes, Guide My Spirit (Android)
            </Button>
          </div>
          {/* Reverted mt, kept text-sm */}
          <Button
            variant="link"
            className="text-vos-secondary hover:text-vos-primary mt-2 pb-1 text-sm"
            onClick={() => setIsOpen(false)}
          >
            No, Not Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
