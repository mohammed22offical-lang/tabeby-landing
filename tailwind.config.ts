import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#E6FAF9",
          100: "#B3F0ED",
          200: "#80E6E1",
          300: "#4DDCD5",
          400: "#1AD2C9",
          500: "#0FB9B1",
          600: "#0AA79D",
          700: "#08857D",
          800: "#06635D",
          900: "#04413D",
        },
        accent: {
          orange: "#F5B971",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        arabic: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(15, 185, 177, 0.08)",
        "soft-lg": "0 10px 40px rgba(15, 185, 177, 0.12)",
        card: "0 2px 12px rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        "gradient-teal": "linear-gradient(135deg, #0FB9B1 0%, #0AA79D 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
