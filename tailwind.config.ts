import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      container:{
        center:true,
        // padding: '15px',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px', // Default Tailwind setting
          xl: '1280px', // Default Tailwind setting
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    
       },
  },
  plugins: [],
};
export default config;
