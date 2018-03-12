var webpack = require('webpack');

var path = require('path');

module.exports = {
    entry: './src/sandwich.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'sandwichbundle.js'
    }

};