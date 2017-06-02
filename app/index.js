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
const urlParser = require('./url-parser')
class App {
  constructor() {

  }
  initServer() {
    //初始化工作
    return (request, response) => {
      let { url, method } = request
      request.context = {
        body: '',
        query: {},
        method: 'get'
      }
      urlParser(request).then(() => {
        return apiServer(request)
      }).then(data => {
        if (!data) {
          return staticServer(request)
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
