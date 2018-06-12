const path = require('path');

module.exports = {
	entry: './app/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
	            options: {
	                presets: ['stage-3'],
				},
			},
		]
	}
};
