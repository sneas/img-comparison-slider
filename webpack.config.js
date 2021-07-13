const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const indexParameters = require('./public/templateParameters/index');

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

const demoConfig = ({ favicon = 'public/favicon.svg', base = '/' } = {}) => {
  const htmlOptions = {
    inject: true,
    favicon,
    base,
  };

  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.hbs',
        filename: 'index.html',
        templateParameters: indexParameters,
        ...htmlOptions,
      }),
      new HtmlWebpackPlugin({
        template: './public/examples.hbs',
        filename: 'examples.html',
        ...htmlOptions,
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'public/static', to: '' }],
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'public/images', to: 'images' }],
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'public/main.css', to: 'main.css' }],
      }),
    ],
    output: {
      path: path.resolve(__dirname, 'demo'),
    },
    devServer: {
      host: process.env.HOST ?? '0.0.0.0',
      useLocalIp: process.env.NO_LOCAL_IP !== 'true',
    },
  };
};

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
      return merge(
        commonConfig,
        demoConfig({
          base: '/img-comparison-slider/',
        })
      );
    case env.production:
      return merge(commonConfig, prodConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
