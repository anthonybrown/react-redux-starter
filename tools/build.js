import webpack       from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors        from 'colors';

process.env.NODE_ENV = 'production'; // this assures that Babel dev config (hot reloading) doesn't apply.

console.log('Generating minified bundle from production via webpack. This will take a moment...'.rainbow);

webpack(webpackConfig).run((err, stats) => {
	if (err) {
		console.log(err.bold.red);
		return 1;
	}

	const jsonStats = stats.toJson();

	if (jsonStats.hasErrors) {
		return jsonStats.errors.map(error => console.log(error.red));
	}

	if (jsonStats.hasWarnings) {
		console.log('Webpack generated the following warnings: '.bold.yellow);
		jsonStats.warnings.map(warning => console.log(warning.yellow));
	}

	console.log(`Webpack stats: ${stats}`);

	// if you got this far, the build succeeded.
	console.log('The app is compiled in production mode and written to /dist. It\'s ready to roll!'.green);

	return 0;
});

