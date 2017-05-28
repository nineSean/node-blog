// 主要核心逻辑入口
const fs = require('fs')
class App {
  constructor() {

  }
  initServer() {
    //初始化工作
    return (request, response) => {

      let { url } = request
      let staticFunc = (url) => {
        fs.readFile(`./public${url}`, 'utf-8', (error, data) => {
          response.end(data)
        })
      }
      if (url === '/') {
        staticFunc('/index.html')
      }
      staticFunc(url)
    }
  }
}

module.exports = App
