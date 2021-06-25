const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const commonConfig = {
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

const demoConfig = ({ favicon = 'public/favicon.svg' } = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
      favicon,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public/static', to: '' }],
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'demo'),
  },
  devServer: {
    host: '0.0.0.0',
    useLocalIp: true,
  },
});

const devConfig = {
  mode: 'development',
};

const prodConfig = {};

module.exports = (env) => {
  switch (true) {
    case env.development:
      return merge(
        commonConfig,
        demoConfig({ favicon: 'public/favicon-dev.svg' }),
        devConfig
      );
    case env.demo:
      return merge(commonConfig, demoConfig());
    case env.production:
      return merge(commonConfig, prodConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
