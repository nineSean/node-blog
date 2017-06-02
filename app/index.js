/**
 * @author nineSean
 * @email ninesean1989@gmail.com
 * @create date 2017-05-29 03:42:05
 * @modify date 2017-05-29 03:42:05
 * @desc [description]
 */
// 主要核心逻辑入口
const fs = require('fs')
const path = require('path')
const staticServer = require('./static-server')
const apiServer = require('./api')
class App {
  constructor() {

  }
  initServer() {
    //初始化工作
    return (request, response) => {
      let { url, method } = request
      apiServer(request).then(data => {
        if (!data) {
          return staticServer(url)
        } else {
          return data
        }
      }).then(data => {
        let body
        let finalHeaders = { 'X-powered-by': 'Node.js' }
        if (data instanceof Buffer) {
          body = data
        } else {
          finalHeaders = Object.assign(finalHeaders, { 'Content-Type': 'application/json' })
          body = JSON.stringify(data)
        }
        response.writeHead(200, 'resolve ok', finalHeaders)
        response.end(body)
      })
    }
  }
}

module.exports = App
