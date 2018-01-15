
var path = require( 'path' );
var webpack = require( 'webpack' );
var HtmlWebPackPlugin = require( 'html-webpack-plugin' );
 
module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
      //favicon: 'src/img/favicon.ico'
    })
  ],
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules|server/
      },{
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },{
        test: /\.(png|jpg|gif|svg|otf|eot|woff2|woff|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    noInfo: true,
    port: 1234,
  },

  performance: {
    hints: false
  },

  devtool: 'source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
