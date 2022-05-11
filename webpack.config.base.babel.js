import path from 'path';
import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import DuplicatePackageCheckerPlugin from 'duplicate-package-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const devMode = process.env.NODE_ENV !== 'production';

export default {
  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname),

  // Get mode from NODE_ENV
  mode: process.env.NODE_ENV,

  // Determine how the different types of modules within a project will be treated
  module: {
    rules: [
      // Use babel-loader for ts(x) files
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      // Use a list of loaders to load materialize and prism css files
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !devMode,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: () => [postcssImport, postcssPresetEnv, cssnano],
              },
            },
          },
        ],
      },
      // Use a list of loaders to load scss files
      {
        test: /\.scss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: !devMode,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: () => [postcssImport, postcssPresetEnv, cssnano],
              },
            },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      // Use image-webpack-loader and url-loader to load images
      {
        test: /\.(png|jpe?g|gif|svg|webp|tiff)(\?.*)?$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      // Use url-loader to load font related files
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000, name: '[name].[ext]' },
          },
        ],
      },
      // Use url-loader to load audio related files
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10000, name: '[name].[ext]' },
          },
        ],
      },
    ],
  },

  // A list of used webpack plugins
  plugins: [
    // Enforces case sensitive paths.
    new CaseSensitivePathsPlugin(),
    // Warns when multiple versions of the same package exist in a build
    new DuplicatePackageCheckerPlugin(),

    // Extract css part from javascript bundle into separated file
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:10].css',
      chunkFilename: '[name].[contenthash:10].css',
    }),
    // Better building progress display
    new ProgressBarWebpackPlugin(),
    // Runs typescript type checker on a separate process
    // new ForkTsCheckerWebpackPlugin(),
    // Generate html file to dist folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.svg'),
    }),

    // Copy static files to build dir
    new CopyWebpackPlugin([
      {
        from: 'public',
        to: 'public',
        ignore: ['index.html'],
      },
    ]),
  ],

  // Change how modules are resolved
  resolve: {
    // What directories should be searched when resolving modules
    modules: ['node_modules', 'src'],
    // Automatically resolve certain extensions (Ex. import 'folder/name(.ext)')
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss'],
    plugins: [new TsconfigPathsPlugin()],
  },
};
