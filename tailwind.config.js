/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./public/*.{html,js}",
    "./src/**/*.{html,js}" 
  ],
  theme: {
    container:{
      center:true,
      padding:'2rem',
      screens:{
        sm:'640px',
        md:'768px',
        lg:'1024px',
        xl:'1024px',
        '2xl':'1024px',
      }
    },
    extend: {
      colors:{
        blue:{
          300:'var(--clr-primary-300)',
          800:'var(--clr-primary-800)'
        }
      },
      fontFamily:{
        'primary':'Rubik'
      },
      backgroundImage:{
        'dot-pattern':'url(./img/bg-dots.svg)',
        'menu':'url(./img/icon-hamburger.svg)',
        'close':'url(./img/icon-close.svg)',
        'arrow':'url(./img/icon-arrow.svg)'
      },
      width:{
        'wrapper':'min(1110px, 95vw)'
      },
      transitionProperty:{
        'max-height':'max-height',
      }
    },
  },
  plugins: [],
}
