const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /images\/.+\.(webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
          esModule: false,
        },
      },
      {
        test: /src\/.+\.html/,
        loader: 'html-loader',
      },
      {
        test: /favicon\.svg?$/,
        loader: 'file-loader',
        options: {
          esModule: false,
        },
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          query: { inlineRequires: '/public/' },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets', to: '' }],
    }),
  ],
};
