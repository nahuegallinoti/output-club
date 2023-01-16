/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      centauri: ['Centauri'],
      varino: ['Varino']
    },
    fontSize: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    letterSpacing: {
      semiExtra: '0.4em',
      extra: '0.5em'
    },
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
        streams: 'repeat(2, auto)'
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
