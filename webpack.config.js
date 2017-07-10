module.exports = {
  entry: './lib/main.js',
  output: {
    path: '/Users/runtao/Desktop/healthcare_ad_lib/lib/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // debug: true,
};
