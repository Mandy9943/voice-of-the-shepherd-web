import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Ear, BookmarkPlus, HeartHandshake } from "lucide-react"

const benefits = [
  {
    icon: Ear,
    title: "Unlock Daily Serenity",
    description:
      "Don't delay your peace. Instantly access your haven of calm and integrate profound reflection into your life, starting now.",
  },
  {
    icon: BookmarkPlus,
    title: "Curate Sacred Wisdom",
    description: "Capture every insight. Build your personal library of inspiration before precious thoughts fade.",
  },
  {
    icon: HeartHandshake,
    title: "Ignite Spiritual Evolution",
    description:
      "Why wait for growth? Deepen your connection and understanding today with consistent, divinely-guided engagement.",
  },
]

export function UserBenefitsSection() {
  return (
    <section className="w-full py-section-gap bg-vos-card-light border-b border-vos-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-(--breakpoint-lg) space-y-16 md:space-y-20">
        <div className="text-center space-y-4 md:space-y-5 animate-fade-in-up">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-vos-primary tracking-tight leading-tight">
            The Transformation You Seek Awaits...
          </h2>
          <p className="text-lg md:text-xl text-vos-secondary max-w-3xl mx-auto leading-relaxed">
            Voice of the Shepherd guides you toward a life of deeper meaning, peace, and spiritual connection.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, idx) => (
            <Card
              key={benefit.title}
              className="bg-vos-bg-light rounded-3xl shadow-lifted border-2 border-vos-border/60 hover:shadow-xl hover:-translate-y-3 transition-all duration-300 ease-out flex flex-col group animate-fade-in-up"
              style={{ animationDelay: `${200 + idx * 100}ms` }}
            >
              <CardHeader className="items-center pt-8 md:pt-10">
                <div className="relative p-4 bg-vos-accent/20 rounded-full mb-6 inline-block group-hover:bg-vos-accent/30 transition-colors duration-300 shadow-soft group-hover:shadow-glow_accent">
                  <benefit.icon
                    className="w-10 h-10 md:w-11 md:h-11 text-vos-accent group-hover:scale-110 transition-transform duration-300"
                    strokeWidth={1.5}
                  />
                </div>
                <CardTitle className="text-2xl md:text-[1.8rem] font-semibold text-vos-primary font-serif text-center leading-tight">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-8 md:pb-10 px-6">
                <p className="text-vos-secondary text-sm md:text-base leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
