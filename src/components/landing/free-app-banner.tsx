import { SparkleIcon, Gift } from "lucide-react"

export function FreeAppBanner() {
  return (
    <div className="bg-gradient-to-r from-vos-accent via-[#EAC75E] to-vos-accent text-vos-primary py-3.5 px-4 text-center text-base md:text-lg font-bold relative overflow-hidden shadow-xl z-50">
      <div className="absolute inset-0 animate-shine bg-shine-gradient bg-200% opacity-40" />
      <div className="relative z-10 flex items-center justify-center gap-2.5 animate-fade-in-up">
        <Gift size={22} className="text-vos-primary/90 animate-bounce-subtle animation-delay-500" />
        <span className="tracking-tight">
          Your Gift of Serenity: Full App Access is{" "}
          <strong className="tracking-wide uppercase underline decoration-vos-primary/60 underline-offset-2 text-shadow-sm shadow-vos-primary/20">
            100% FREE
          </strong>
          !
        </span>
        <SparkleIcon size={22} className="text-vos-primary/90 animate-subtle-pulse animation-delay-700" />
      </div>
    </div>
  )
}
