import {
  CalendarDays,
  ListChecks,
  PlayCircle,
  QuoteIcon,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { GoldFrame } from "./gold-frame";

export function FeaturesHighlightSection() {
  return (
    <section className="w-full py-section-gap bg-linear-to-br from-vos-muted/70 via-vos-bg-light to-vos-muted/70">
      <div className="container mx-auto px-4 md:px-6 max-w-(--breakpoint-lg) grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="flex justify-center order-1 md:order-0 animate-fade-in-up animation-delay-200">
          <div className="relative group w-[330px] h-[620px] md:w-[350px] md:h-[660px]">
            <GoldFrame
              className="w-full h-full"
              borderRadius="rounded-4xl"
              padding="p-2.5"
            >
              <Image
                src="/audio-player-highlight.png"
                alt="App Feature Highlight Screen - Audio Player"
                className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                fill={true}
              />
            </GoldFrame>
            <div className="absolute -inset-3.5 rounded-[34px] border-2 border-vos-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-slow-pulse-glow -z-10 shadow-highlight-glow" />
          </div>
        </div>
        <div className="space-y-8 md:space-y-10 animate-fade-in-up animation-delay-400">
          <div>
            <span className="inline-flex items-center gap-2.5 bg-vos-accent text-vos-primary px-6 py-3 text-sm font-bold rounded-full mb-6 uppercase tracking-wider shadow-lifted hover:shadow-highlight-glow transition-shadow duration-300 animate-slow-pulse-glow">
              <Zap className="w-5 h-5" />
              Instant Spiritual Uplift
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-vos-primary mb-5 tracking-tight leading-tight">
              Your Direct Line to Divine Wisdom
            </h2>
            <p className="text-lg md:text-xl text-vos-secondary leading-relaxed">
              Unlock features meticulously designed to{" "}
              <strong className="text-vos-primary">
                deepen your connection
              </strong>
              , elevate your spirit, and bring sacred teachings to life—right in
              your hands.
            </p>
          </div>

          <ul className="space-y-7">
            {[
              {
                icon: PlayCircle,
                title: "Immersive Audio Sanctuary",
                desc: "Lose yourself in crystal-clear narrations and reflective soundscapes that transport your soul.",
              },
              {
                icon: QuoteIcon,
                title: "Daily Manna: Wisdom Delivered",
                desc: "Awaken to potent, handpicked quotes that inspire and guide your day's sacred journey.",
              },
              {
                icon: ListChecks,
                title: "Navigate by Spirit",
                desc: "Effortlessly explore teachings by theme, book, or spiritual focus with our intuitive guide.",
              },
              {
                icon: CalendarDays,
                title: "Guided Transformation Journeys",
                desc: "Embark on multi-day reflections that unfold profound insights and lasting spiritual growth.",
              },
            ].map((feature) => (
              <li
                key={feature.title}
                className="flex items-start gap-4.5 group transition-all duration-300 ease-out hover:bg-vos-card-light/70 p-4 rounded-xl hover:shadow-lifted -m-4"
              >
                <div className="p-3 bg-vos-accent/20 rounded-full mt-1 group-hover:bg-vos-accent/30 transition-colors duration-300 shadow-soft group-hover:shadow-glow_accent">
                  <feature.icon
                    className="w-8 h-8 text-vos-accent shrink-0 group-hover:scale-110 transition-transform"
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-vos-primary font-serif mb-1.5">
                    {feature.title}
                  </h3>
                  <p className="text-vos-secondary text-sm md:text-base leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
