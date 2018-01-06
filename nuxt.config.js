module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "portfolio",
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
        href: "//fonts.googleapis.com/css?family=Open+Sans"
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
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },
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
            '@import "./assets/scss/constants.scss";';
        }
      });
    }
  }
};
