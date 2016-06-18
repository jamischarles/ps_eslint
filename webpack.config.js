var webpack = require('webpack');

module.exports = {
    devtool: 'eval-cheap-module-source-map', // adds source map

    entry: ["./public/js/main"],
    output: {
	path: __dirname + '/public/js/build',
	filename: "bundle.js"
    },
    // Loaders apply transformations before a file is added to bundle.js
    module: {
	loaders: [
	    // Babel loader. Transforms .es6 file from es6->es5 before it's added to bundle.js
	    {
		test: /\.js$/, // include .es6 files
		exclude: /node_modules/, // exclude node_modules
		loader: "babel-loader",
		query: {
		    presets: ['es2015', 'react']
		}
	    }
	]
    },
    plugins: [
	new webpack.optimize.DedupePlugin(),
	new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};

