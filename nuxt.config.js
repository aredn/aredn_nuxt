import colors from 'vuetify/es5/util/colors'
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

export default {
  env: {
    apiROOT: process.env.NODE_ENV === 'development'
      ? 'http://localnode.local.mesh:8080/cgi-bin'
      : '/cgi-bin'
  },
  // publicPath: process.env.NODE_ENV === 'development'
  //   ? '/'
  //   : '/nuxt/',

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },


  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - AREDN',
    title: 'Your Node',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@mdi/font/css/materialdesignicons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // ['@nuxtjs/vuetify', { iconfont: 'mdi' }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    //'@nuxtjs/axios',
    '@nuxt/http',
    //'nuxt-leaflet',
    // '@nuxtjs/proxy'
  ],

  // // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {
  //   proxy: true,
  // },

  // proxy: {
  //   '/api/': { 
  //     target: 'http://192.168.0.47/cgi-bin/api', 
  //     pathRewrite: {'^/api/': '/cgi-bin/api/'}, 
  //     changeOrigin: true,
  //     ws: true 
  //   }
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: false,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    //   transpile: ['vuetify/lib'],
    //   plugins: [
    //     new webpack.DefinePlugin({
    //       'process.COMMITHASH': JSON.stringify(git_revision_plugin.commithash())
    //     }),
    //     new VuetifyLoaderPlugin({
    //       /**
    //        * This function will be called for every tag used in each vue component
    //        * It should return an array, the first element will be inserted into the
    //        * components array, the second should be a corresponding import
    //        *
    //        * originalTag - the tag as it was originally used in the template
    //        * kebabTag    - the tag normalized to kebab-case
    //        * camelTag    - the tag normalized to PascalCase
    //        * path        - a relative path to the current .vue file
    //        * component   - a parsed representation of the current component
    //        */
    //       match (originalTag, { kebabTag, camelTag, path, component }) {
    //         if (kebabTag.startsWith('core-')) {
    //           return [
    //             camelTag,
    //             `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`
    //           ]
    //         }
    //       }
    //     })
    //   ],
    //   /**
    //    * todo: nuxt 升级到3.0版本以上的时候需要改为对象的形式展示，目前用的是nuxt2.14.6暂时用数组，构建的时候会有警告
    //    * 2.0版本切换object rem 不生效
    //    * Using an Array as build.postcss will be deprecated in Nuxt 3. Please switch to the object declaration
    //    */
    //   postcss: [
    //     require('postcss-px2rem')({
    //       remUnit: 75
    //     })
    //   ],
    //   /*
    //   ** You can extend webpack config here
    //   */
    //   extend (config, { isDev, isClient }) {
    //     if (isClient && !isDev) {
    //       config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
    //     }
    //   }
  }
}
