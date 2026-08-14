/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#07090E',
        bgCard: '#0E131F',
        bgCardHover: '#141B2D',
        cyanGlow: '#00F0FF',
        blueAccent: '#3B82F6',
        emeraldAccent: '#10B981',
        violetAccent: '#8B5CF6',
        roseAccent: '#F43F5E',
        amberAccent: '#F59E0B',
        textMain: '#F3F4F6',
        textMuted: '#9CA3AF',
        borderMuted: '#1F293D',
        borderCyan: 'rgba(0, 240, 255, 0.3)'
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        glowCyan: '0 0 25px rgba(0, 240, 255, 0.25)',
        glowBlue: '0 0 25px rgba(59, 130, 246, 0.25)',
        glowEmerald: '0 0 25px rgba(16, 185, 129, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'ticker': 'ticker 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
