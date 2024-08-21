import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
    
        title:  "#0070f3",
        mainColor: "#E8E8E8",
        mainTextColor: "#E8E8E8",
        buttonColor: "#1677FF",
        hoverButtonColor: "#8ab5f0",
      },
    },
  },
  plugins: [],
};
export default config;
