/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF8E7',
          100: '#FFE7B3',
          200: '#FFD980',
          300: '#FFCB4D',
          400: '#FFBD1A',
          500: '#FFB800',
          600: '#E6A600',
          700: '#CC9400',
          800: '#B38200',
          900: '#997000',
        },
        dark: {
          50: '#2A2A2A',
          100: '#252525',
          200: '#202020',
          300: '#1A1A1A',
          400: '#151515',
          500: '#101010',
          600: '#0A0A0A',
          700: '#050505',
          800: '#030303',
          900: '#000000',
        },
        gold: {
          light: '#FFD700',
          DEFAULT: '#B8860B',
          dark: '#8B6914',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(45deg, #B8860B, #FFD700)',
        'gold-curve': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1000 1000'%3E%3Cpath d='M0,0 Q500,200 1000,0 L1000,1000 L0,1000 Z' fill='%23B8860B' opacity='0.1'/%3E%3C/svg%3E\")",
      },
      maxWidth: {
        container: "1280px",
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};