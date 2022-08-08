const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const indexParameters = require('./src/templateParameters/index');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = ({ favicon = 'src/favicon.svg' } = {}) => {
  const htmlOptions = {
    inject: true,
    favicon,
  };

  return {
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
          test: /\.s?[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'resolve-url-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(webp|svg)$/i,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
            esModule: false,
          },
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
            query: { inlineRequires: '/src/' },
          },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.hbs',
        filename: 'index.html',
        templateParameters: indexParameters,
        ...htmlOptions,
      }),
      new HtmlWebpackPlugin({
        template: './src/examples.hbs',
        filename: 'examples.html',
        ...htmlOptions,
      }),
      new HtmlWebpackPlugin({
        template: './src/iframe-demo.hbs',
        filename: 'iframe-demo.html',
        ...htmlOptions,
        inject: false,
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'src/static', to: '' }],
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'src/images', to: 'images' }],
      }),
    ],
    output: {
      chunkFilename: '[name].[contenthash].js',
      filename: '[name].[contenthash].js',
      assetModuleFilename: '[name].[contenthash][ext][query]',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.svg'],
    },
    devtool: 'source-map',
    devServer: {
      host: process.env.HOST ?? '0.0.0.0',
      useLocalIp: process.env.NO_LOCAL_IP !== 'true',
    },
  };
};

const devConfig = {
  mode: 'development',
};

module.exports = (env) => {
  switch (true) {
    case env.development:
      return merge(config({ favicon: 'src/favicon-dev.svg' }), devConfig);
    case env.production:
      return config();
    default:
      throw new Error('No matching configuration was found!');
  }
};
