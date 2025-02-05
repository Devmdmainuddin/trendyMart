/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'josefin': ["Josefin Sans", 'sans-serif'],
     
    },
    extend: {
      boxShadow: {
        'customshadow': '0px 8px 40px 0px rgba(49, 32, 138, 0.05)', // Define custom shadow
        'cusshadow': '0px 12px 40px 0px rgba(49, 32, 138, 0.05)',
        'cusboxhadow': '0px 0px 20px 5px rgba(248, 246, 253, 0.75)' ,
        'commentuserShadow': '0px 0px 17px 0px rgba(0, 0, 0, 0.25)'

      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

