module.exports = {
    css: {
        extract: {
            filename: "[name].css",
            chunkFilename: "css/[name].css",
        },
    },
    devServer: {
        port: process.env.VUE_APP_PORT,
        disableHostCheck: true,
        host: "127.0.0.1"
    },
};