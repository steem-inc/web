// config at your vue.config.js

var path = require("path")
var PrerenderSpaPlugin = require("prerender-spa-plugin")
var Renderer = PrerenderSpaPlugin.PuppeteerRenderer

module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  chainWebpack: config => {
    if (process.env.NODE_ENV !== "production") config.module.rule("eslint").use("eslint-loader").options({fix: true})
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("@components", path.resolve(__dirname, "src/components"))
      .set("@views", path.resolve(__dirname, "src/views"))
      .set("@router", path.resolve(__dirname, "src/router"))
      .set("@constants", path.resolve(__dirname, "src/constants"))
      .set("@assets", path.resolve(__dirname, "src/assets"))
  }
  /*,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") return {
      plugins: [
        new PrerenderSpaPlugin({
          // Required - The path to the webpack-outputted app to prerender.
          staticDir: path.join(__dirname, "dist"),
          routes: [ "/", "/about", "/contact", "/privacy" ],
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true
          },
          renderer: new Renderer({
            timeout: 60000,
            maxConcurrentRoutes: 20,
            renderAfterDocumentEvent: "render-event",
            headless: false
          })
        })
      ]
    }
  }
  */
}