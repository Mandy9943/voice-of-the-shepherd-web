import { Button } from "@/components/ui/button";
import { Apple, DownloadCloud, Gift, Users } from "lucide-react";
import { ImageCollageCanvas } from "./image-collage-canvas";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-vos-bg-light isolate">
      <ImageCollageCanvas />
      <div className="absolute inset-0 bg-linear-to-b from-vos-bg-light/75 via-vos-bg-light/45 to-vos-bg-light/85 md:from-vos-bg-light/65 md:via-vos-bg-light/25 md:to-vos-bg-light/75 z-0" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-(--breakpoint-lg) text-center py-20 md:py-0">
        <div className="space-y-6 md:space-y-8 lg:space-y-10 animate-fade-in-up animation-delay-300">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-vos-accent/10 text-vos-accent border-2 border-vos-accent/40 px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold mb-2 md:mb-3 shadow-soft hover:shadow-glow_accent transition-shadow duration-300 max-w-[95%] mx-auto">
            <Gift size={16} className="md:size-[18px] flex-shrink-0" />
            <span className="text-center leading-tight">
              Find Your Peace:{" "}
              <strong className="text-vos-primary whitespace-nowrap">
                FREE App Access Today!
              </strong>
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.75rem] font-bold text-vos-primary leading-tight tracking-tighter drop-shadow-lg px-2">
            Voice of the Shepherd
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[2.75rem] text-vos-secondary font-serif italic leading-normal pb-1 animate-reveal-light animation-delay-500 px-2">
            Listen. Reflect.{" "}
            <strong className="text-vos-primary/90">Be Transformed.</strong>
          </p>
          <p className="text-base sm:text-lg md:text-xl text-vos-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-700 px-4">
            Stop waiting for inner peace. Start experiencing profound calm and
            spiritual growth.{" "}
            <strong className="text-vos-primary">This is your moment.</strong>
          </p>
          <div className="flex  gap-4 sm:gap-5 md:gap-6 justify-center pt-6 md:pt-8 lg:pt-10 animate-fade-in-up animation-delay-900 px-4">
            <Button
              size="lg"
              className="bg-vos-primary text-white hover:bg-vos-primary-darker rounded-3xl px-8 py-3.5 md:px-10 md:py-4 text-base md:text-lg lg:text-xl shadow-lifted hover:shadow-cta-glow transform hover:scale-105 transition-all duration-300 ease-out group relative overflow-hidden animation-delay-1000 w-full sm:w-auto"
            >
              <Apple
                className="mr-2 h-5 w-5 md:mr-2.5 md:h-7 md:w-7 group-hover:animate-subtle-pulse flex-shrink-0"
                strokeWidth={2.25}
              />
              <span>Download for iOS</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-vos-card-light/80 backdrop-blur-md text-vos-primary hover:bg-vos-muted border-vos-border hover:border-vos-primary/60 rounded-3xl px-8 py-3.5 md:px-10 md:py-4 text-base md:text-lg lg:text-xl shadow-lifted hover:shadow-glow_accent transform hover:scale-105 transition-all duration-300 ease-out group w-full sm:w-auto"
            >
              <DownloadCloud
                className="mr-2 h-5 w-5 md:mr-2.5 md:h-7 md:w-7 group-hover:animate-subtle-pulse flex-shrink-0"
                strokeWidth={2.25}
              />
              <span>Download for Android</span>
            </Button>
          </div>
          <div className="pt-4 md:pt-6 text-xs sm:text-sm text-vos-secondary/80 flex items-center justify-center gap-2 animate-fade-in-up animation-delay-1200 px-4">
            <Users size={14} className="md:size-4 flex-shrink-0" />
            <span className="text-center">
              Join <strong className="text-vos-primary">10,000+</strong> souls
              finding daily peace!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
