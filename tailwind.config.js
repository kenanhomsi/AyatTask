/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Login-backgroundImage": "url('/images/LoginBackground.png')",
      },
      colors: {
        Primary: "#0C2B47",
        secondry: "#4ADDCA",
        outline: "#75757533",
        dark: "#212B36",
      },
    },
  },
  plugins: [],
};
