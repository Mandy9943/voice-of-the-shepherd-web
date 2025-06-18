import { BookOpenText, Headphones, Sparkles, TrendingUp } from "lucide-react";
import Image from "next/image";
import { GoldFrame } from "./gold-frame";

const featuresList = [
  {
    icon: BookOpenText,
    title: "Sacred Texts Unveiled",
    description:
      "Instantly explore a curated library of timeless scriptures and foundational wisdom.",
  },
  {
    icon: Headphones,
    title: "Your Audio Sanctuary",
    description:
      "Immerse yourself in calming narrations and reflections that inspire, renew, and uplift.",
  },
  {
    icon: Sparkles,
    title: "Daily Wisdom Delivered",
    description:
      "Receive divinely inspired quotes and passages each day to illuminate your spiritual path.",
  },
];

const screenshotData = [
  {
    src: "/screenshot-1.jpg",
    alt: "App Screenshot 1 - Content View",
    rotation: "-rotate-3",
    zIndex: "z-10",
    scale: "scale-95",
    positionClasses: "md:translate-x-[-18%] md:translate-y-[3%]",
  },
  {
    src: "/screenshot-2.jpg",
    alt: "App Screenshot 2 - Player View",
    rotation: "rotate-1",
    zIndex: "z-20",
    scale: "scale-100",
    positionClasses: "md:translate-y-[-2%]",
  },
  {
    src: "/screenshot-3.jpg",
    alt: "App Screenshot 3 - Daily Quote",
    rotation: "rotate-3",
    zIndex: "z-10",
    scale: "scale-95",
    positionClasses: "md:translate-x-[18%] md:translate-y-[3%]",
  },
];

export function WhatTheAppDoesSection() {
  return (
    <section
      id="features"
      className="w-full py-section-gap bg-vos-card-light border-y border-vos-border/50 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-(--breakpoint-lg) space-y-12 md:space-y-16 lg:space-y-20">
        <div className="text-center space-y-3 md:space-y-4 lg:space-y-5 animate-fade-in-up">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold text-vos-primary tracking-tight leading-tight px-2">
            Experience the Divine Difference
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-vos-secondary max-w-3xl mx-auto leading-relaxed px-4">
            Voice of the Shepherd is more than an app – it&apos;s your{" "}
            <strong className="text-vos-primary">
              sacred space for spiritual awakening
            </strong>
            . Discover features designed to elevate your daily practice.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">
          {featuresList.map((feature, idx) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-5 sm:p-6 md:p-8 bg-vos-bg-light rounded-2xl md:rounded-3xl shadow-lifted border-2 border-vos-border/60 transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2.5 group animate-fade-in-up"
              style={{ animationDelay: `${200 + idx * 100}ms` }}
            >
              <div className="p-3 md:p-4 bg-vos-accent/20 rounded-full mb-4 md:mb-6 group-hover:bg-vos-accent/30 transition-colors duration-300 shadow-soft group-hover:shadow-glow_accent">
                <feature.icon
                  className="w-8 h-8 md:w-10 md:h-10 text-vos-accent group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-vos-primary mb-2 md:mb-3 font-serif">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-vos-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-16 md:mt-20 lg:mt-28 h-auto min-h-[400px] sm:min-h-[480px] md:min-h-[720px] lg:min-h-[800px] flex justify-center items-center group animate-fade-in-up animation-delay-500">
          {screenshotData.map((shot, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-700 ease-out group-hover:scale-[1.03] ${shot.zIndex} ${shot.rotation} ${shot.scale} ${shot.positionClasses} group-hover:rotate-0 group-hover:translate-x-0! group-hover:translate-y-0! group-hover:scale-105!`}
              style={{
                width: "clamp(140px, 28vw, 320px)",
              }}
            >
              <GoldFrame
                className="w-full h-auto aspect-9/19"
                borderRadius="rounded-2xl md:rounded-3xl lg:rounded-[36px]"
                padding="p-1.5 md:p-2 lg:p-2.5"
              >
                <Image
                  src={shot.src || "/placeholder.svg"}
                  alt={shot.alt}
                  fill={true}
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  priority={index < 2}
                />
              </GoldFrame>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 text-center animate-fade-in-up animation-delay-600">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-vos-primary/5 text-vos-primary border-2 border-vos-primary/20 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-semibold mb-6 shadow-soft hover:shadow-medium transition-shadow max-w-[95%] mx-auto">
            <TrendingUp
              size={18}
              className="md:size-5 text-vos-accent animate-subtle-pulse flex-shrink-0"
            />
            <span className="text-center leading-tight">
              Be first for{" "}
              <strong className="text-vos-primary">new sacred journeys</strong>{" "}
              & exclusive content!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
