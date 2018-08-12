module.exports = {

    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:9000',
                secure: false,
                changeOrigin: true,
                logLevel: 'info'
            },
        }
    }
};
