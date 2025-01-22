import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small screens
        sm: "640px", // Small screens (default)
        md: "768px", // Medium screens (default)
        lg: "1024px", // Large screens (default)
        xl: "1280px", // Extra large screens (default)
        "2xl": "1536px", // 2X extra large screens (default)
        "3xl": "1920px", // Custom 3X extra large
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        "havilah-deep-cove": "#0F0F46",
        "havilah-light-deep-cove": "#333362",
        "havilah-whiskey": "#CDA274",
        "havilah-light-whiskey": "#D5B089",
      },
      backgroundColor: {
        "dark-mode": "#000000", 
        "light-mode": "#ffffff", 
        "havilah-deep-cove": "#0F0F46",
        "havilah-light-deep-cove": "#333362",
        "havilah-whiskey": "#CDA274",
        "havilah-light-whiskey": "#D5B089",

      },
      fontFamily: {
        robotoSlab: ["Roboto Slab", "serif"], // Add Roboto Slab
        montserrat: ["Montserrat", "sans-serif"], // Add Montserrat
      },
    },
  },
  plugins: [],
} satisfies Config;
