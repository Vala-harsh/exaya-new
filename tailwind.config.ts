import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the app directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using src directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(70px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-70px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-in-out',
        'fade-in-down': 'fade-in-down 0.6s ease-in-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        theme: {
          primary: {
            DEFAULT: "rgba(var(--theme-primary), <alpha-value>)",
            50: "rgba(var(--theme-primary-50), <alpha-value>)",
            100: "rgba(var(--theme-primary-100), <alpha-value>)",
            200: "rgba(var(--theme-primary-200), <alpha-value>)",
            300: "rgba(var(--theme-primary-300), <alpha-value>)",
            400: "rgba(var(--theme-primary-400), <alpha-value>)",
            500: "rgba(var(--theme-primary-500), <alpha-value>)",
            600: "rgba(var(--theme-primary-600), <alpha-value>)",
            700: "rgba(var(--theme-primary-700), <alpha-value>)",
            800: "rgba(var(--theme-primary-800), <alpha-value>)",
            900: "rgba(var(--theme-primary-900), <alpha-value>)",
            950: "rgba(var(--theme-primary-950), <alpha-value>)",

          },
          secondary: {
            DEFAULT: "rgba(var(--theme-secondary), <alpha-value>)",
            50: "rgba(var(--theme-secondary-50), <alpha-value>)",
            100: "rgba(var(--theme-secondary-100), <alpha-value>)",
            200: "rgba(var(--theme-secondary-200), <alpha-value>)",
            300: "rgba(var(--theme-secondary-300), <alpha-value>)",
            400: "rgba(var(--theme-secondary-400), <alpha-value>)",
            500: "rgba(var(--theme-secondary-500), <alpha-value>)",
            600: "rgba(var(--theme-secondary-600), <alpha-value>)",
            700: "rgba(var(--theme-secondary-700), <alpha-value>)",
            800: "rgba(var(--theme-secondary-800), <alpha-value>)",
            900: "rgba(var(--theme-secondary-900), <alpha-value>)",
            950: "rgba(var(--theme-secondary-950), <alpha-value>)",

          }
         
        },
      }
    },
  },
  plugins: [],
}
export default config
