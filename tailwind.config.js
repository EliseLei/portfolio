module.exports = {
  content: ['./**/*.html', './script/**/*.js'], 
  theme: {
    extend: {
      colors: {
        primary: "#66d9ed",
        primarydark:"364f75",
        secondary:"#9878bf",
        tertiary:"#c2a737",
        blacklight:"#1f1f1f",
        black:"#181818"
      },
      fontFamily: {
        jetBrains: ['JetBrains Mono', 'monospace'],
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        '2xl': '1280px', 
      }
    },
  },
  plugins: [],
}


// npx @tailwindcss/cli -i ./public/style/style.css -o ./dist/style.css --watch