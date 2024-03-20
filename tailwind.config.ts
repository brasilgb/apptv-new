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
        'solar-blue-dark': '#154295',
        'solar-blue-light': '#019EE3',
        'solar-green-light': '#A7C414',
        'solar-gray-light': '#F6F5FA',
      },
      fontFamily: {
        Roboto: ['var(--font-roboto)'],
      },
      backgroundImage: {
        'bg-image': "url('/images/wallpaper.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
