const path = require('path')

module.exports =
    {
    entry: './src/index.ts',
    context: path.resolve(__dirname, "."), // 这个必须有，不然会有问题
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['swc-loader']
            }
        ]
    },
    plugins: []
}