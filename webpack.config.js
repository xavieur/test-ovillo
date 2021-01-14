const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        forum: './src/forum.js'
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [ // [UseEntry]
                    { // UseEntry: string | {}
                        loader: 'babel-loader', // required
                        options: {
                            // https://babeljs.io/docs/en/options#pluginpreset-entries
                            presets: [ // [PresetEntry] - reversed order !
                                '@babel/preset-env', // individual preset without options
                                '@babel/preset-react' // individual preset without options
                                // ['@babel/plugin-transform-for-of', { loose: true }, "some-name"],
                            ],
                            plugins: [ // [PluginEntry] -  normal order
                                '@babel/plugin-proposal-class-properties' // individual plugin without options
                            ]
                        }
                    }]
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                'postcss-preset-env'
                            ]
                        }
                    }
                },
                'sass-loader'
            ]
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000,
        open: true
    }
}