const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, './src/sandwich.js'),

    output: {
        path: path.join(__dirname),

        filename: './dist/sandwichbundle.js',
    },

    // node: {
    //     __dirname: false
    // },

    resolve: {},

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // include: [path.resolve(__dirname, "sandwich")],
                exclude: [path.resolve(__dirname, "/node_modules/")],
                // issuer: { test, include, exclude },
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                },
            },
            // {
            //   test: /\.js$/,
            //   exclude: /(node_modules|bower_components)/,
            //   use: {
            //     loader: 'babel-loader',
            //     options: {
            //       presets: ['@babel/preset-env']
            //     }
            //   }
            // }
        ]

    }
}

// module.exports = {
//   entry: [
//     './src/sandwich.js'
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
//   output: {
//     path: __dirname + '/dist',
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: './dist'
//   }
// };
