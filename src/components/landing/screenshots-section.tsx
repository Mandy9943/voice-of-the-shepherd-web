import Image from "next/image";
import { GoldFrame } from "./gold-frame";

const screenshots = [
  {
    query: "serene lake app screen spiritual theme ultra hd photorealistic",
    alt: "App screen with lake background",
    src: "/screenshot-5.jpg",
  },
  {
    query: "forest path app screen spiritual theme ultra hd photorealistic",
    alt: "App screen with forest path",
    src: "/screenshot-6.jpg",
  },
  {
    query:
      "mountain sunrise app screen spiritual theme ultra hd photorealistic",
    alt: "App screen with mountain sunrise",
    src: "/screenshot-7.jpg",
  },
  {
    query: "calm beach app screen spiritual theme ultra hd photorealistic",
    alt: "App screen with calm beach",
    src: "/screenshot-8.jpg",
  },
];

export function ScreenshotsSection() {
  return (
    <section className="w-full py-section-gap bg-vos-card-light border-b border-vos-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-(--breakpoint-lg) space-y-16 md:space-y-20">
        <div className="text-center space-y-4 md:space-y-5 animate-fade-in-up">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-vos-primary tracking-tight leading-tight">
            Immerse Yourself in Visual Serenity
          </h2>
          <p className="text-lg md:text-xl text-vos-secondary max-w-3xl mx-auto leading-relaxed">
            Explore the tranquil interface, meticulously designed to help you{" "}
            <strong className="text-vos-primary">
              focus, reflect, and connect
            </strong>
            . Each screen is a gateway to peace.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-8">
          {screenshots.map((shot, index) => (
            <div
              key={index}
              className="aspect-9/18 group animate-fade-in-up transform hover:scale-105 transition-transform duration-300 ease-out"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <GoldFrame
                className="w-full h-full"
                borderRadius="rounded-3xl"
                padding="p-1.5"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill={true}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  priority={index < 2}
                />
              </GoldFrame>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
