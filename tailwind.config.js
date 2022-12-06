/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        projectTitle: '#9cc9e3',
        projectBackground: '#0f0e29'
      },
      gridTemplateColumns: {
        nav: 'auto repeat(5, 1fr)'
      },
      gridTemplateRows: {
        cardProject: '15% auto 30% 10% 1fr'
      },
      animation: {
        'pulse-fast': 'pulseFast 1.5s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite'
      },
      keyframes: {
        pulseFast: {
          '50%': { opacity: 0.5 },
          '0%, 100%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
