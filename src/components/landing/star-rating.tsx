import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  totalStars?: number
  size?: number
  className?: string
  starClassName?: string
  showAnimation?: boolean
}

export function StarRating({
  rating,
  totalStars = 5,
  size = 20,
  className,
  starClassName,
  showAnimation = false,
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {[...Array(totalStars)].map((_, index) => {
        const starStyle = showAnimation ? { animationDelay: `${index * 0.05}s` } : {}
        return (
          <Star
            key={index}
            size={size}
            className={cn(
              "transition-colors duration-200",
              index < Math.floor(rating)
                ? "text-vos-accent fill-vos-accent"
                : index < Math.ceil(rating)
                  ? "text-vos-accent" // For half-star, just show outline or use a half-star icon
                  : "text-vos-border/70",
              starClassName,
              showAnimation && index < Math.floor(rating) ? "animate-star-fill opacity-0" : "",
            )}
            style={starStyle}
            strokeWidth={1.5}
          />
        )
      })}
    </div>
  )
}
