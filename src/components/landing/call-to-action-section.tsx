import { Button } from "@/components/ui/button"
import { Apple, DownloadCloud, Zap, ShieldCheck } from "lucide-react"

export function CallToActionSection() {
  return (
    <section
      id="download"
      className="w-full py-20 md:py-28 lg:py-36 bg-gradient-to-br from-vos-primary via-[#182a4a] to-vos-primary text-white bg-[size:200%_200%] animate-gradient-shift relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-screen-md text-center space-y-8 md:space-y-10 animate-fade-in-up">
        <div className="inline-flex items-center gap-3 bg-vos-accent text-vos-primary px-6 py-3 text-base font-bold rounded-full mb-4 uppercase tracking-wider shadow-lifted animate-bounce-subtle hover:shadow-highlight-glow transition-shadow">
          <Zap size={20} />
          <span>Your Moment of Transformation is NOW!</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-tight drop-shadow-xl">
          Don&apos;t Just Dream of Peace – <span className="text-vos-accent">Download It.</span>
        </h2>
        <p className="text-lg md:text-xl lg:text-[1.4rem] text-vos-bg-light/90 max-w-xl mx-auto leading-relaxed">
          Join a thriving community embracing daily solace and wisdom. The Voice of the Shepherd app is your{" "}
          <strong className="text-vos-accent underline decoration-wavy">KEY</strong> to unlocking a more serene and
          spiritually connected life.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center pt-6 md:pt-8">
          <Button
            size="lg"
            className="bg-white text-vos-primary hover:bg-gray-100 rounded-3xl px-10 py-4 text-md md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-out group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-shine-gradient bg-200% animate-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Apple className="mr-2.5 h-7 w-7 group-hover:animate-subtle-pulse" strokeWidth={2.25} /> Get Full Access
            (iOS)
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent text-white border-2 border-white hover:bg-white/10 rounded-3xl px-10 py-4 text-md md:text-lg shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-out group"
          >
            <DownloadCloud className="mr-2.5 h-7 w-7 group-hover:animate-subtle-pulse" strokeWidth={2.25} /> Get Full
            Access (Android)
          </Button>
        </div>
        <div className="pt-6 text-sm text-vos-muted/80 flex items-center justify-center gap-2">
          <ShieldCheck size={16} />
          <span>
            <strong className="text-white">100% Free.</strong> No Ads. No Hidden Costs. Ever.
          </span>
        </div>
      </div>
    </section>
  )
}
