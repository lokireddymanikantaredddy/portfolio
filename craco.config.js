module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "ajv": require.resolve("ajv"),
          "path": require.resolve("path-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "stream": require.resolve("stream-browserify"),
          "buffer": require.resolve("buffer/"),
          "util": require.resolve("util/"),
        }
      },
      optimization: {
        splitChunks: {
          chunks: 'all',
        },
        runtimeChunk: true,
      }
    }
  }
}; 