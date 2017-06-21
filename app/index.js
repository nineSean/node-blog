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

class App {
  constructor() {
    this.middlewareArr = []
      //设计一个空的Promise
    this.middlewareChain = Promise.resolve()
  }
  use(middleware) {
      this.middlewareArr.push(middleware)
    }
    //创建Promise链
  composeMiddleware(context) {
    let { middlewareArr } = this
    //根据中间件数组 创建Promise链条
    for (let middleware of middlewareArr) {
      this.middlewareChain = this.middlewareChain.then(() => {
        return middleware(context)
      })
    }
    return this.middlewareChain
  }
  initServer() {
    //初始化工作
    return (request, response) => {
      let { url, method } = request
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

      this.composeMiddleware(context)
          .then(() => {
            let { body, headers } = context.resCtx
            let base = { 'X-powered-by': 'Node.js' }
            response.writeHead(200, 'resolve ok', Object.assign(base, headers))
            response.end(body)
          })
    }
  }
}

module.exports = App
