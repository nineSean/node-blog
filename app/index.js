// 主要核心逻辑入口
const fs = require('fs')
const path = require('path')
const staticServer = require('./static-server')
class App {
  constructor() {

  }
  initServer() {
    //初始化工作
    return (request, response) => {

      let { url } = request
      let body = staticServer(url)
      response.end(body)
    }
  }
}

module.exports = App
