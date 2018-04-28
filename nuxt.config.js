module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Antoine Ponsard - portfolio",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "portfolio 2.0"
      },
      {
        name: "msapplication-config",
        content: "/img/favicons/browserconfig.xml"
      },
      {
        name: "theme-color",
        content: "#ffffff"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "//fonts.googleapis.com/css?family=Merriweather:900|Open+Sans:400"
      },
      { 
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/favicons/apple-touch-icon.png"
      },
      { 
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/favicons/favicon-32x32.png"
      },
      { 
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/favicons/favicon-16x16.png"
      },
      { 
        rel: "manifest",
        href: "/img/favicons/manifest.json"
      },
      { 
        rel: "mask-icon",
        href: "/img/favicons/safari-pinned-tab.svg",
        color: "#5bbad5"
      },
      { 
        rel: "shortcut icon",
        href: "/img/favicons/favicon.ico"
      }
    ]
  },
  /*
   ** External CSS librairies
   */
  css: ["~/css/bootstrap-reboot.css", "~/css/bootstrap-grid.css"],
  /*
   ** Modules
   */
  plugins: ["~/plugins/vue-scrollactive"],
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-60712214-1'
    }]
  ],
  /*
   ** Customize the progress bar
   */
  loading: false,
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }

      config.module.rules.forEach(rule => {
        if (rule.test.toString() === "/\\.vue$/") {
          rule.options.loaders.scss[2].options.data =
            '@import "./assets/scss/constants.scss";@import "./assets/scss/global.scss";';
        }
      });
    }
  }
};
