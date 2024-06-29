/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        limeGreen: 'var(--lime-green)',
        brightRed: 'var(--bright-red)',
        facebook: 'var(--facebook)',
        twitter: 'var(--twitter)',
        instagram: 'var(--instagram)',
        youtube: 'var(--youtube)',
        darkToggle: 'var(--dark-toggle)',
        lightToggle: 'var(--light-toggle)',
        darkBg: 'var(--dark-bg)',
        darkTopBgPattern: 'var(--dark-top-bg-pattern)',
        darkCardBg: 'var(--dark-card-bg)',
        darkDesaturatedText: 'var(--dark-desaturated-text)',
        whiteText: 'var(--white-text)',
        lightBg: 'var(--light-bg)',
        lightTopBgPattern: 'var(--light-top-bg-pattern)',
        lightCardBg: 'var(--light-card-bg)',
        lightDarkGrayishText: 'var(--light-dark-grayish-text)',
        lightVeryDarkText: 'var(--light-very-dark-text)',
      },
    },
  },
  plugins: [],
}