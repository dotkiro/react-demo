const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const BundleAnalyzer = require('webpack-bundle-analyzer')

const config = (env = {}) => {

  const isProduction = env.production
  const ENV = isProduction ? 'production' : 'development'
  process.env.NODE_ENV = ENV

  const config = {
    context: __dirname,

    mode: ENV,
    
    target: 'web',

    stats: 'errors-only',

    devtool: 'cheap-eval-source-map',

    devServer: {
      proxy: {
        '/api': 'http://localhost:3000'
      },
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      host: '0.0.0.0',
      hot: true,
      noInfo: true,
      port: 8000,
      http2: true,
      open: true,
      useLocalIp: true,
      openPage: ''
    },

    entry: {
      app: './src/index.tsx'
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash:6].js',
    },
  
    resolve: {
  
      modules: [
        'node_modules',
        path.resolve(__dirname, 'src')
      ],
  
      extensions: ['.ts', '.tsx', '.js'],
  
      alias: {
        '@': path.resolve(__dirname, 'src')
      },
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'eslint-loader',
            }
          ]
        },
        {
          test: /\.css/,
          use: [
            {
              loader: 'style-loader',
              options: {
                injectType: 'styleTag',
                insert: 'head'
              }
            },
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.less/,
          use: [
            {
              loader: 'style-loader',
              options: {
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
                localsConvention: 'camelCaseOnly',
                localIdentName: isProduction ? '[hash:5]' : '[local]'
              }
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|woff2?|ttf|svg|eot)$/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'assets/[name][hash:6].[ext]',
                limit: 8192,
              }
            }
          ]
        },
        {
          test: /\.(mp3|mp4)$/,
          include: [
            path.resolve(__dirname, 'src')
          ],
          use: [
            {
              loader: 'url-loader',
              options: {
                name: 'media/[name][hash:6].[ext]',
                limit: 8192,
              }
            }
          ]
        },
      ],
    },

    performance: {
      hints: 'warning',
      maxEntrypointSize: 204800,
      assetFilter (assetFilename) {
        return !(/\.(map|zip|mp3|jpg|png)$/.test(assetFilename))
      }
    },
  
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true
        },
      }),
      new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/^runtime/]),
      new webpack.BannerPlugin('All Rights Reserved'),
      new BundleAnalyzer.BundleAnalyzerPlugin({
        analyzerMode: isProduction ? 'static' : 'disabled'
      })
    ],

    optimization: {
      runtimeChunk: true,
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            maxSize: 204800,
            priority: 10
          },
          default: {
            minChunks: 2,
            priority: -20,
            maxSize: 204800,
            reuseExistingChunk: true
          }
        }
      }
    }
  }

  return config
}


exports.default = config
