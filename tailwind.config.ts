import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'adv-dark': '#0A0F14',
        'adv-darker': '#0E141C',
        'adv-accent': '#C8FF00',
        'adv-white': '#FFFFFF',
        'adv-gray': '#888888',
        'adv-border': '#1E2530',
      },
      fontFamily: {
        'primary': ['var(--font-primary)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
