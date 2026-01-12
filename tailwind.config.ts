import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // זה יכסה את כל הקבצים בתוך src
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // לביטחון אם יש קבצים מחוץ ל-src
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
      },
    },
  },
  plugins: [],
};
export default config;
