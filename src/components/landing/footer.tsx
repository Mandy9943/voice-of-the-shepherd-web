import Link from "next/link"
import { Instagram, Youtube, BookHeart } from "lucide-react" // Added BookHeart

export function Footer() {
  return (
    <footer className="bg-vos-muted py-10 md:py-12 text-vos-secondary border-t border-vos-border/70">
      <div className="container mx-auto px-4 md:px-6 max-w-(--breakpoint-lg) flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center gap-2 text-sm">
          <BookHeart size={18} className="text-vos-primary/70" />
          <span>&copy; {new Date().getFullYear()} Voice of the Shepherd.</span>
        </div>
        <nav className="flex gap-x-6 gap-y-3 flex-wrap justify-center">
          <Link href="/privacy" className="text-sm hover:text-vos-primary transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm hover:text-vos-primary transition-colors duration-200">
            Terms of Service
          </Link>
          <Link
            href="https://github.com/vercel/v0" // Example link
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-vos-primary transition-colors duration-200"
          >
            GitHub
          </Link>
        </nav>
        <div className="flex gap-5">
          <Link
            href="#"
            aria-label="Instagram"
            className="text-vos-secondary hover:text-vos-primary transition-colors duration-200 transform hover:scale-110"
          >
            <Instagram size={22} strokeWidth={1.75} />
          </Link>
          <Link
            href="#"
            aria-label="YouTube"
            className="text-vos-secondary hover:text-vos-primary transition-colors duration-200 transform hover:scale-110"
          >
            <Youtube size={22} strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
