/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './examples/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    environment: {
      arrowFunction: false // 打包不使用箭头函数
    }
  },
  module: {
    rules: [
      {
        // 用ts-loader处理以ts结尾的文件
        test: /\.ts$/, // test指定的是规则生效的文件
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // babel 设置
            options: {
              // 设置预定义的环境
              presets: [
                //  注意括号使用
                [
                  //  指定环境的插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: '60',
                      edge: '17'
                    },
                    // 指定corejs的版本
                    corejs: '3',
                    // 使用corejs的方式 表示按需加载
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node-modules/
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Examples',
      template: './examples/index.html'
    })
    // new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    // 设置别名
    alias: {
      '@': resolve('packages')
    }
  }
}
