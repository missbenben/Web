'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {//开发环境配置

    // Paths
    assetsSubDirectory: 'static',//子目录，存放css,js,img等文件
    assetsPublicPath: '/',//根目录
    proxyTable: {},//代理 可利用该属性解决跨域

    // Various Dev Server settings
    host: 'localhost', //地址
    port: 8080, //端口号
    autoOpenBrowser: false,//是否在编译后打开
    errorOverlay: true,//浏览器错误提示
    notifyOnErrors: true,//跨平台错误提示
    poll: false,  //使用文件系统(file system)获取文件改动的通知devServer.watchOptions

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',//增加调试，该属性为原始源代码（仅限行）不可在生产环境中使用

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,//缓存失效
    cssSourceMap: true////代码压缩后进行调bug定位将非常困难，于是引入sourcemap记录压缩前后的位置信息记录，当产生错误时直接定位到未压缩前的位置，将大大的方便我们调试
  },

  build: {//生产环境
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),//index编译后生成的位置和名字，根据需要改变后缀，比如index.php

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),//打包输出地址
    assetsSubDirectory: 'static',//js,css,images存放文件夹名
    assetsPublicPath: '/',//发布的根目录，通常本地打包dist后打开文件会报错，此处修改为./。如果是上线的文件，可根据文件存放位置进行更改路径

    /**
     * Source Maps
     */

    productionSourceMap: false,//是否生产map文件
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
