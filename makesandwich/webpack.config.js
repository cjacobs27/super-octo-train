const path = require("path");

module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, './src/sandwich.js')],
    // entry: ['babel-core/external-helpers', 'babel-polyfill', path.resolve(__dirname, './src/sandwich.js')],

    output: {
        path: path.join(__dirname),

        filename: './dist/sandwichbundle.js',
    },


    resolve: {},

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // test: /\.jsx?$/,
                exclude: [path.resolve(__dirname, "/node_modules/")],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    // externalHelpers: true,
                    presets: ['react', 'es2015']
                },
            },
        ]

    }
}
