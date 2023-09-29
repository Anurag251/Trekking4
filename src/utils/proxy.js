const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/instagram",
    createProxyMiddleware({
      target: "https://www.instagram.com",
      changeOrigin: true,
    })
  );
};
