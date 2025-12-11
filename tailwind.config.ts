import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // New color scheme
        "deep-navy": {
          DEFAULT: "#0A2342",
          light: "#1D3557",
          dark: "#051C38",
        },
        "rich-gold": {
          DEFAULT: "#D4AF37",
          light: "#E5C158",
          dark: "#BF9B30",
        },
        "soft-cream": {
          DEFAULT: "#F5F5F0",
          light: "#FFFFFF",
          dark: "#E8E8E0",
        },
        // Keep the old colors for backward compatibility
        "forest-green": {
          DEFAULT: "#0A2342", // Mapped to deep-navy
          light: "#1D3557",
          dark: "#051C38",
        },
        "antique-gold": {
          DEFAULT: "#D4AF37", // Mapped to rich-gold
          light: "#E5C158",
          dark: "#BF9B30",
        },
        sandstone: {
          DEFAULT: "#F5F5F0", // Mapped to soft-cream
          light: "#FFFFFF",
          dark: "#E8E8E0",
        },
        // Legacy colors mapped to new scheme
        navy: {
          DEFAULT: "#0A2342", // Mapped to deep-navy
          light: "#1D3557",
          dark: "#051C38",
        },
        gold: {
          DEFAULT: "#D4AF37", // Mapped to rich-gold
          light: "#E5C158",
          dark: "#BF9B30",
        },
        ivory: {
          DEFAULT: "#F5F5F0", // Mapped to soft-cream
          light: "#FFFFFF",
          dark: "#E8E8E0",
        },
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        lato: ["var(--font-lato)"],
      },
      boxShadow: {
        elegant: "0 15px 35px rgba(0, 0, 0, 0.1)",
        "elegant-hover": "0 20px 40px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
