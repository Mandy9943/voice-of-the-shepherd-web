"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, ArrowRight, Lightbulb, Heart, Wind } from "lucide-react"
import { cn } from "@/lib/utils"

interface Question {
  id: number
  text: string
  options: { text: string; value: string; icon?: React.ElementType }[]
  key: string
}

const questions: Question[] = [
  {
    id: 1,
    text: "What feeling do you most seek in your daily life right now?",
    key: "feeling",
    options: [
      { text: "Inner Calm", value: "calm", icon: Wind },
      { text: "Mental Clarity", value: "clarity", icon: Lightbulb },
      { text: "Spiritual Connection", value: "connection", icon: Sparkles },
      { text: "Emotional Strength", value: "strength", icon: Heart },
    ],
  },
  {
    id: 2,
    text: "Which aspect of your spirit do you wish to nurture most?",
    key: "aspect",
    options: [
      { text: "Quiet Reflection", value: "reflection" },
      { text: "Deeper Understanding", value: "understanding" },
      { text: "A Grateful Heart", value: "gratitude" },
      { text: "Resilient Faith", value: "faith" },
    ],
  },
]

interface Answers {
  [key: string]: string | null
}

interface PathPreview {
  title: string
  points: string[]
  cta: string
}

export function PersonalizedPathFinder() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>({ feeling: null, aspect: null })
  const [showPath, setShowPath] = useState(false)
  const [pathPreview, setPathPreview] = useState<PathPreview | null>(null)

  const handleAnswer = (questionKey: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionKey]: value }))
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      generatePathPreview({ ...answers, [questionKey]: value })
      setShowPath(true)
    }
  }

  const generatePathPreview = (finalAnswers: Answers) => {
    let title = "Your Personalized Path to Peace Awaits"
    const points = []
    const cta = "Download the App to Begin Your Full Journey"

    // Simple logic - can be expanded significantly
    if (finalAnswers.feeling === "calm") {
      points.push("Guided meditations to soothe your mind and spirit.")
      points.push("Reflective soundscapes for deep relaxation.")
    } else if (finalAnswers.feeling === "clarity") {
      points.push("Curated scriptures to illuminate your thoughts.")
      points.push("Daily wisdom to sharpen your spiritual focus.")
    } else if (finalAnswers.feeling === "connection") {
      points.push("Teachings that deepen your bond with the divine.")
      points.push("Community features to share your journey (coming soon).")
    } else if (finalAnswers.feeling === "strength") {
      points.push("Affirmations to build inner resilience.")
      points.push("Stories of faith to inspire courage.")
    }

    if (finalAnswers.aspect === "reflection") {
      points.push("Journaling prompts for quiet contemplation.")
      title = "Your Path to Deeper Reflection"
    } else if (finalAnswers.aspect === "understanding") {
      points.push("Thematic studies of sacred texts.")
      title = "Your Path to Greater Understanding"
    } else if (finalAnswers.aspect === "gratitude") {
      points.push("Practices to cultivate a thankful heart daily.")
      title = "Your Path to Abundant Gratitude"
    } else if (finalAnswers.aspect === "faith") {
      points.push("Testimonies and lessons to strengthen your beliefs.")
      title = "Your Path to Unshakeable Faith"
    }

    if (points.length === 0) {
      // Fallback
      points.push("Access to our full library of scriptures and audio.")
      points.push("Daily inspirational quotes to uplift your spirit.")
      points.push("Tools to help you listen, reflect, and be still.")
    }

    setPathPreview({ title, points: points.slice(0, 3), cta }) // Max 3 points for preview
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setAnswers({ feeling: null, aspect: null })
    setShowPath(false)
    setPathPreview(null)
  }

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <section className="w-full py-section-gap bg-vos-muted/70">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-md">
        <Card className="bg-vos-card-light shadow-xl border-2 border-vos-border/60 rounded-3xl overflow-hidden animate-fade-in-up">
          {!showPath ? (
            <>
              <CardHeader className="text-center p-8 bg-vos-bg-light border-b border-vos-border/50">
                <div className="mx-auto text-6xl mb-4" role="img" aria-label="Dove emoji">
                  🕊️
                </div>
                <CardTitle className="font-serif text-3xl lg:text-4xl font-bold text-vos-primary tracking-tight">
                  Discover Your Personal Path to Peace
                </CardTitle>
                <p className="text-vos-secondary mt-2 text-lg">
                  Answer a few questions, and we&apos;ll reveal a glimpse of how Voice of the Shepherd can guide you.
                </p>
              </CardHeader>
              <CardContent className="p-8 md:p-10 space-y-8">
                <div className="space-y-3">
                  <p className="text-xl font-semibold text-vos-primary text-center">{currentQuestion.text}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    {currentQuestion.options.map((option) => (
                      <Button
                        key={option.value}
                        variant="outline"
                        size="lg"
                        className={cn(
                          "w-full justify-start text-left py-6 text-base rounded-xl border-2 hover:border-vos-accent hover:bg-vos-accent/10 transition-all duration-200 group",
                          answers[currentQuestion.key] === option.value
                            ? "bg-vos-accent/15 border-vos-accent ring-2 ring-vos-accent"
                            : "border-vos-border/70 bg-vos-bg-light/50 hover:bg-vos-muted/70",
                        )}
                        onClick={() => handleAnswer(currentQuestion.key, option.value)}
                      >
                        {option.icon && (
                          <option.icon className="w-5 h-5 mr-3 text-vos-accent group-hover:scale-110 transition-transform" />
                        )}
                        {option.text}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="text-center text-sm text-vos-secondary">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </div>
              </CardContent>
            </>
          ) : pathPreview ? (
            <>
              <CardHeader className="text-center p-8 bg-gradient-to-br from-vos-accent/20 via-vos-bg-light to-vos-accent/10 border-b-2 border-vos-accent/50">
                <Check className="mx-auto h-16 w-16 text-vos-accent mb-4 p-3 bg-white rounded-full shadow-lg border-2 border-vos-accent/50" />
                <CardTitle className="font-serif text-3xl lg:text-4xl font-bold text-vos-primary tracking-tight">
                  {pathPreview.title}
                </CardTitle>
                <p className="text-vos-secondary mt-2 text-lg">
                  Here&apos;s a preview of how Voice of the Shepherd will support your journey:
                </p>
              </CardHeader>
              <CardContent className="p-8 md:p-10 space-y-6">
                <ul className="space-y-4">
                  {pathPreview.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-vos-secondary text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-vos-primary font-semibold text-center pt-4">{pathPreview.cta}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    className="bg-vos-primary text-white hover:bg-vos-primary-darker rounded-xl px-8 py-3 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                    onClick={() => {
                      /* Link to app store */ alert("Redirecting to App Store...")
                    }}
                  >
                    Download App Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-xl px-8 py-3 text-lg border-2 border-vos-border hover:border-vos-primary"
                    onClick={resetQuiz}
                  >
                    Start Over
                  </Button>
                </div>
              </CardContent>
            </>
          ) : null}
        </Card>
      </div>
    </section>
  )
}
