/*
 * api server
 */

let apiServer = (request) => {
  let { url, method } = request
  let apiMap = {
    '/user.action': ['sean', 28, 'male'],
    '/list.action': ['nike', 'adidas', 'puma']
  }
  method = method.toLowerCase()
  if (method === 'get') {
    return Promise.resolve(apiMap[url])
  } else {
    return new Promise((resolve, reject) => {
      let data = ''
      request.on('data', (chunk) => {
        data += chunk
      }).on('end', () => {
        resolve(data)
      })
    })
  }
}

module.exports = apiServer
