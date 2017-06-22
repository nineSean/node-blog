/*
 * view-server
 * @Author nineSean
 */

// 映射表

//ejs动态渲染

const ejs = require('ejs')
const fs = require('fs')
const path = require('path')
module.exports = (ctx) => {
  let { req, resCtx } = ctx
  let { url } = req
  return Promise.resolve({
    then: (resolve, reject) => {
      let urlMap = {
        '/': {
          viewName: 'index.html'
        },
        '/about': {
          viewName: 'about.html'
        },
      }
      let viewPath = path.resolve(process.cwd(), 'public')
      if (urlMap[url]) {
        let { viewName } = urlMap[url]
        let htmlPath = path.resolve(viewPath, viewName)
        let tempStr = fs.readFileSync(htmlPath,'utf8')
        let render = ejs.compile(tempStr, {
          compileDebug: true
        })
        resCtx.body = render()
        resolve()
      } else {
        resolve()
      }
    }
  })
}
