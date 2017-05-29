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
      let getPath = (url) => {
        return path.resolve(process.cwd(), 'public', `.${url}`)
      }
      let staticFunc = (url) => {
        if (url === '/') {
          url = '/index.html'
        }
        let _path = getPath(url)
        fs.readFile(_path,'binary' , (error, data) => {
          if(error) data = `NOT FOUND ${error.stack}`
          response.end(data,'binary')
        })
      }
      staticFunc(url)
    }
  }
}

module.exports = App
