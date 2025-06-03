import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { StarRating } from "./star-rating"
import Image from "next/image"
import { Quote, Users } from "lucide-react"

const reviews = [
  {
    name: "Sarah M.",
    location: "California, USA",
    avatarQuery: "woman smiling softly spiritual serene professional headshot",
    rating: 5,
    title: "Life-Changing Peace!",
    review:
      "This app is a divine gift. It's become my daily sanctuary. The audio readings are incredibly calming, and the design itself feels like a prayer. Absolutely essential!",
  },
  {
    name: "David K.",
    location: "Ontario, Canada",
    avatarQuery: "man contemplative peaceful nature background professional headshot",
    rating: 5,
    title: "Masterfully Crafted & Inspiring",
    review:
      "The quality and depth for a FREE app are astounding. It's clear this was made with immense love and care. It's helping me connect with teachings like never before.",
  },
  {
    name: "Linda P.",
    location: "Kent, UK",
    avatarQuery: "older woman serene thoughtful expression professional headshot",
    rating: 5,
    title: "My Daily Dose of Heaven",
    review:
      "A truly wonderful companion for finding peace in a chaotic world. The daily quotes are a perfect start to my day. I feel more centered and hopeful. Thank you!",
  },
]

export function ReviewsSection() {
  return (
    <section className="w-full py-section-gap bg-vos-bg-light">
      <div className="container mx-auto px-4 md:px-6 max-w-(--breakpoint-lg) space-y-16 md:space-y-20">
        <div className="text-center space-y-4 md:space-y-5 animate-fade-in-up">
          <div className="inline-flex items-center gap-3 bg-vos-accent/10 text-vos-accent border-2 border-vos-accent/40 px-5 py-2 rounded-full text-base font-semibold mb-4 shadow-soft hover:shadow-glow_accent transition-shadow">
            <Users size={20} />
            <span>
              Join <strong className="text-vos-primary">25,000+ Souls</strong> Finding Daily Peace
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-vos-primary tracking-tight leading-tight">
            Hear the Echoes of Transformed Lives
          </h2>
          <p className="text-lg md:text-xl text-vos-secondary max-w-3xl mx-auto leading-relaxed">
            You are not alone. Discover how Voice of the Shepherd guides others to serenity and wisdom.{" "}
            <strong className="text-vos-primary">Your story could be next.</strong>
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, idx) => (
            <Card
              key={idx}
              className="bg-vos-card-light rounded-3xl shadow-lifted border-2 border-vos-border/60 transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl group animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${200 + idx * 100}ms` }}
            >
              <CardHeader className="p-6 md:p-7 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=64&width=64&query=${review.avatarQuery.replace(/\s/g, "+")}`}
                    alt={review.name}
                    width={56}
                    height={56}
                    className="rounded-full border-2 border-vos-muted object-cover shadow-md"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-vos-primary">{review.name}</h4>
                    <p className="text-xs text-vos-secondary/80 -mt-0.5">{review.location}</p>
                    <StarRating rating={review.rating} size={18} showAnimation={true} className="mt-1" />
                  </div>
                </div>
                <h3 className="font-serif text-xl md:text-[1.3rem] font-medium text-vos-primary leading-tight">
                  {review.title}
                </h3>
              </CardHeader>
              <CardContent className="p-6 md:p-7 pt-0 grow">
                <Quote className="w-9 h-9 text-vos-accent/30 mb-2.5 -ml-1.5" strokeWidth={1.25} />
                <p className="text-vos-secondary text-sm md:text-base leading-relaxed italic">
                  &ldquo;{review.review}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center pt-6 animate-fade-in-up animation-delay-600">
          <p className="text-lg text-vos-secondary">
            ...and <strong className="text-vos-primary font-semibold">many more</strong> experiencing daily blessings.{" "}
            <Link href="#reviews-all" className="text-vos-accent hover:underline font-semibold">
              See All Testimonials
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
