const path = require('path');

module.exports = {
  entry: { main: './app/core.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  }
};