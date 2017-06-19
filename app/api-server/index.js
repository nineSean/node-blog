/*
 * api server
 */

let apiServer = (ctx) => {
  let { url, method } = ctx.req
  let { resCtx, reqCtx } = ctx
  let { res } = ctx

  let apiMap = {
    '/user.action': ['sean', 28, 'male'],
    '/list.action': ['nike', 'adidas', 'puma']
  }
  method = method.toLowerCase()
  return Promise.resolve({
    then: (resolve, reject) => {
      if (url.match('action')) {
        if (method === 'get') {
          resCtx.body = JSON.stringify(apiMap[url])
        } else {
          resCtx.body = JSON.stringify(reqCtx.body)
        }
        resCtx.headers = Object.assign(resCtx.headers, { "Content-Type": "application/json" })
      }
      resolve()
    }
  })
}

module.exports = apiServer
