// 主要核心逻辑入口

class App {
  constructor() {

  }
  initServer() {
    //初始化工作
    let _package = require('../package.json')

    return (request, response) => {

      response.end(JSON.stringify(_package))

    }
  }
}

module.exports = App
