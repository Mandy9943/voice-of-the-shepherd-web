"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Apple, DownloadCloud } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false); // Ensure it triggers only once

  const handleMouseOut = useCallback(
    (e: MouseEvent) => {
      if (hasTriggered) return;

      // Check if mouse is near the top of the viewport
      if (e.clientY < 15) {
        setIsOpen(true);
        setHasTriggered(true); // Mark as triggered
        document.removeEventListener("mouseout", handleMouseOut); // Remove listener after triggering
      }
    },
    [hasTriggered]
  );

  useEffect(() => {
    // Add a delay before attaching the event listener to avoid immediate trigger on load
    const timer = setTimeout(() => {
      document.addEventListener("mouseout", handleMouseOut);
    }, 3000); // 3-second delay

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleMouseOut]);

  if (!isOpen) {
    return null;
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) setHasTriggered(true); // If closed manually, still consider it triggered
      }}
    >
      <DialogContent className="bg-vos-bg-light text-vos-text-primary border-2 border-vos-accent/50 shadow-2xl rounded-3xl max-w-xl p-0 flex flex-col max-h-[85vh] overflow-hidden">
        {/* Fixed positioning and made exit button more beautiful */}
        <div className="p-6 md:p-8 text-center space-y-5 relative overflow-y-auto grow">
          <div
            className="mx-auto text-6xl mb-2 text-vos-accent"
            role="img"
            aria-label="Cross emoji"
          >
            ✝️
          </div>

          {/* Better spacing for mobile */}
          <DialogHeader className="space-y-2">
            <DialogTitle className="font-serif text-2xl md:text-3xl font-bold text-vos-primary tracking-tight leading-tight">
              Wait! Your Path to Inner Peace is Calling...
            </DialogTitle>
            <DialogDescription className="text-vos-secondary text-base md:text-lg leading-relaxed px-1">
              In a world filled with distractions, finding true serenity and a
              deeper connection can feel out of reach. Voice of the Shepherd
              offers you a sanctuary – a space to listen, reflect, and be
              transformed.
              <br />
              <br />
              Don&apos;t let this moment pass. This{" "}
              <strong className="text-vos-primary">FREE gift</strong> could be
              the start of a profound journey for your spirit. Are you ready to
              answer the call?
            </DialogDescription>
          </DialogHeader>

          {/* Better button spacing */}
          <div className="flex flex-col  gap-3 justify-center pt-3">
            <Button
              size="lg"
              className="bg-vos-primary text-white hover:bg-vos-primary-darker rounded-xl px-6 py-2.5 text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all w-full sm:w-auto group"
              onClick={() => {
                /* Link to app store */ alert("Redirecting to App Store...");
                setIsOpen(false);
              }}
            >
              <Apple className="mr-2 h-5 w-5 group-hover:animate-subtle-pulse" />
              Yes, Guide My Spirit (iOS)
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-vos-primary text-vos-primary hover:bg-vos-primary/10 hover:text-vos-primary-darker rounded-xl px-6 py-2.5 text-base shadow-md hover:shadow-lg transform hover:scale-105 transition-all w-full sm:w-auto group"
              onClick={() => {
                /* Link to app store */ alert("Redirecting to Play Store...");
                setIsOpen(false);
              }}
            >
              <DownloadCloud className="mr-2 h-5 w-5 group-hover:animate-subtle-pulse" />
              Yes, Guide My Spirit (Android)
            </Button>
          </div>
          {/* Better "No" button positioning */}
          <Button
            variant="link"
            className="text-vos-secondary hover:text-vos-primary mt-1 pb-1 text-sm"
            onClick={() => setIsOpen(false)}
          >
            No, Not Now
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
