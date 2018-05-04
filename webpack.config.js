const path = require('path')

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'lib/public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config
