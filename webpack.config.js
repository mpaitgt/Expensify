const path = require('path');

module.exports = {
  // webpack config details
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader'
        },
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: [
          'style-loader', 
          'css-loader',
          'sass-loader'
        ],
        test: /\.s?css$/
      }
  ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};