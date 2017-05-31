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
      let { url } = request
      let body
      let headers = {}
      if (url.match('action')) {
        apiServer(url).then(body => {
          body = JSON.stringify(body)
          headers = { 'Content-Type': 'application/json' }
          let finalHeaders = Object.assign(headers, { 'X-powered-by': 'Node.js', })
          response.writeHead(200, 'resolve ok', finalHeaders)
          response.end(body)
        })
      } else {
        staticServer(url).then((body) => {
          let finalHeaders = Object.assign(headers, { 'X-powered-by': 'Node.js', })
          response.writeHead(200, 'resolve ok', finalHeaders)
          response.end(body)
        })

      }
    }
  }
}

module.exports = App
