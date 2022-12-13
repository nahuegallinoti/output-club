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
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
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
        events: 'repeat(2, auto)',
        streams: '2rem 1fr auto'
      },
      animation: {
        'pulse-fast': 'pulseFast 1.5s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite'
      },
      keyframes: {
        pulseFast: {
          '50%': { opacity: 0.5 },
          '0%, 100%': { opacity: 1 }
        },
        typeWriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        }
      }
    }
  },
  plugins: []
}
