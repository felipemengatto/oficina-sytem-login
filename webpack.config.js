const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		chunkFilename: '[name].js',
		filename: 'build.min.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 8080,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'app'),
		},
		extensions: ['.js']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './app/index.html'
		}),
		new MiniCssExtractPlugin({
			path: path.resolve(__dirname, './dist'),
			filename: 'build.min.css'
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
			    test: /\.(css)$/,
			    use: [
			        MiniCssExtractPlugin.loader,
			        {
			            loader: 'css-loader',
			            options: {
			                minimize: {
			                    safe: true
			                }
			            }
			        },
			    ]
			},
			{
				test: /\.(png|jpg)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images/'
					}
				}
			}
		]
	},
	optimization: {
		splitChunks: {
			name: true,
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'build.dependencies.min',
					chunks: 'all'
				}
			}
		}
	},
};
