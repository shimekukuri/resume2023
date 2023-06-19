/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        heightscreen: {
          100: { transform: 'scale(1.6)' },
        },

        scale: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.03)' },
        },
        chatBoxClose: {
          '0%': { 'border-radius': '0px', height: '16rem', width: '16rem' },
          '100%': {
            'border-radius': '9999px',
            height: '3rem',
            width: '3rem',
          },
        },
        'opacity-to-zero': {
          '0%': { opacity: 1 },
          '85%': { opacity: 0 },
          '100%': { display: 'none' },
        },
        'opacity-to-one': {
          '0%': { display: 'none' },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'height-screen': '200 ease-in-out forwards heightscreen',
        'scale-up': '100ms ease-in forwards scale',
        'chat-box-close-200': '200ms ease-in-out forwards chatBoxClose',
        'chat-box-close-300': '300ms ease-in-out forwards chatBoxClose',
        'chat-box-close-400': '400ms ease-in-out forwards chatBoxClose',
        'chat-box-close-500': '500ms ease-in-out forwards chatBoxClose',
        'chat-box-close-600': '600ms ease-in-out forwards chatBoxClose',
        'opacity-to-zero': '200ms ease-in forwards opacity-to-zero',
        'opacity-to-one-200': '200ms ease-in forwards opacity-to-one',
        'opacity-to-one-400': '400ms ease-in forwards opacity-to-one',
        'opacity-to-one-600': '600ms ease-in forwards opacity-to-one',
        'opacity-to-one-800': '800ms ease-in forwards opacity-to-one',
        'opacity-to-one': '1000ms ease-in forwards opacity-to-one',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('@tailwindcss/container-queries'),
  ],
};
