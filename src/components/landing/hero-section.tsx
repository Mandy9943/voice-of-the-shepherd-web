import { Button } from "@/components/ui/button"
import { Apple, DownloadCloud, Gift, Users } from "lucide-react"
import { ImageCollageCanvas } from "./image-collage-canvas"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-vos-bg-light isolate">
      <ImageCollageCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-vos-bg-light/75 via-vos-bg-light/45 to-vos-bg-light/85 md:from-vos-bg-light/65 md:via-vos-bg-light/25 md:to-vos-bg-light/75 z-0" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-screen-lg text-center py-20 md:py-0">
        <div className="space-y-8 md:space-y-10 animate-fade-in-up animation-delay-300">
          <div className="inline-flex items-center gap-3 bg-vos-accent/10 text-vos-accent border-2 border-vos-accent/40 px-5 py-2 rounded-full text-sm md:text-base font-semibold mb-3 shadow-soft hover:shadow-glow_accent transition-shadow duration-300">
            <Gift size={18} />
            <span>
              Find Your Peace: <strong className="text-vos-primary">FREE App Access Today!</strong>
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.75rem] font-bold text-vos-primary leading-tight tracking-tighter drop-shadow-lg">
            Voice of the Shepherd
          </h1>
          <p className="text-2xl md:text-3xl lg:text-[2.75rem] text-vos-secondary font-serif italic leading-normal pb-1 animate-reveal-light animation-delay-500">
            Listen. Reflect. <strong className="text-vos-primary/90">Be Transformed.</strong>
          </p>
          <p className="text-lg md:text-xl text-vos-secondary max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-700">
            Stop waiting for inner peace. Start experiencing profound calm and spiritual growth.{" "}
            <strong className="text-vos-primary">This is your moment.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center pt-8 md:pt-10 animate-fade-in-up animation-delay-900">
            <Button
              size="lg"
              className="bg-vos-primary text-white hover:bg-vos-primary-darker rounded-3xl px-10 py-4 text-lg md:text-xl shadow-lifted hover:shadow-cta-glow transform hover:scale-105 transition-all duration-300 ease-out group relative overflow-hidden animation-delay-1000"
            >
              <Apple className="mr-2.5 h-7 w-7 group-hover:animate-subtle-pulse" strokeWidth={2.25} /> Download for iOS
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-vos-card-light/80 backdrop-blur-md text-vos-primary hover:bg-vos-muted border-vos-border hover:border-vos-primary/60 rounded-3xl px-10 py-4 text-lg md:text-xl shadow-lifted hover:shadow-glow_accent transform hover:scale-105 transition-all duration-300 ease-out group"
            >
              <DownloadCloud className="mr-2.5 h-7 w-7 group-hover:animate-subtle-pulse" strokeWidth={2.25} /> Download
              for Android
            </Button>
          </div>
          <div className="pt-6 text-sm text-vos-secondary/80 flex items-center justify-center gap-2 animate-fade-in-up animation-delay-1200">
            <Users size={16} />
            <span>
              Join <strong className="text-vos-primary">10,000+</strong> souls finding daily peace!
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
