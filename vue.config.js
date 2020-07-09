var path = require('path')

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@elements': path.resolve(__dirname, 'src/components/elements'),
        '@common': path.resolve(__dirname, 'src/components/common'),
        '@layout': path.resolve(__dirname, 'src/components/layout'),
        '@module': path.resolve(__dirname, 'src/components/module'),
        '@skeleton': path.resolve(__dirname, 'src/components/skeleton'),
        '@directives': path.resolve(__dirname, 'src/directives'),
        '@mixins': path.resolve(__dirname, 'src/mixins')
      }
    }
  },
  pwa: {
    name: 'Watchflix',
    themeColor: '#35485e',
    manifestOptions: {
      background_color: '#40b882'
    }
  }
}
