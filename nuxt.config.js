export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Petsitting',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      },{
        rel: 'stylesheet',
        href: '../.././css/animate.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/owl.carousel.min.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/owl.theme.default.min.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/magnific-popup.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/bootstrap-datepicker.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/jquery.timepicker.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/flaticon.css'
      },
      {
        rel: 'stylesheet',
        href: '../.././css/style.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    linkActiveClass: 'my-custom-exact-active-link'
  }
}
