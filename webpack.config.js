let webpack = require("webpack");
let dirname = __dirname;

module.exports = {
    entry: [
        `${dirname}/src/js/main.js`
    ],
    devtool: 'source-map',
    output: {
        path: `${dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:/(node_modules)/,
                query:{
                    presets:['es2015'],
                    plugins: [
                        ["babel-plugin-transform-builtin-extend", {
                            globals: ["Array"],
                        }]
                    ]
                }
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
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

        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
};