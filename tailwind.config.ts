import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)"
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          glow: 'hsl(var(--primary-glow))'
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
        },
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        sidebar: {
           background: "hsl(var(--sidebar-background) / <alpha-value>)",
           foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
           primary: "hsl(var(--sidebar-primary) / <alpha-value>)",
           "primary-foreground": "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
           accent: "hsl(var(--sidebar-accent) / <alpha-value>)",
           "accent-foreground": "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
           border: "hsl(var(--sidebar-border) / <alpha-value>)",
           ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
         },
        },
        boxShadow: {
          elegant: "var(--shadow-elegant)",
          glow: "var(--shadow-glow)",
          card: "var(--shadow-card)",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        animation: {
          'fade-in': 'fadeIn 0.6s ease-out',
          'slide-up': 'slideUp 0.8s ease-out',
        },
        keyframes: {
          fadeIn: {
            from: { opacity: '0', transform: 'translateY(20px)' },
            to: { opacity: '1', transform: 'translateY(0)' },
          },
          slideUp: {
            from: { opacity: '0', transform: 'translateY(40px)' },
            to: { opacity: '1', transform: 'translateY(0)' },
          },
        },
        backgroundImage: {
         "hero-gradient": "linear-gradient(135deg, hsl(250 100% 60%), hsl(280 100% 70%))",
         "card-gradient": "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(217.2 32.6% 20%) 100%)",
         "border-gradient": "linear-gradient(90deg, hsl(var(--primary) / 0.2), hsl(var(--primary-glow) / 0.2))",
       },
      },
    },
    plugins: [],
  }

export default config