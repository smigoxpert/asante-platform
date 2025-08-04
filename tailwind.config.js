/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // African Earth Tones
        terracotta: {
          50: '#fdf4f3',
          100: '#fce7e4',
          200: '#f9d2cd',
          300: '#f4b5ab',
          400: '#ec8b7a',
          500: '#dc6650',
          600: '#ca4a32',
          700: '#a93c27',
          800: '#8c3425',
          900: '#752f25',
        },
        ochre: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        ubuntu: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Heritage Colors
        heritage: {
          gold: '#d4af37',
          bronze: '#cd7f32',
          copper: '#b87333',
          earth: '#8b4513',
          clay: '#d2691e',
        }
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        adinkra: ['AdinkraSymbols', 'serif'],
        heritage: ['Georgia', 'serif'],
      },
      spacing: {
        ubuntu: '1.618rem', // Golden ratio spacing
        heritage: '2.5rem',
      },
      borderRadius: {
        ubuntu: '0.5rem',
        heritage: '1rem',
        circle: '50%',
      },
      animation: {
        'ubuntu-pulse': 'ubuntu-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'heritage-glow': 'heritage-glow 3s ease-in-out infinite alternate',
        'cultural-float': 'cultural-float 6s ease-in-out infinite',
        'sunset-gradient': 'sunset-gradient 8s ease-in-out infinite',
      },
      keyframes: {
        'ubuntu-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'heritage-glow': {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
        'cultural-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'sunset-gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'african-sunset': 'linear-gradient(135deg, #dc6650 0%, #f59e0b 50%, #d4af37 100%)',
        'heritage-pattern': 'url("/images/patterns/heritage-pattern.svg")',
        'ubuntu-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
      },
      boxShadow: {
        'heritage': '0 10px 25px rgba(212, 175, 55, 0.15)',
        'ubuntu': '0 10px 25px rgba(14, 165, 233, 0.15)',
        'cultural': '0 20px 40px rgba(139, 69, 19, 0.1)',
      }
    }
  },
  plugins: []
} 