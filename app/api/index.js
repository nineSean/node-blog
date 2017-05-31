/*
 * api server
 */

let apiServer = url => {
  return Promise.resolve({
    then: (resolve, reject) => {
      let apiMap = {
        '/user.action': ['sean', 28, 'male'],
        '/list.action': ['nike', 'adidas', 'puma']
      }
      resolve(apiMap[url])
    }
  })
}

module.exports = apiServer
