module.exports = {
  context: __dirname,
  //entry: ["babel-polyfill", "./app.js"],
  entry: "./app.js",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "transform-class-properties",
              "transform-object-rest-spread"
            ],
            presets: ["babel-preset-env", "babel-preset-react", "es2015"]
          }
        }
      }
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: ["style-loader", "css-loader", "sass-loader"]
      // }
    ]
  }
};
