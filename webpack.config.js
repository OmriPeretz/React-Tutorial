let webpack = require("webpack");
let dirname = __dirname;

module.exports = {
    entry: [
        `${dirname}/src/main.js`
    ],
    devtool: 'source-map',
    output: {
        path: `${dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude:/(node_modules)/,
                query:{
                    presets:['es2015', 'react'],
                    plugins: [
                        ["babel-plugin-transform-builtin-extend", {
                            globals: ["Array"],
                        }]
                    ]
                }
            },
            {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]'
                ]
            }
        ]
    }
};