module.exports = {
    module: {
        rule: [
            {
                test: /\.js$\,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }     // loads bable-loader
            }
        ]
    }
}

// test: /\.js$\,                      // load all js files
// exclude: /node_modules/,            // exclude dir 'node_modules'
// use: { loader: "babel-loader" }     // loads bable-loader