/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    
    extend: {
      colors:{
      primary: '#7E44DB',
      yw: '#F08010'
    },
    spacing:{
      '90': '90vh'
    }
    },
  },
  plugins: []
}

