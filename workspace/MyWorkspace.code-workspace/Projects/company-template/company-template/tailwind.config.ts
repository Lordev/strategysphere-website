import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            backgroundImage: {
                "hero-buildings": "url('/Background-hero.jpg')",
                "hero-side": "url('/office-lowq.jpg')",
                footer: "url('/skyline.jpg')",
                "office-buildings":
                    "radial-gradient( var(--background),  var(--background), var(--background)), url(/building-orange.jpg)",
                counseling: "url('/meetings.jpg')",
                earth: "url('/earth.png')",
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "hsl(var(--card-foreground))",
                },
            },

            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
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
                "zoom-top-right": {
                    from: {
                        backgroundPosition: "0% 0%",
                        transform: "scale(1)",
                    },
                    to: {
                        backgroundPosition: "10% 10%",
                        transform: "scale(1.1)",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "zoom-top-right": "zoom-top-right 5s ease-in",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), require("tailwind-gradient-mask-image")],
} satisfies Config;

export default config;
