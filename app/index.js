// 主要核心逻辑入口
const fs = require('fs')
class App {
  constructor() {

  }
  initServer() {
    //初始化工作
    return (request, response) => {


      let { url } = request
      if (url === '/') {
        fs.readFile('./public/index.html', 'utf-8', (error, data) => {
          response.end(data)
        })
      } else if (url === '/css/index.css') {
        fs.readFile('./public/css/index.css', 'utf-8', (error, data) => {
          response.end(data)
        })
      } else if (url === '/js/index.js') {
        fs.readFile('./public/js/index.js', 'utf-8', (error, data) => {
          response.end(data)
        })
      }
    }
  }
}

module.exports = App
