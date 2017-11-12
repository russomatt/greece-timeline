var path = require('path');
const webpack = require('webpack');

const loaders = {
    scssLoader: {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader',
    },
    cssLoader: {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader',
    }
};
const app = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
    },
    module: {
        loaders: [
            loaders.scssLoader,
            loaders.cssLoader,
        ]
    },
    plugins:[
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
    ]
};
module.exports = [
    app
]
