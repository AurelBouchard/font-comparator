module.exports = {
  content: [
    './src/components/**/*.jsx',
    './src/routes/**/*.jsx',
    './src/App.jsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        white: {
          DEFAULT: '#fff',
          transp50 : 'rgba(255,255,255,0.5)'
        }
      },
      backgroundImage: theme => ({
        //'logo': `url('/images/logo_small.png')`,
        //'logo-transp': `url('/images/logo_small_transp.png')`,
        //'logo-text': `url('/images/logo_text.png')`,
      }),
      screens: {
        //sm : 640
        //md : 768
        //lg : 1024
        //xl : 1280
        '1440': '1440px',
        //2xl : 1536
        '3xl': '1600px',
        '4xl': '2000px'
      },
      boxShadow: {
        strong: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
        flood: '0 10px 15px 5px',
        halo: '0 0 50px -5px',
        belt: '0 0 22px 22px'
      },
      borderRadius: {
        'xs': '2px',
        'sm': '3px'
      },
      spacing: {
        '4.5': '1.125rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '34': '8.5rem'
      },
      animation: {
        'appear': 'appear 700ms ease-in forwards'
      },
      keyframes: {
        appear: {
          '0%, 15%': {opacity:'0'}, '100%': {opacity:'1'}
        }
      }
      
    },
    fontFamily: {
      'lefeet': ["left"],
      'rigeeht': ["right"]
    }
  },
  plugins: [],
}
