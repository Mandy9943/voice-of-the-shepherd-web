import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "vos-bg-light": "#F5F2E7",
        "vos-card-light": "#FFFFFF",
        "vos-text-primary": "#333333",
        "vos-primary": {
          DEFAULT: "#223C63",
          darker: "#1A2E4F",
        },
        "vos-secondary": "#6E665D",
        "vos-accent": "#D4AF37", // Gold
        "vos-muted": "#E5E0D5",
        "vos-border": "#D8D0C0",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.08)",
        subtle: "0 2px 6px rgba(0,0,0,0.06)",
        medium: "0 8px 16px rgba(0, 0, 0, 0.1)",
        lifted: "0 12px 24px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.06)",
        glow_accent: "0 0 20px 2px rgba(212, 175, 55, 0.35)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
        "cta-glow": "0 0 25px 5px rgba(212, 175, 55, 0.4)",
        "gold-frame":
          "0 0 0 2px #D4AF37, 0 0 0 4px rgba(212,175,55,0.3), 0 4px 8px rgba(0,0,0,0.2)",
        "gold-frame-hover":
          "0 0 0 3px #D4AF37, 0 0 0 6px rgba(212,175,55,0.4), 0 6px 12px rgba(0,0,0,0.25)",
        "highlight-glow": "0 0 30px 8px rgba(212, 175, 55, 0.5)", // More intense glow for special highlights
      },
      spacing: {
        "section-gap": "clamp(3.5rem, 12vw, 6rem)", // Slightly more spacing
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "subtle-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".85", transform: "scale(1.03)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" }, // Slightly more pronounced
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        shine: {
          "0%": { "background-position": "-200% center" },
          "100%": { "background-position": "200% center" },
        },
        "slow-pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 18px 2px rgba(212, 175, 55, 0.25)" },
          "50%": { boxShadow: "0 0 28px 6px rgba(212, 175, 55, 0.45)" },
        },
        "star-fill": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" }, // Reduced bounce height
        },
        "reveal-light": {
          // For revealing text or elements with a light sweep
          "0%": { "clip-path": "inset(0 100% 0 0)" },
          "100%": { "clip-path": "inset(0 0 0 0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "subtle-pulse": "subtle-pulse 2.8s ease-in-out infinite",
        "fade-in-up":
          "fade-in-up 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) forwards", // Smoother easing
        "gradient-shift": "gradient-shift 4s ease infinite", // Sped up from 12s to 4s
        shine: "shine 3s linear infinite",
        "slow-pulse-glow": "slow-pulse-glow 3s ease-in-out infinite",
        "star-fill": "star-fill 0.5s ease-out forwards",
        "bounce-subtle": "bounce-subtle 2.5s ease-in-out infinite", // Increased duration for slower cycle
        "reveal-light": "reveal-light 1s ease-out forwards",
      },
      backgroundImage: {
        "shine-gradient":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
