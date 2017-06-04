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
const apiServer = require('./api-server')
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
      let context = {
        req: request,
        reqCtx: {
          body: '', //post请求的数据
          query: {}, //处理客户端get请求
        },
        res: response,
        resCtx: {
          headers: {}, //response的返回报文
          body: '', //返回给前端的内容区
        }
      }

      urlParser(context).then(() => {
        return apiServer(context)
      }).then(() => {
        return staticServer(context)
      }).then(() => {
        let { body } = context.resCtx
        let finalHeaders = { 'X-powered-by': 'Node.js' }
        // if (data instanceof Buffer) {
        //   body = data
        // } else {
        //   finalHeaders = Object.assign(finalHeaders, { 'Content-Type': 'application/json' })
        //   body = JSON.stringify(data)
        // }
        // response.writeHead(200, 'resolve ok', finalHeaders)
        response.end(body)
      })

    }
  }
}

module.exports = App
