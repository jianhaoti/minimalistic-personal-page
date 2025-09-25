import type { Config } from "tailwindcss";

export default {
  darkMode: "media",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: ["0.625rem", "0.875rem"], // 10px with a 14px line-height
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-700": "var(--foreground-700)",
        "foreground-500": "var(--foreground-500)",
        "foreground-300": "var(--foreground-300)",
      },
    },
  },
  plugins: [],
} satisfies Config;
