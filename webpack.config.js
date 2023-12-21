const path = require('path');

module.exports = {
  mode: 'development', // ou 'production' \\development
  entry: './src/scss/main.scss',
  output: {
    path: path.resolve(__dirname, 'public/css'),
    filename: 'main.css',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};





