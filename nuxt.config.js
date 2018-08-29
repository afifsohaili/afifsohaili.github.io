const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: { base: '/afifsohaili.github.io/' }
} : {}

module.exports = {
  head: {
    title: 'Afif Sohaili | A Web Developer based in Malaysia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A Web Developer based in Malaysia'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    'nuxt-buefy',
  ],
  ...routerBase
}
