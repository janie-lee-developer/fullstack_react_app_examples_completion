//new ruls
// when you see a file that ends with .js (used reg expression)
// use babel-loader

module.exports = {
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        ]
    }
}