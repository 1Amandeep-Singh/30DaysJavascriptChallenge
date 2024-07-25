// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/app.js',  // Entry point of your application
  output: {
    filename: 'bundle.js',  // Output bundle file
    path: path.resolve(__dirname, 'dist'),  // Output directory
  },
  mode: 'development',  // Set the mode to development or production
};