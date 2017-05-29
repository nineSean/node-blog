// 主要核心逻辑入口
const fs = require('fs')
const path = require('path')
class App {
  constructor() {

  }
  initServer() {
    //初始化工作
    return (request, response) => {

      let { url } = request
      let getPath = (url)=>{
        return path.resolve(process.cwd(),'public',`.${url}`)
      }
      let staticFunc = (url) => {
        let _path = getPath(url)
        fs.readFile(_path, 'utf-8', (error, data) => {
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
