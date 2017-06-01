/*
 * api server
 */

let apiServer = url => {
  let apiMap = {
    '/user.action': ['sean', 28, 'male'],
    '/list.action': ['nike', 'adidas', 'puma']
  }
  return Promise.resolve(apiMap[url])
}

module.exports = apiServer
