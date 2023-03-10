/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontSize: {
      sm: ['20px'],
      base: ['20px','24px'],
      lg: ['20px', '28px'],
      xl: ['24px','32px'],
      '2xl' : ['30px'],
      '3xl': ['36px'],
      '4xl':['40px'],
      '5xl': ['45px'],
      '6xl': ['65px'],
      '7xl': ['90px'],
      '8xl' : ['110px'],
      '10xl': ['128px']
    },
    extend:{
      screens: {
        'ps': '320px',
        // => @media (min-width: 640px) { ... }
  
        'pm':'375px',
  
        'pl':'425px',
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
  
        //new screen
        //'ps':'320px'
        //'pl':'425px'
      }
    }
  },
  plugins: [],
}
