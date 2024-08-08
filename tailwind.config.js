/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        '-white-': '#fff',
        'gray': {
          '100': '#e1e1e6',
          '300': '#c4c4cc',
          '400': '#8d8d99',
          '600': '#323238',
          '700': '#29292e',
          '800': '#202024',
          '900': '#121214',
          '950': '#09090A',
        },
        gold: {
          '200': '#F0E68C',
          '500': '#FFD700',
          '800': '#DAA520',
        },
        button: {
          '100': '#FFD700',
          '200': '#DAA520',
        },
      },
      backgroundImage: {
        'team-pattern': "linear-gradient(to right, #d9d92822 1px, transparent 1px), linear-gradient(to bottom, #121205 1px, transparent 16px)",
      },
      backgroundSize: {
        'team-size': '14px 24px',
      },
      maskImage: {
        'team-mask': "radial-gradient(ellipse at center, #000 70%, transparent 110%)",
      },
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
