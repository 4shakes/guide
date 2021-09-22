//nos permite configurar taiwind a nivel de compilacion

module.exports = {
      purge: [
            './public/**/*.html',
      ],
      darkMode: false, //or 'media' or 'class'
      theme: {
            extend: {
                  backgroundImage: {
                        'tropa': "url('../img/tropa28_sm.png')"
                  },
                  backgroundColor: theme => ({
                        ...theme('colors'),
                        'blue-guide': '#0205C7',
                        'gray-guide': '#E5E5E5',
                        'gray-footer': '#595858',
                  })
            }
      },
      variants: {
            extends: {},
      },
      plugins: [],
}