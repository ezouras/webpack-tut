const path = require("path");
//needed so that webpac knows your current directory
/* this was just for fun. be sure you change the script
tag file to pint to hello in CODEE if you use this*/
var HtmlWebpackPlugin = require('html-webpack-plugin');
//needed to generate a new dynamic html file

/*module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "hello.js",
    path: path.resolve(__dirname, "CODEE")
  }
}
*/
module.exports = {
  mode: "development",
  /*devtool: false,*/
  entry: "./src/index.js",
  output: {
    filename: "main.[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"
  })],
  module: {
    rules: [{
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings. ORDER MATTERS
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }, ],
  }
}