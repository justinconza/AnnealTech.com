import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Work Sans", "sans-serif"],
        display: ["Orbitron", "Exo", "sans-serif"],
        heading: ["Exo", "Orbitron", "sans-serif"]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        steel: "#1E2B40",      // Steel Blue
        orange: "#FF5700",     // Glowing Orange
        slate: "#121212",      // Slate Gray
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
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
        "glow": {
          "0%, 100%": { 
            textShadow: "0 0 0px rgba(255, 87, 0, 0)",
            boxShadow: "0 0 0px rgba(255, 87, 0, 0)"
          },
          "50%": { 
            textShadow: "0 0 15px rgba(255, 87, 0, 0.8)",
            boxShadow: "0 0 15px rgba(255, 87, 0, 0.8)"
          }
        },
        "forge-spark": {
          "0%": { 
            transform: "translateY(0) scale(0)",
            opacity: "0" 
          },
          "50%": { 
            opacity: "1" 
          },
          "100%": { 
            transform: "translateY(-100px) scale(0.2) rotate(360deg)",
            opacity: "0" 
          }
        },
        "pulse-ring": {
          "0%": { 
            transform: "scale(0.8)",
            opacity: "0" 
          },
          "50%": { 
            opacity: "0.5" 
          },
          "100%": { 
            transform: "scale(1.5)",
            opacity: "0" 
          }
        },
        "data-stream": {
          "0%": { 
            backgroundPosition: "0% 50%" 
          },
          "100%": { 
            backgroundPosition: "100% 50%" 
          }
        },
        "float": {
          "0%, 100%": { 
            transform: "translateY(0)" 
          },
          "50%": { 
            transform: "translateY(-10px)" 
          }
        },
        "cyber-glitch": {
          "0%, 100%": { 
            transform: "translate(0)" 
          },
          "20%": { 
            transform: "translate(-2px, 2px)" 
          },
          "40%": { 
            transform: "translate(-2px, -2px)" 
          },
          "60%": { 
            transform: "translate(2px, 2px)" 
          },
          "80%": { 
            transform: "translate(2px, -2px)" 
          }
        },
        "scan": {
          "0%": { 
            backgroundPosition: "0 -100%" 
          },
          "100%": { 
            backgroundPosition: "0 100%" 
          }
        },
        "progress-fill": {
          "0%": { 
            transform: "scaleX(0)" 
          },
          "100%": { 
            transform: "scaleX(1)" 
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "forge-spark": "forge-spark 1.5s ease-out forwards",
        "pulse-ring": "pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        "data-stream": "data-stream 3s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "cyber-glitch": "cyber-glitch 0.3s cubic-bezier(.25, .46, .45, .94) both",
        "scan": "scan 2s linear infinite",
        "progress-fill": "progress-fill 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
