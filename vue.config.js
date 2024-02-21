const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置浏览器跨域代理
  devServer: {
    proxy: 'http://localhost:8080'
  }
})
