const path = require('path')
module.exports = {
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@data': path.resolve(__dirname, '../src/data'),
      '@elements': path.resolve(__dirname, '../src/components/elements'),
      '@common': path.resolve(__dirname, '../src/components/common'),
      '@layout': path.resolve(__dirname, '../src/components/layout'),
      '@module': path.resolve(__dirname, '../src/components/module'),
      '@skeleton': path.resolve(__dirname, '../src/components/module'),
      '@directives': path.resolve(__dirname, '../src/directives'),
      '@mixins': path.resolve(__dirname, '../src/mixins')
    }
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader'],
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|jpeg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.stories\.js?$/,
        loaders: [{
          loader: require.resolve('@storybook/source-loader'),
          options: {
            prettierConfig: {
              printWidth: 100,
              tabWidth: 2,
              bracketSpacing: true,
              trailingComma: 'es5',
              singleQuote: true,
            }
          }
        }],
        enforce: 'pre',
      }
    ]
  }
}