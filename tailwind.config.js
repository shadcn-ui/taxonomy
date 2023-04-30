const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./ui/**/*.{ts,tsx}",
    ],
    darkMode: ["class"],
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
            typography: ({ theme }) => ({
                pink: {
                    css: {
                        "--tw-prose-body": theme("colors.pink[800]"),
                        "--tw-prose-headings": "hsl(var(--primary))",
                        "--tw-prose-lead": theme("colors.pink[700]"),
                        "--tw-prose-links": theme("colors.pink[900]"),
                        "--tw-prose-bold": theme("colors.pink[900]"),
                        "--tw-prose-counters": theme("colors.pink[600]"),
                        "--tw-prose-bullets": theme("colors.pink[400]"),
                        "--tw-prose-hr": theme("colors.pink[300]"),
                        "--tw-prose-quotes": theme("colors.pink[900]"),
                        "--tw-prose-quote-borders": theme("colors.pink[300]"),
                        "--tw-prose-captions": theme("colors.pink[700]"),
                        "--tw-prose-code": theme("colors.pink[900]"),
                        "--tw-prose-pre-code": theme("colors.pink[100]"),
                        "--tw-prose-pre-bg": theme("colors.pink[900]"),
                        "--tw-prose-th-borders": theme("colors.pink[300]"),
                        "--tw-prose-td-borders": theme("colors.pink[200]"),
                        "--tw-prose-invert-body": theme("colors.pink[200]"),
                        "--tw-prose-invert-headings": theme("colors.white"),
                        "--tw-prose-invert-lead": theme("colors.pink[300]"),
                        "--tw-prose-invert-links": theme("colors.white"),
                        "--tw-prose-invert-bold": theme("colors.white"),
                        "--tw-prose-invert-counters": theme("colors.pink[400]"),
                        "--tw-prose-invert-bullets": theme("colors.pink[600]"),
                        "--tw-prose-invert-hr": theme("colors.pink[700]"),
                        "--tw-prose-invert-quotes": theme("colors.pink[100]"),
                        "--tw-prose-invert-quote-borders":
                            theme("colors.pink[700]"),
                        "--tw-prose-invert-captions": theme("colors.pink[400]"),
                        "--tw-prose-invert-code": theme("colors.white"),
                        "--tw-prose-invert-pre-code": theme("colors.pink[300]"),
                        "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
                        "--tw-prose-invert-th-borders":
                            theme("colors.pink[600]"),
                        "--tw-prose-invert-td-borders":
                            theme("colors.pink[700]"),
                    },
                },
            }),
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: "calc(var(--radius) - 4px)",
            },
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
                heading: ["var(--font-heading)", ...fontFamily.sans],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("@tailwindcss/typography"),
    ],
}
