const defaults = require( '@wordpress/scripts/config/webpack.config' );
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );
const I18nLoaderWebpackPlugin = require( '@automattic/i18n-loader-webpack-plugin' );

const path = require( 'path' );
const config = { ...defaults };

// Add server only for development mode and not for production.
if ( 'production' !== process.env.NODE_ENV ) {
	config.devServer = {
		devMiddleware: {
			writeToDisk: true,
		},
		allowedHosts: 'all',
		host: 'localhost',
		port: 8887,
		proxy: {
			'/build': {
				pathRewrite: {
					'^/build': '',
				},
			},
		},
	};
}

module.exports = {
	...config,
	entry: {
		...getWebpackEntryPoints(), // For blocks.
		'i18n-loader': './tools/i18n-loader.ts',
		index: './src/index.tsx', // For admin scripts.
	},
	plugins: [
		...defaults.plugins,
		new I18nLoaderWebpackPlugin( {
			textdomain: 'wp-plugin-kit',
			loaderModule: 'wpPluginKitI18nLoader',
		} ),
	],
	resolve: {
		alias: {
			'@': path.resolve( __dirname, './src' ),
		},
		extensions: [ '.tsx', '.ts', '.jsx', '.js' ],
	},
	externals: {
		wpPluginKitI18nLoader: [ 'window', 'wpPluginKitI18nLoader' ],
	},
};
