const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (_env, argv) => {
    const config = {
        entry: "./src/index.tsx",
        output: {
            path: resolve('dist'),
            filename: "[name].js"
        },
        module: {
            rules: [{
                test: /\.tsx$/,
                include: resolve("src"),
                use: "babel-loader"
            }, {
                test: /\.css$/,
                include: resolve("src"),
                use: ["style-loader", "css-loader"]
            }, {
                test: /\.(png)|(svg)$/,
                include: resolve("src"),
                use: "url-loader"
            }]
        },
        plugins: [new HtmlWebpackPlugin({
            template: "./template/index.html"
        })],
        resolve: {
            extensions: [".tsx", ".js"]
        },
        devtool: argv.mode === "development" ? "eval-source-map" : "source-map",
        devServer: {
            host: "0.0.0.0",
            proxy: {
                "/api/v1": "http://localhost:3000",
                secure: false
            }
        }
    }
    return config;
}