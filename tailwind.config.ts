import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1c1b1a",
        terracotta: "#c65d33",
        cream: "#f7f4ef",
      },
    },
  },
  plugins: [],
};

export default config;
