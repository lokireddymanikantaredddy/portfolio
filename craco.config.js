module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "ajv": require.resolve("ajv"),
        }
      }
    }
  }
}; 