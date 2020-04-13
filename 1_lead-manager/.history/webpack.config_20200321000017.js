module.exports = {
    module: {
        rule: [{
            test: /\.js$\,
            exclude: /node_modules/,
            use: { loader: "babel-loader" }
        }]
    }
}