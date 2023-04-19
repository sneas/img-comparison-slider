const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const indexParameters = require('./src/templateParameters/index');

const config = (isDev = false) => {
  return {
    mode: isDev ? 'development' : 'production',
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
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(webp|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[contenthash:8][ext]',
          },
        },
        {
          test: /favicon\.svg?$/,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlBundlerPlugin({
        entry: {
          // define templates here
          index: { // => dist/index.html
            import: 'src/views/index.hbs',
            data: { ...indexParameters }, // pass data into the single template
          },
          examples: 'src/views/examples.hbs', // => => dist/examples.html
          'iframe-demo': 'src/views/iframe-demo.hbs', // => => dist/iframe-demo.html
        },
        js: {
          filename: 'js/[name].[contenthash:8].js', // output filename of JS
        },
        css: {
          filename: 'css/[name].[contenthash:8].css', // output filename of CSS
        },
        loaderOptions: {
          preprocessor: 'handlebars',
          preprocessorOptions: {
            partials: [
              'src/views/partials',
            ],
          },
          // pass global data into all templates
          data: {
            isDev,
          },
        },
        minify: 'auto', // minify HTML in production mode only
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: 'src/static', to: '' }],
      }),
    ],
    output: {
      path: path.join(process.cwd(), 'dist'),
      assetModuleFilename: '[name].[contenthash][ext][query]',
    },
    resolve: {
      alias: {
        // aliases to source directories used in templates
        scripts: path.join(__dirname, 'src/scripts'),
        styles: path.join(__dirname, 'src/styles'),
        images: path.join(__dirname, 'src/images'),
      },
      extensions: ['.tsx', '.ts', '.js', '.svg'],
    },
    devtool: 'source-map',
    devServer: {
      host: 'local-ip',
      static: {
        directory: path.join(process.cwd(), 'dist'),
      },
      watchFiles: {
        paths: ['src/**/*.*'], // watch changes in the paths
        options: {
          usePolling: true,
        },
      },
    },
    performance: {
      hints: false, // disable warning size limit
    }
  };
};

module.exports = (env) => {
  switch (true) {
    case env.development:
      return config(true);
    case env.production:
      return config();
    default:
      throw new Error('No matching configuration was found!');
  }
};
