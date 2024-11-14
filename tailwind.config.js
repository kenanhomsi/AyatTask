/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
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
      boxShadow: {
        generalTableUnderShadow: "0px 12px 24px -4px #919EAB1F",
        generalTableShadow: " 0px 0px 2px 0px #919EAB33",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
