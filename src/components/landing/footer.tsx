import { BookHeart } from "lucide-react"; // Added BookHeart
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-vos-muted py-10 md:py-12 text-vos-secondary border-t border-vos-border/70">
      <div className="container mx-auto px-4 md:px-6 max-w-(--breakpoint-lg) flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="flex items-center gap-2 text-sm">
          <BookHeart size={18} className="text-vos-primary/70" />
          <span>&copy; {new Date().getFullYear()} Voice of the Shepherd.</span>
        </div>
        <nav className="flex gap-x-6 gap-y-3 flex-wrap justify-center">
          <Link
            href="/privacy-policy"
            className="text-sm hover:text-vos-primary transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
