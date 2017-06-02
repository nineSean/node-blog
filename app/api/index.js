/*
 * api server
 */

let apiServer = (request) => {
  let { url, method, context } = request
  let apiMap = {
    '/user.action': ['sean', 28, 'male'],
    '/list.action': ['nike', 'adidas', 'puma']
  }
  method = method.toLowerCase()
  if (method === 'get') {
    return Promise.resolve(apiMap[url])
  } else {
    let { body } = context
    return Promise.resolve(body)
  }
}

module.exports = apiServer
